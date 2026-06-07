import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const monogramY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <header
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden selection:bg-primary selection:text-primary-foreground"
    >
      {/* Oversized MT monogram — atmospheric backdrop */}
      <motion.div
        style={{ y: monogramY }}
        className="absolute inset-0 pointer-events-none flex items-center justify-center select-none"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.035 }}
          transition={{ duration: 2.4, ease }}
          className="font-display font-light leading-none text-primary"
          style={{ fontSize: '60vw' }}
        >
          MT
        </motion.span>
      </motion.div>

      {/* Golden-ratio hairline dividers in warm taupe */}
      <div className="absolute inset-y-12 left-[38.2%] w-px bg-warm/20 pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-12 right-[38.2%] w-px bg-warm/10 pointer-events-none hidden lg:block" />

      {/* Inner editorial frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.995 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease, delay: 0.2 }}
        className="absolute top-10 left-10 right-10 bottom-10 lg:top-12 lg:left-12 lg:right-12 lg:bottom-12 border border-primary/10 pointer-events-none hidden md:block"
      />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="container max-w-[1200px] mx-auto px-8 md:px-16 lg:px-24 relative z-10 flex flex-col items-start"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.3 }}
          className="mb-10 md:mb-12 flex items-center gap-4"
        >
          <span className="w-8 h-px bg-warm/60" />
          <p className="font-body text-[10px] md:text-xs font-medium text-primary/60 uppercase tracking-[0.3em]">
            Independent Venture Studio
          </p>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease, delay: 0.45 }}
          className="font-display text-[clamp(3.5rem,9vw,9rem)] font-light leading-[0.9] tracking-tight text-primary mb-16 md:mb-20"
        >
          The Studio <span className="italic font-normal">MT</span>
        </motion.h1>

        {/* Manifesto — staggered indentation */}
        <div className="space-y-4 max-w-3xl mb-20 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.7 }}
            className="font-display text-[clamp(1.4rem,2.4vw,2.25rem)] font-light leading-relaxed text-primary"
          >
            I design, build, and operate long-term systems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.9 }}
            className="font-display text-[clamp(1.4rem,2.4vw,2.25rem)] font-light leading-relaxed text-primary/80 pl-6 md:pl-10"
          >
            Some projects scale. Some remain intentionally small.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.15 }}
            className="font-display italic text-[clamp(1.4rem,2.4vw,2.25rem)] font-light leading-relaxed text-warm-muted pl-12 md:pl-20"
          >
            Some stop on purpose.
          </motion.p>
        </div>

        {/* Footer row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.35 }}
          className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-8 pt-10 border-t border-primary/10"
        >
          <div className="space-y-1">
            <p className="font-body text-sm md:text-base text-primary font-medium tracking-wide">
              Product · Capital · Operations
            </p>
            <p className="font-body text-sm md:text-base text-primary/60">
              From first sketch to running reality.
            </p>
          </div>

          {/* Scroll cue */}
          <motion.div
            style={{ opacity: scrollOpacity }}
            className="flex flex-col items-center gap-3 self-center md:self-end"
          >
            <span className="font-body text-[9px] uppercase font-semibold text-primary/40 tracking-[0.3em]">
              Scroll
            </span>
            <motion.div
              animate={{ scaleY: [0.4, 1, 0.4], originY: 0 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-14 bg-gradient-to-b from-primary to-transparent"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  );
}
