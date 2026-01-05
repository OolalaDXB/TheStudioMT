import { motion } from 'framer-motion';
import { AnimatedText, FadeUpText } from './AnimatedText';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-platinum/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl tracking-tight">
            <AnimatedText text="The Studio" className="text-foreground" delay={0.1} />
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4"
          >
            <span className="font-display text-2xl md:text-3xl text-muted-foreground italic tracking-wide">
              MT
            </span>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <FadeUpText delay={0.5} className="mb-16">
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Building ventures at the intersection of
            <span className="text-foreground font-normal"> ambition </span>
            and
            <span className="text-foreground font-normal"> execution</span>
          </p>
        </FadeUpText>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Explore
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent origin-center"
      />
    </section>
  );
}
