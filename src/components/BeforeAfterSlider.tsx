import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, RefreshCw, Wand2, Sparkles, SlidersHorizontal, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  note?: string;
  onOpenVideoStudio?: (selectedImage?: string) => void;
}

export type AnimationMode = 'scan' | 'morph' | 'manual';

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before (Derelict Shell)',
  afterLabel = 'After (Scotts Bistro)',
  note = 'Scotts Bistro, Kirkham — Transformation from derelict shell to award-winning dining destination',
  onOpenVideoStudio
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mode, setMode] = useState<AnimationMode>('scan');
  const [speed, setSpeed] = useState<number>(1); // 1 = standard (~6s cycle)
  const [morphOpacity, setMorphOpacity] = useState(0); // 0 = before, 1 = after

  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Smooth animation loop for 'scan' and 'morph'
  useEffect(() => {
    if (!isPlaying || isDragging || mode === 'manual') {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      return;
    }

    const duration = 5000 / speed; // cycle duration in ms

    const animate = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const elapsed = time - startTimeRef.current;
      
      if (mode === 'scan') {
        // Smooth sine wave between 12% and 88%
        const normalized = (Math.sin((elapsed / duration) * 2 * Math.PI - Math.PI / 2) + 1) / 2;
        const newPos = 12 + normalized * 76;
        setSliderPosition(newPos);
      } else if (mode === 'morph') {
        // Smooth sine wave between 0 and 1
        const normalized = (Math.sin((elapsed / duration) * 2 * Math.PI - Math.PI / 2) + 1) / 2;
        setMorphOpacity(normalized);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isPlaying, isDragging, mode, speed]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPlaying(false);
    handleMove(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPlaying(false);
    handleMove(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    setIsPlaying(false);
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === ' ') {
      e.preventDefault();
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <div className="space-y-4">
      {/* Interactive Control Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-white border border-[#1C1B1A]/10 text-xs">
        <div className="flex items-center gap-2">
          {/* Play/Pause Button */}
          <button
            type="button"
            onClick={() => {
              if (mode === 'manual') setMode('scan');
              setIsPlaying((prev) => !prev);
            }}
            aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1C1B1A] text-white hover:bg-[#B39266] transition-colors font-medium tracking-wide uppercase text-[11px]"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Animate</span>
              </>
            )}
          </button>

          {/* Mode Selector */}
          <div className="flex items-center border border-[#1C1B1A]/15 divide-x divide-[#1C1B1A]/15">
            <button
              type="button"
              onClick={() => {
                setMode('scan');
                setIsPlaying(true);
              }}
              className={`px-2.5 py-1.5 text-[11px] font-medium transition-colors ${
                mode === 'scan' ? 'bg-[#C5A880]/20 text-[#1C1B1A] font-semibold' : 'text-[#1C1B1A]/70 hover:text-[#1C1B1A]'
              }`}
              title="Animated sweeping scan reveal"
            >
              Scan Wipe
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('morph');
                setIsPlaying(true);
              }}
              className={`px-2.5 py-1.5 text-[11px] font-medium transition-colors ${
                mode === 'morph' ? 'bg-[#C5A880]/20 text-[#1C1B1A] font-semibold' : 'text-[#1C1B1A]/70 hover:text-[#1C1B1A]'
              }`}
              title="Animated cross-dissolve timelapse"
            >
              Dissolve Timelapse
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('manual');
                setIsPlaying(false);
              }}
              className={`px-2.5 py-1.5 text-[11px] font-medium transition-colors ${
                mode === 'manual' ? 'bg-[#C5A880]/20 text-[#1C1B1A] font-semibold' : 'text-[#1C1B1A]/70 hover:text-[#1C1B1A]'
              }`}
              title="Interactive manual slider drag"
            >
              Manual Slider
            </button>
          </div>

          {/* Live Indicator */}
          {isPlaying && (
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-[#606D5E] font-medium px-2 py-0.5 bg-[#606D5E]/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#606D5E] animate-ping" />
              Live Animation
            </span>
          )}
        </div>

        {/* Right Action: AI Video Generation trigger */}
        <div className="flex items-center gap-2">
          {onOpenVideoStudio && (
            <button
              type="button"
              onClick={() => onOpenVideoStudio(beforeImage)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F5] border border-[#B39266]/50 hover:border-[#B39266] text-[#1C1B1A] hover:text-[#B39266] text-[11px] font-medium transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B39266]" />
              <span>Animate into Video (Veo)</span>
            </button>
          )}

          {/* Speed Toggle */}
          <button
            type="button"
            onClick={() => setSpeed((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 0.6 : 1))}
            className="text-[10px] text-[#8C827A] hover:text-[#1C1B1A] px-2 py-1 font-mono uppercase border border-transparent hover:border-[#1C1B1A]/10"
            title="Toggle animation playback speed"
          >
            {speed === 0.6 ? '0.6x Slow' : speed === 1.5 ? '1.5x Fast' : '1.0x Normal'}
          </button>
        </div>
      </div>

      {/* Main Visual Display */}
      <div
        ref={containerRef}
        className="relative w-full aspect-16/10 sm:aspect-16/9 max-h-[380px] overflow-hidden select-none cursor-ew-resize border border-[#1C1B1A]/10 shadow-sm group bg-[#1C1B1A]"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="slider"
        aria-label="Before and after animated renovation transformation"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {mode === 'morph' ? (
          /* MORPH TIMELAPSE MODE: Smooth cross-dissolve with subtle atmospheric zoom */
          <div className="relative w-full h-full">
            {/* Before Base Image */}
            <img
              src={beforeImage}
              alt={beforeLabel}
              decoding="async"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80';
              }}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
              style={{
                transform: `scale(${1 + (1 - morphOpacity) * 0.03})`
              }}
            />
            {/* After Dissolve Image */}
            <div
              className="absolute inset-0 transition-opacity duration-100 ease-linear"
              style={{ opacity: morphOpacity }}
            >
              <img
                src={afterImage}
                alt={afterLabel}
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80';
                }}
                className="w-full h-full object-cover"
                style={{
                  transform: `scale(${1 + morphOpacity * 0.03})`
                }}
              />
            </div>

            {/* Ambient Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/40">
              <div
                className="h-full bg-[#C5A880] transition-all duration-75"
                style={{ width: `${morphOpacity * 100}%` }}
              />
            </div>

            {/* Current State Indicator Badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span
                className={`text-[11px] uppercase tracking-[0.16em] px-3 py-1 font-semibold backdrop-blur-xs transition-opacity duration-300 ${
                  morphOpacity < 0.5 ? 'bg-[#1C1B1A]/90 text-[#FAF8F5] opacity-100' : 'opacity-0'
                }`}
              >
                {beforeLabel}
              </span>
              <span
                className={`text-[11px] uppercase tracking-[0.16em] px-3 py-1 font-semibold backdrop-blur-xs transition-opacity duration-300 ${
                  morphOpacity >= 0.5 ? 'bg-[#1C1B1A]/90 text-[#FAF8F5] opacity-100' : 'opacity-0'
                }`}
              >
                {afterLabel}
              </span>
            </div>
          </div>
        ) : (
          /* SCAN WIPE & MANUAL SLIDER MODE */
          <>
            {/* AFTER IMAGE (Background / Full Width) */}
            <img
              src={afterImage}
              alt={afterLabel}
              decoding="async"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80';
              }}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              loading="lazy"
            />
            <div className="absolute top-4 right-4 bg-[#1C1B1A]/85 text-[#FAF8F5] text-[11px] uppercase tracking-[0.18em] px-3 py-1 font-semibold backdrop-blur-xs pointer-events-none border border-white/10">
              {afterLabel}
            </div>

            {/* BEFORE IMAGE (Clipped dynamically with polygon) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
              }}
            >
              <img
                src={beforeImage}
                alt={beforeLabel}
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80';
                }}
                className="absolute inset-0 w-full h-full object-cover filter saturate-60 brightness-95"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#1C1B1A]/85 text-[#FAF8F5] text-[11px] uppercase tracking-[0.18em] px-3 py-1 font-semibold backdrop-blur-xs border border-white/10">
                {beforeLabel}
              </div>
            </div>

            {/* SCANNING LASER / DIVIDER LINE & HANDLE */}
            <div
              className="absolute top-0 bottom-0 pointer-events-none"
              style={{
                left: `${sliderPosition}%`,
                width: '3px',
                transform: 'translateX(-50%)',
                boxShadow: isPlaying ? '0 0 18px 2px rgba(197, 168, 128, 0.95)' : '0 0 8px rgba(0,0,0,0.5)',
                background: 'linear-gradient(to bottom, #C5A880, #FAF8F5, #B39266)'
              }}
            >
              {/* Center Draggable / Animated Puck */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-9 h-9 rounded-full bg-[#1C1B1A] border-2 border-[#C5A880] flex items-center justify-center text-white text-[11px] tracking-tighter shadow-xl">
                {isPlaying ? (
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                  </motion.div>
                ) : (
                  <span>⇄</span>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Narrative caption & interaction hints */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C827A] gap-2 pt-1">
        <p className="italic text-center sm:text-left">
          {note}
        </p>
        <span className="not-italic text-[#1C1B1A]/60 text-[11px] font-mono shrink-0">
          {isPlaying ? '● Auto-playing transformation' : 'Drag or use Left/Right arrows'}
        </span>
      </div>
    </div>
  );
};
