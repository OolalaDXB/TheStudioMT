import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section className="py-32 md:py-48 text-center">
      <div className="container max-w-[1200px] mx-auto px-8">
        <motion.a
          href="mailto:mt@thestudio.mt"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[clamp(1.5rem,3.5vw,2.25rem)] font-light text-primary tracking-[0.02em] link-underline"
        >
          mt@thestudio.mt
        </motion.a>
      </div>
    </section>
  );
}
