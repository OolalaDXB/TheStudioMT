import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollFadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollFade({ children, delay = 0, className }: ScrollFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedText({ text, className }: { text: string; className?: string; delay?: number }) {
  return <span className={className}>{text}</span>;
}

export function FadeUpText({ children, className, delay }: ScrollFadeProps) {
  return <ScrollFade delay={delay} className={className}>{children}</ScrollFade>;
}
