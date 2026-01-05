import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest > 200);
    setIsAtTop(latest < 50);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed top bar - visible at top */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 px-6 py-4',
          'transition-opacity duration-300',
          isAtTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-display text-sm tracking-wider">
            The Studio MT
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="hover:text-foreground transition-colors link-underline"
            >
              Ventures
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-foreground transition-colors link-underline"
            >
              Contact
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Floating nav - appears on scroll */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20,
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="glass rounded-full px-6 py-3 flex items-center gap-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm hover:text-gold transition-colors"
          >
            ↑ Top
          </button>
          <div className="w-px h-4 bg-border" />
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-sm hover:text-gold transition-colors"
          >
            Ventures
          </button>
          <div className="w-px h-4 bg-border" />
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm hover:text-gold transition-colors"
          >
            Contact
          </button>
        </div>
      </motion.nav>
    </>
  );
}
