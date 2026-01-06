import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface VentureCardProps {
  name: string;
  description: string;
  execution: string;
  detail: string;
  image: string;
  splitImages?: { left: string; right: string };
  url?: string;
  index: number;
}

export function VentureCard({ 
  name, 
  description, 
  execution, 
  detail, 
  image, 
  splitImages, 
  url, 
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
      {/* Image */}
      {splitImages ? (
        <div className="flex h-[280px] overflow-hidden">
          <img
            src={splitImages.left}
            alt={`${name} left`}
            className="w-1/2 h-full object-cover object-center transition-transform duration-400 group-hover:scale-[1.02]"
          />
          <img
            src={splitImages.right}
            alt={`${name} right`}
            className="w-1/2 h-full object-cover object-top-left transition-transform duration-400 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div className="h-[280px] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top-left transition-transform duration-400 group-hover:scale-[1.02]"
          />
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
