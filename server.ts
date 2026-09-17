import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '50mb' }));

  // Lazy initialization for GoogleGenAI
  let aiClient: GoogleGenAI | null = null;
  function getGenAI() {
    if (!aiClient) {
      aiClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY || '',
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });
    }
    return aiClient;
  }

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // API 1: Generate Video with Veo (veo-3.1-fast-generate-preview)
  app.post('/api/generate-video', async (req, res) => {
    try {
      const { imageUrl, aspectRatio = '16:9', prompt, model } = req.body;
      const targetModel = model || 'veo-3.1-fast-generate-preview';
      const promptText =
        prompt ||
        'Smooth cinematic architectural dolly shot moving through the interior space, photorealistic 4k';

      if (!process.env.GEMINI_API_KEY) {
        // Fallback simulation video if API key not present yet
        return res.json({
          simulatedVideoUrl:
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          message: 'Running in simulation preview'
        });
      }

      const ai = getGenAI();

      let referenceImagesPayload: any[] | undefined = undefined;
      if (imageUrl && typeof imageUrl === 'string' && imageUrl.startsWith('data:image')) {
        const parts = imageUrl.split(';base64,');
        const mimeType = parts[0].replace('data:', '');
        const base64Data = parts[1];
        referenceImagesPayload = [
          {
            image: {
              imageBytes: base64Data,
              mimeType: mimeType || 'image/jpeg'
            },
            referenceType: 'ASSET'
          }
        ];
      }

      // Start Veo video generation
      const operation = await ai.models.generateVideos({
        model: targetModel,
        prompt: promptText,
        config: {
          numberOfVideos: 1,
          referenceImages: referenceImagesPayload,
          aspectRatio: aspectRatio as any
        }
      });

      res.json({ operationName: operation.name });
    } catch (err: any) {
      console.warn('Veo Video generation failed, falling back to simulated preview:', err.message);
      res.json({
        simulatedVideoUrl:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        message: 'Preview simulation returned: ' + err.message
      });
    }
  });

  // API 2: Video Status Polling
  app.post('/api/video-status', async (req, res) => {
    try {
      const { operationName } = req.body;
      if (!operationName || !process.env.GEMINI_API_KEY) {
        return res.json({ done: true });
      }

      const ai = getGenAI();
      const op = { name: operationName } as any;
      const updated = await ai.operations.getVideosOperation({ operation: op });
      res.json({ done: updated.done });
    } catch (err: any) {
      console.warn('Veo status check warning:', err.message);
      res.json({ done: true });
    }
  });

  // API 3: Video Download
  app.post('/api/video-download', async (req, res) => {
    try {
      const { operationName } = req.body;
      if (!operationName || !process.env.GEMINI_API_KEY) {
        return res.status(404).json({ error: 'Operation name required' });
      }

      const ai = getGenAI();
      const op = { name: operationName } as any;
      const updated = await ai.operations.getVideosOperation({ operation: op });
      const uri = updated.response?.generatedVideos?.[0]?.video?.uri;

      if (!uri) {
        return res.status(404).json({ error: 'Video URI not found' });
      }

      const videoRes = await fetch(uri, {
        headers: { 'x-goog-api-key': process.env.GEMINI_API_KEY || '' }
      });

      res.setHeader('Content-Type', 'video/mp4');
      const arrayBuffer = await videoRes.arrayBuffer();
      res.send(Buffer.from(arrayBuffer));
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`ZEDesign server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
