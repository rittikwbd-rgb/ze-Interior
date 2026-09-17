import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackSrc?: string;
  priority?: boolean;
  aspectRatio?: 'square' | 'video' | 'wide' | 'portrait' | 'auto';
  maxWidth?: number;
  quality?: number;
}

// Fallback image in case an external CDN URL fails
const DEFAULT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';

/**
 * Optimizes Unsplash image URLs by clamping requested resolution and ensuring WebP/AVIF format
 */
export function getOptimizedImageUrl(url: string, maxWidth = 1200, quality = 80): string {
  if (!url) return DEFAULT_FALLBACK_IMAGE;

  // Optimize Unsplash images
  if (url.includes('images.unsplash.com')) {
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set('auto', 'format');
      urlObj.searchParams.set('fit', 'crop');
      urlObj.searchParams.set('q', quality.toString());

      // If width is already defined but exceeds maxWidth, or if not defined
      const currentW = parseInt(urlObj.searchParams.get('w') || '0', 10);
      if (!currentW || currentW > maxWidth) {
        urlObj.searchParams.set('w', maxWidth.toString());
      }
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  return url;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  fallbackSrc = DEFAULT_FALLBACK_IMAGE,
  priority = false,
  aspectRatio = 'auto',
  maxWidth = 1200,
  quality = 80,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(() => getOptimizedImageUrl(src, maxWidth, quality));
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);
  const [fallbackAttempted, setFallbackAttempted] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setHasFailed(false);
    setFallbackAttempted(false);
    setCurrentSrc(getOptimizedImageUrl(src, maxWidth, quality));
  }, [src, maxWidth, quality]);

  const handleError = () => {
    if (!fallbackAttempted && fallbackSrc && fallbackSrc !== currentSrc) {
      setFallbackAttempted(true);
      setCurrentSrc(getOptimizedImageUrl(fallbackSrc, maxWidth, quality));
    } else {
      setHasFailed(true);
      setIsLoaded(true);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Aspect ratio classes
  const aspectClass = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-16/10',
    portrait: 'aspect-3/4',
    auto: ''
  }[aspectRatio];

  return (
    <div
      className={`relative overflow-hidden bg-[#1C1B1A]/5 ${aspectClass} ${containerClassName}`}
    >
      {/* Skeleton / Shimmer state while loading */}
      {!isLoaded && !hasFailed && (
        <div className="absolute inset-0 bg-[#FAF8F5] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#C5A880]/30 border-t-[#C5A880] animate-spin" />
        </div>
      )}

      {/* Graceful Fallback if image fails completely */}
      {hasFailed ? (
        <div className="w-full h-full min-h-[160px] bg-[#1C1B1A]/8 border border-[#1C1B1A]/10 p-6 flex flex-col items-center justify-center text-center text-[#8C827A]">
          <div className="w-10 h-10 rounded-full bg-[#1C1B1A]/5 flex items-center justify-center mb-2">
            <ImageIcon className="w-5 h-5 text-[#B39266]" />
          </div>
          <span className="font-serif text-sm text-[#1C1B1A] font-medium block max-w-xs line-clamp-1">
            {alt || 'ZEDesign Architectural Project'}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[#A69E97] mt-1">
            ZEDesign Interiors • Preston
          </span>
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={handleLoad}
          onError={handleError}
          className={`${className} transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
};
