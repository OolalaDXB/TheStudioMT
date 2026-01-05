import { motion } from 'framer-motion';
import { ScrollFade } from './AnimatedText';

export function Philosophy() {
  return (
    <section className="relative py-32 md:py-48 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollFade>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-px bg-gold mx-auto mb-12 origin-left"
          />
        </ScrollFade>

        <ScrollFade delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8">
            We don't just build companies.
            <br />
            <span className="text-muted-foreground">We architect futures.</span>
          </h2>
        </ScrollFade>

        <ScrollFade delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            The Studio MT operates as a venture studio and family office, 
            investing in and building transformative businesses across 
            wealth infrastructure, sports, real estate, and systems.
          </p>
        </ScrollFade>

        <ScrollFade delay={0.3}>
          <div className="mt-16 flex items-center justify-center gap-12 text-sm tracking-[0.2em] text-muted-foreground uppercase">
            <span>Dubai</span>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span>Global</span>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
