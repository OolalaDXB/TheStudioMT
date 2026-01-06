import { motion } from 'framer-motion';

export function Hero() {
  return (
    <header className="min-h-screen flex flex-col justify-center py-16 md:py-24 relative">
      <div className="container max-w-[700px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo */}
          <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-light tracking-[-0.02em] text-primary mb-2">
            The Studio <span className="font-medium">MT</span>
          </h1>
          
          {/* Tagline */}
          <p className="font-body text-sm font-normal tracking-[0.15em] uppercase text-muted-foreground mb-16">
            Independent Venture Studio
          </p>
          
          {/* Statement */}
          <div className="font-display text-[clamp(1.25rem,2.5vw,1.5rem)] font-light leading-[1.8] text-foreground">
            <p className="mb-4">
              I design, build, and operate long-term systems.<br />
              Some projects scale. Some remain intentionally small.<br />
              <span className="italic text-warm-muted">Some stop on purpose.</span>
            </p>
          </div>
          
          {/* Anchor */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="font-body text-[0.9375rem] font-normal tracking-[0.03em] text-muted-foreground leading-[1.8]">
              Product · Capital · Operations.<br />
              From first sketch to running reality.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
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
