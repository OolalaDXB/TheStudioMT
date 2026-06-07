import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {/* Top row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Left */}
            <div>
              <div className="font-display text-xl font-normal text-foreground">
                The Studio MT
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Independent venture studio · © 2026
              </div>
            </div>
            
            {/* Right */}
            <div className="flex flex-col items-start md:items-end gap-2">
              <a 
                href="https://www.linkedin.com/in/mickaelthomas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-primary transition-colors link-underline"
              >
                LinkedIn ↗
              </a>
              <a 
                href="mailto:mickael@thestudio.mt"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                mickael@thestudio.mt
              </a>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="text-xs text-muted-foreground tracking-[0.15em] text-center">
            Dubai · Paris · Brittany · Tbilisi · Gaborone
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
