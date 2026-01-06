import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Capability {
  title: string;
  items: string[];
}

const capabilities: Capability[] = [
  {
    title: 'Product & Design',
    items: ['Product strategy', 'UX/UI design', 'Brand identity', 'Information architecture', 'Design systems'],
  },
  {
    title: 'Finance & Operations',
    items: ['Financial modeling', 'Unit economics', 'Investor materials', 'Business architecture', 'Pricing strategy'],
  },
  {
    title: 'Technology',
    items: ['Full-stack development', 'Database architecture', 'API design', 'E-commerce systems', 'Custom tooling'],
  },
  {
    title: 'International',
    items: ['Multi-jurisdiction structures', 'Business development & partnerships', 'Cross-border operations', 'Ecosystem design', 'Commercial strategy'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Parallax background accent */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-3xl" />
      </motion.div>

      <div className="container max-w-[1200px] mx-auto px-8 relative z-10">
        {/* Section header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <h2 className="font-body text-[0.9375rem] font-medium tracking-[0.15em] uppercase text-primary mb-6">
            Capabilities
          </h2>
          <p className="font-display text-2xl md:text-3xl text-foreground/80 max-w-2xl leading-relaxed">
            Strategy, architecture, execution. From early concept to running system.
          </p>
        </motion.header>

        {/* Capabilities grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              variants={itemVariants}
              className="group"
            >
              {/* Title with animated underline */}
              <div className="relative mb-6">
                <h3 className="font-display text-xl md:text-2xl text-foreground font-normal">
                  {capability.title}
                </h3>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="absolute -bottom-2 left-0 h-px w-12 bg-primary/30 origin-left"
                />
              </div>

              {/* Items list */}
              <ul className="space-y-3">
                {capability.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.1 + itemIndex * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="font-body text-sm text-muted-foreground leading-relaxed"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
