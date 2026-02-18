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

  const handleClick = (e: React.MouseEvent) => {
    // If clicking the arrow, open external link
    if ((e.target as HTMLElement).closest('.arrow-link')) {
      e.stopPropagation();
      if (url) window.open(url, '_blank');
      return;
    }
    // If clicking a split image link, don't toggle
    if ((e.target as HTMLElement).closest('.split-image-link')) {
      e.stopPropagation();
      return;
    }
    // Otherwise toggle expand
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={handleClick}
      className={cn(
        'group bg-card rounded overflow-hidden cursor-pointer',
        'transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
        'hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(26,58,58,0.1)]'
      )}
    >
      {/* Image area */}
      {stackedImages ? (
        <div className="overflow-hidden">
          <div className="h-[240px] overflow-hidden relative group/img">
            <img
              src={stackedImages.hero}
              alt={`${name} hero`}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-primary/20 pointer-events-none"
              />
            </AnimatePresence>
          </div>
          <div className="h-[120px] overflow-hidden border-t border-border relative">
            <img
              src={stackedImages.small}
              alt={`${name} dashboard`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        </div>
      ) : splitImages ? (
        <div className="flex flex-col overflow-hidden">
          <div className={cn("flex overflow-hidden", splitPortrait ? "h-[420px]" : "h-[280px]")}>
            {/* Left split image */}
            <a
              href={url || undefined}
              target={url ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={cn("split-image-link relative overflow-hidden", url ? "cursor-pointer" : "cursor-default pointer-events-none", "w-1/2")}
              onClick={(e) => { e.stopPropagation(); if (!url) e.preventDefault(); }}
            >
              <img
                src={splitImages.left}
                alt={`${name} left`}
                className={cn("w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]", splitPortrait ? "object-top" : "object-center")}
              />
              {url && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 bg-primary/25 flex items-center justify-center"
                >
                  <span className="text-primary-foreground font-body text-xs tracking-[0.12em] uppercase bg-primary/80 px-3 py-1.5 rounded">
                    Ouvrir ↗
                  </span>
                </motion.div>
              )}
            </a>
            {/* Right split image */}
            <a
              href={secondaryUrl || url || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("split-image-link relative overflow-hidden border-l border-border/50", (secondaryUrl || url) ? "cursor-pointer" : "cursor-default pointer-events-none", "w-1/2")}
              onClick={(e) => { e.stopPropagation(); if (!secondaryUrl && !url) e.preventDefault(); }}
            >
              <img
                src={splitImages.right}
                alt={`${name} right`}
                className={cn("w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]", splitPortrait ? "object-top" : "object-top-left")}
              />
              {(secondaryUrl || url) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 bg-primary/25 flex items-center justify-center"
                >
                  <span className="text-primary-foreground font-body text-xs tracking-[0.12em] uppercase bg-primary/80 px-3 py-1.5 rounded">
                    {secondaryUrl ? 'App Demo ↗' : 'Ouvrir ↗'}
                  </span>
                </motion.div>
              )}
            </a>
          </div>
          {/* Labels */}
          {(url || secondaryUrl) && (
            <div className="flex border-t border-border">
              <div className="w-1/2 px-4 py-1.5 text-xs text-muted-foreground text-center border-r border-border">
                Landing Page
              </div>
              <div className="w-1/2 px-4 py-1.5 text-xs text-muted-foreground text-center">
                App Demo
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="h-[280px] overflow-hidden relative">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="split-image-link block w-full h-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={image}
                alt={name}
                className={cn("w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]", imagePosition)}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 bg-primary/25 flex items-center justify-center"
              >
                <span className="text-primary-foreground font-body text-xs tracking-[0.12em] uppercase bg-primary/80 px-3 py-1.5 rounded">
                  Ouvrir ↗
                </span>
              </motion.div>
            </a>
          ) : (
            <img
              src={image}
              alt={name}
              className={cn("w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]", imagePosition)}
            />
          )}
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
            <span className="arrow-link text-sm opacity-0 translate-x-[-8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 cursor-pointer hover:text-warm">
              ↗
            </span>
          )}
          <span className="ml-auto font-body text-xl font-light text-warm-muted transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}>
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
            marginTop: isExpanded ? 16 : 0
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
  );
}
