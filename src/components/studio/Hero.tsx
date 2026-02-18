import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <header ref={heroRef} className="min-h-screen flex flex-col justify-center py-16 md:py-24 relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '50%']) }}
        className="absolute top-20 right-10 w-[300px] h-[300px] rounded-full bg-primary/[0.02] blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
        className="absolute bottom-40 left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-3xl pointer-events-none"
      />

      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="container max-w-[1200px] mx-auto px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo */}
          <h1 className="font-display text-[clamp(3rem,7vw,8rem)] font-light tracking-[-0.02em] text-primary mb-2">
            The Studio <span className="font-medium">MT</span>
          </h1>
          
          {/* Tagline */}
          <p className="font-body text-base md:text-xl xl:text-[1.75rem] font-normal tracking-[0.15em] uppercase text-muted-foreground mb-10 md:mb-16">
            Independent Venture Studio
          </p>
          
          {/* Statement */}
          <div className="font-display text-[clamp(1.5rem,3vw,3rem)] font-light leading-[1.7] text-foreground">
            <p className="mb-4">
              I design, build, and operate long-term systems.<br />
              Some projects scale. Some remain intentionally small.<br />
              <span className="italic text-warm-muted">Some stop on purpose.</span>
            </p>
          </div>
          
          {/* Anchor */}
          <div className="mt-10 md:mt-16 pt-8 border-t border-border">
            <p className="font-body text-base md:text-xl xl:text-[1.875rem] font-normal tracking-[0.03em] text-muted-foreground leading-[1.8]">
              Product · Capital · Operations.<br />
              From first sketch to running reality.
            </p>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </header>
  );
}
