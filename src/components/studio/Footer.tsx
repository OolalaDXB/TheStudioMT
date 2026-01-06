import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="font-display text-lg font-normal text-primary">
            Studio MT
          </div>
          <div className="text-sm text-muted-foreground tracking-[0.1em]">
            Based in Dubai · From Brittany
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
