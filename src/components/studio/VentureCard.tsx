import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface VentureCardProps {
  name: string;
  description: string;
  execution: string;
  detail: string;
  image: string;
  imagePosition?: string;
  splitImages?: { left: string; right: string };
  splitPortrait?: boolean;
  stackedImages?: { hero: string; small: string };
  url?: string;
  secondaryUrl?: string;
  badge?: string;
  index: number;
}

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm cursor-zoom-out p-4 md:p-10"
        onClick={onClose}
      >
        <motion.img
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          src={src}
          alt={alt}
          className="max-w-full max-h-full object-contain rounded shadow-2xl cursor-default"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none font-light transition-colors"
          aria-label="Fermer"
        >
          ×
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export function VentureCard({ 
  name, 
  description, 
  execution, 
  detail, 
  image,
  imagePosition = 'object-top-left',
  splitImages,
  splitPortrait = false,
  stackedImages,
  url,
  secondaryUrl,
  badge,
  index 
}: VentureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const openLightbox = (src: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxSrc(src);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.arrow-link')) {
      e.stopPropagation();
      return;
    }
    if ((e.target as HTMLElement).closest('.image-trigger')) {
      return; // handled by openLightbox
    }
    setIsExpanded(!isExpanded);
  };

  const imgClass = (extra?: string) =>
    cn('w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]', extra);

  return (
    <>
      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          alt={name}
          onClose={() => setLightboxSrc(null)}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.8,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        onClick={handleCardClick}
        className={cn(
          'group bg-card rounded overflow-hidden cursor-pointer',
          'transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
          'hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(26,58,58,0.1)]'
        )}
      >
        {/* Image area */}
        {stackedImages ? (
          <div className="overflow-hidden">
            <div
              className="h-[240px] overflow-hidden image-trigger cursor-zoom-in"
              onClick={(e) => openLightbox(stackedImages.hero, e)}
            >
              <img src={stackedImages.hero} alt={`${name} hero`} className={imgClass('object-center')} />
            </div>
            <div
              className="h-[120px] overflow-hidden border-t border-border image-trigger cursor-zoom-in"
              onClick={(e) => openLightbox(stackedImages.small, e)}
            >
              <img src={stackedImages.small} alt={`${name} dashboard`} className={imgClass('object-top')} />
            </div>
          </div>
        ) : splitImages ? (
          <div className={cn('flex overflow-hidden', splitPortrait ? 'h-[420px]' : 'h-[280px]')}>
            {/* Left split image */}
            <div
              className="w-1/2 overflow-hidden image-trigger cursor-zoom-in"
              onClick={(e) => openLightbox(splitImages.left, e)}
            >
              <img
                src={splitImages.left}
                alt={`${name} left`}
                className={imgClass(splitPortrait ? 'object-top' : 'object-center')}
              />
            </div>
            {/* Right split image */}
            <div
              className="w-1/2 overflow-hidden border-l border-border/50 image-trigger cursor-zoom-in"
              onClick={(e) => openLightbox(splitImages.right, e)}
            >
              <img
                src={splitImages.right}
                alt={`${name} right`}
                className={imgClass(splitPortrait ? 'object-top' : 'object-top-left')}
              />
            </div>
          </div>
        ) : (
          <div
            className="h-[280px] overflow-hidden relative image-trigger cursor-zoom-in"
            onClick={(e) => openLightbox(image, e)}
          >
            <img src={image} alt={name} className={imgClass(imagePosition)} />
            {badge && (
              <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-body font-medium text-muted-foreground border border-border">
                {badge}
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-8">
          <h3 className="font-display text-[1.875rem] font-normal text-primary mb-2 flex items-center gap-2">
            {name}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link text-sm opacity-0 translate-x-[-8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hover:text-accent"
                onClick={(e) => e.stopPropagation()}
                title="Ouvrir le site"
              >
                ↗
              </a>
            )}
            {secondaryUrl && (
              <a
                href={secondaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link text-sm opacity-0 translate-x-[-8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hover:text-accent"
                onClick={(e) => e.stopPropagation()}
                title="Ouvrir la démo"
              >
                ↗
              </a>
            )}
            <span
              className="ml-auto font-body text-xl font-light text-warm-muted transition-transform duration-300"
              style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}
            >
              +
            </span>
          </h3>

          <p className="font-body text-[1.0625rem] font-light text-muted-foreground mb-4 leading-[1.6]">
            {description}
          </p>

          <p className="font-body text-[0.9375rem] font-normal text-warm-muted tracking-[0.02em]">
            {execution}
          </p>

          {/* Expandable detail */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0,
              marginTop: isExpanded ? 16 : 0,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pt-4 border-t border-border text-base leading-[1.7] text-foreground">
              {detail}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
