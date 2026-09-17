import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  images: { url: string; caption: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1C1B1A]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="High resolution image view"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between text-white/80 pb-4 border-b border-white/10">
        <span className="text-xs uppercase tracking-[0.2em] font-mono">
          Image {currentIndex + 1} of {images.length}
        </span>
        <button
          onClick={onClose}
          className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors focus-ring"
          aria-label="Close image gallery"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center py-4 overflow-hidden">
        {images.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-6 z-10 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all focus-ring"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <img
          src={current.url}
          alt={current.caption || 'ZEDesign Project Interior Photography'}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';
          }}
          className="max-h-[75vh] max-w-[92vw] sm:max-w-[85vw] object-contain shadow-2xl transition-all duration-300 select-none"
        />

        {images.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-6 z-10 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all focus-ring"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Caption footer */}
      <div className="text-center pt-3 border-t border-white/10 max-w-3xl mx-auto">
        <p className="text-sm text-[#DCD7D0] font-light">
          {current.caption}
        </p>
      </div>
    </div>
  );
};
