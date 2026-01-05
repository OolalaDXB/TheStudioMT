import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface VentureCardProps {
  name: string;
  description: string;
  image: string;
  url?: string;
  index: number;
}

export function VentureCard({ name, description, image, url, index }: VentureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group relative block overflow-hidden rounded-2xl',
        'bg-card border border-border/50',
        'transition-all duration-500',
        url && 'cursor-pointer'
      )}
      style={{ perspective: 1000 }}
    >
      {/* Image container with 3D tilt */}
      <motion.div
        className="relative aspect-[4/3] overflow-hidden"
        animate={{
          rotateX: isHovered ? 2 : 0,
          rotateY: isHovered ? -2 : 0,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Image */}
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
          animate={{
            opacity: isHovered ? 0.9 : 0.7,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Hover shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{
            x: isHovered ? '100%' : '-100%',
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative p-6">
        <motion.div
          animate={{ x: isHovered ? 8 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-display text-xl md:text-2xl mb-2 tracking-tight">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Arrow indicator */}
        {url && (
          <motion.div
            className="absolute right-6 top-1/2 -translate-y-1/2"
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : -10,
            }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-5 h-5 text-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        )}
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent, hsl(var(--gold) / 0.3), transparent)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: 1,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.a>
  );
}
