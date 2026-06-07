import { motion } from 'framer-motion';

interface SectionDividerProps {
  index: number;
  label?: string;
}

export function SectionDivider({ index, label }: SectionDividerProps) {
  const num = String(index).padStart(2, '0');

  return (
    <div
      aria-hidden="true"
      className="relative w-full py-10 md:py-14 overflow-hidden"
    >
      <div className="container max-w-[1200px] mx-auto px-8">
        <div className="flex items-center gap-6 md:gap-8">
          {/* Numeral */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-[0.6875rem] tracking-[0.25em] uppercase text-warm-muted shrink-0"
          >
            {num}
          </motion.span>

          {/* Animated hairline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ originX: 0 }}
            className="h-px flex-1 bg-primary/15"
          />

          {/* Optional label */}
          {label && (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-[0.6875rem] tracking-[0.25em] uppercase text-warm-muted italic shrink-0"
            >
              {label}
            </motion.span>
          )}

          {/* Small dot */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-1 h-1 rounded-full bg-warm shrink-0"
          />
        </div>
      </div>
    </div>
  );
}
