import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
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
  gallery?: string[];
  url?: string;
  urlTitle?: string;
  secondaryUrl?: string;
  secondaryTitle?: string;
  badge?: string;
  capabilities?: string[];
  index: number;
}

function DetailModal({
  name, description, execution, detail, capabilities, onClose,
}: {
  name: string; description: string; execution: string; detail: string;
  capabilities?: string[]; onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';      // no page scroll behind the sheet
    closeRef.current?.focus();
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  // Rendered into <body>: the card lives inside a section that creates its own
  // stacking context, so a z-index alone would still be painted under the
  // sections that follow it.
  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        role="dialog" aria-modal="true" aria-label={name}
        className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center
                   bg-black/70 backdrop-blur-sm p-0 sm:p-6 md:p-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col w-full sm:max-w-[42rem] bg-card cursor-default
                     max-h-[92dvh] sm:max-h-[85dvh]
                     rounded-t-2xl sm:rounded shadow-2xl"
        >
          {/* grab handle — phone only */}
          <div className="sm:hidden pt-3 pb-1 flex justify-center shrink-0">
            <span className="h-1 w-10 rounded-full bg-border" />
          </div>

          <header className="flex items-start gap-4 px-6 sm:px-10 pt-4 sm:pt-9 pb-4 shrink-0 border-b border-border">
            <h3 className="font-display text-[1.5rem] sm:text-[1.75rem] font-normal text-primary leading-tight">
              {name}
            </h3>
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close"
              className="ml-auto -mr-2 -mt-1 h-11 w-11 shrink-0 flex items-center justify-center rounded-full
                         text-2xl font-light text-warm-muted hover:text-primary hover:bg-muted
                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary
                         transition-colors"
            >
              ×
            </button>
          </header>

          <div className="overflow-y-auto overscroll-contain px-6 sm:px-10 pt-5
                          pb-[calc(2rem+env(safe-area-inset-bottom,0px))] sm:pb-10">
            <p className="font-body text-[1.0625rem] font-light text-muted-foreground mb-3 leading-[1.6]">
              {description}
            </p>
            <p className="font-body text-[0.9375rem] text-warm-muted tracking-[0.02em] pb-5 border-b border-border">
              {execution}
            </p>
            <p className="pt-5 text-base leading-[1.7] text-foreground">{detail}</p>

            {capabilities && capabilities.length > 0 && (
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-[0.35rem] list-none p-0 m-0">
                {capabilities.map((c) => (
                  <li
                    key={c}
                    className="font-body text-[0.875rem] leading-[1.55] text-warm-muted relative pl-4
                               before:absolute before:left-0 before:top-[0.62em] before:h-px before:w-2
                               before:bg-warm-muted/50"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

function Lightbox({
  images,
  startIndex,
  alt,
  onClose,
}: {
  images: string[];
  startIndex: number;
  alt: string;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);
  const hasMany = images.length > 1;

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIdx((i) => (i + 1) % images.length);
  };
  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIdx((i) => (i - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasMany) setIdx((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft' && hasMany) setIdx((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length, hasMany, onClose]);

  // Discreet preload of the next image
  useEffect(() => {
    if (!hasMany) return;
    const nextSrc = images[(idx + 1) % images.length];
    const img = new Image();
    img.src = nextSrc;
  }, [idx, images, hasMany]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm cursor-zoom-out p-3 sm:p-6 md:p-10"
        onClick={onClose}
      >
        <div
          className={cn(
            'relative flex-1 w-full flex items-center justify-center min-h-0',
            hasMany ? 'pb-20 sm:pb-24' : ''
          )}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={idx}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              src={images[idx]}
              alt={alt}
              decoding="async"
              className="max-w-full max-h-full object-contain rounded shadow-2xl cursor-default select-none"
              onClick={(e) => e.stopPropagation()}
            />
          </AnimatePresence>

          {hasMany && (
            <>
              <button
                onClick={prev}
                className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center backdrop-blur-sm transition-colors"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center backdrop-blur-sm transition-colors"
                aria-label="Next"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Thumbnails strip */}
        {hasMany && (
          <div
            className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={cn(
                  'relative overflow-hidden rounded transition-all duration-300',
                  'w-14 h-10 sm:w-20 sm:h-14',
                  i === idx
                    ? 'ring-2 ring-white scale-105 opacity-100'
                    : 'opacity-50 hover:opacity-90 ring-1 ring-white/20'
                )}
                aria-label={`Image ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${alt} thumbnail ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/70 hover:text-white text-3xl leading-none font-light transition-colors w-10 h-10 flex items-center justify-center"
          aria-label="Close"
        >
          ×
        </button>
      </motion.div>
    </AnimatePresence>,
    document.body
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
  gallery,
  url,
  urlTitle = 'Open the site',
  secondaryUrl,
  secondaryTitle = 'Open the demo',
  badge,
  capabilities,
  index,
}: VentureCardProps) {
  const [detailOpen, setDetailOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ images: string[]; start: number } | null>(null);

  const openLightbox = (images: string[], start: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox({ images, start });
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.arrow-link')) {
      e.stopPropagation();
      return;
    }
    if ((e.target as HTMLElement).closest('.image-trigger')) {
      return;
    }
    setDetailOpen(true);
  };

  const imgClass = (extra?: string) =>
    cn('w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]', extra);

  return (
    <>
      {detailOpen && (
        <DetailModal
          name={name} description={description} execution={execution}
          detail={detail} capabilities={capabilities}
          onClose={() => setDetailOpen(false)}
        />
      )}

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.start}
          alt={name}
          onClose={() => setLightbox(null)}
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
        <div className="relative">
          {stackedImages ? (
            <div className="overflow-hidden">
              <div
                className="h-[180px] sm:h-[210px] md:h-[240px] overflow-hidden image-trigger cursor-zoom-in"
                onClick={(e) => openLightbox([stackedImages.hero, stackedImages.small], 0, e)}
              >
                <img src={stackedImages.hero} alt={`${name} hero`} loading="lazy" decoding="async" className={imgClass('object-center')} />
              </div>
              <div
                className="h-[90px] sm:h-[105px] md:h-[120px] overflow-hidden border-t border-border image-trigger cursor-zoom-in"
                onClick={(e) => openLightbox([stackedImages.hero, stackedImages.small], 1, e)}
              >
                <img src={stackedImages.small} alt={`${name} dashboard`} loading="lazy" decoding="async" className={imgClass('object-top')} />
              </div>
            </div>
          ) : splitImages ? (
            <div className={cn('flex overflow-hidden', splitPortrait ? 'h-[320px] sm:h-[380px] md:h-[420px]' : 'h-[200px] sm:h-[240px] md:h-[280px]')}>
              <div
                className="w-1/2 overflow-hidden image-trigger cursor-zoom-in"
                onClick={(e) => openLightbox([splitImages.left, splitImages.right], 0, e)}
              >
                <img
                  src={splitImages.left}
                  alt={`${name} left`}
                  loading="lazy"
                  decoding="async"
                  className={imgClass(splitPortrait ? 'object-top' : 'object-center')}
                />
              </div>
              <div
                className="w-1/2 overflow-hidden border-l border-border/50 image-trigger cursor-zoom-in"
                onClick={(e) => openLightbox([splitImages.left, splitImages.right], 1, e)}
              >
                <img
                  src={splitImages.right}
                  alt={`${name} right`}
                  loading="lazy"
                  decoding="async"
                  className={imgClass(splitPortrait ? 'object-top' : 'object-top-left')}
                />
              </div>
            </div>
          ) : (
            <div
              className="h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden relative image-trigger cursor-zoom-in"
              onClick={(e) => openLightbox(gallery && gallery.length > 0 ? gallery : [image], 0, e)}
              onMouseEnter={() => {
                // Discreetly preload remaining gallery images on hover
                if (gallery && gallery.length > 1) {
                  gallery.slice(1).forEach((src) => {
                    const i = new Image();
                    i.src = src;
                  });
                }
              }}
            >
              <img
                src={image}
                alt={name}
                loading="lazy"
                decoding="async"
                className={imgClass(imagePosition)}
              />
              {gallery && gallery.length > 1 && (
                <div className="absolute top-3 right-3 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-body font-medium text-muted-foreground border border-border">
                  +{gallery.length - 1}
                </div>
              )}
            </div>
          )}

          {/* Status — one pill for every layout, single, split or stacked */}
          {badge && (
            <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-background/80 backdrop-blur-sm
                            rounded text-xs font-body font-medium text-muted-foreground border border-border
                            pointer-events-none">
              {badge}
            </div>
          )}
        </div>

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
                title={urlTitle}
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
                title={secondaryTitle}
              >
                ↗
              </a>
            )}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setDetailOpen(true); }}
              aria-label={`More about ${name}`}
              title="Read more"
              className="ml-auto -mr-2 h-11 w-11 shrink-0 flex items-center justify-center
                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-full"
            >
              <span className="h-7 w-7 flex items-center justify-center rounded-full border border-border
                               font-body text-[0.8125rem] italic text-warm-muted transition-colors duration-300
                               group-hover:border-warm-muted group-hover:text-primary">
                i
              </span>
            </button>
          </h3>

          <p className="font-body text-[1.0625rem] font-light text-muted-foreground mb-4 leading-[1.6]">
            {description}
          </p>

          <p className="font-body text-[0.9375rem] font-normal text-warm-muted tracking-[0.02em]">
            {execution}
          </p>

        </div>
      </motion.div>
    </>
  );
}
