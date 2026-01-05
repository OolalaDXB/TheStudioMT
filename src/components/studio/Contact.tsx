import { motion } from 'framer-motion';
import { useState } from 'react';
import { ScrollFade } from './AnimatedText';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'hello@thestudiomt.com';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-32 md:py-48 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight-light/50 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <ScrollFade>
          <span className="text-xs tracking-[0.3em] text-gold uppercase mb-8 block">
            Connect
          </span>
        </ScrollFade>

        <ScrollFade delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tight mb-8">
            Let's build something
            <br />
            <span className="text-gradient-gold">extraordinary</span>
          </h2>
        </ScrollFade>

        <ScrollFade delay={0.2}>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto font-light">
            Whether you're an entrepreneur with a vision or an investor seeking opportunities, 
            we'd love to hear from you.
          </p>
        </ScrollFade>

        <ScrollFade delay={0.3}>
          <motion.button
            onClick={handleCopy}
            className="group relative inline-flex items-center gap-3 px-8 py-4 magnetic-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Background */}
            <motion.div
              className="absolute inset-0 rounded-full border border-border bg-card/50 backdrop-blur-sm"
              whileHover={{
                borderColor: 'hsl(var(--gold) / 0.5)',
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Email text */}
            <span className="relative font-display text-xl md:text-2xl tracking-wide link-underline">
              {email}
            </span>

            {/* Copy indicator */}
            <motion.span
              className="relative text-sm text-muted-foreground"
              animate={{
                opacity: copied ? 1 : 0.6,
                color: copied ? 'hsl(var(--gold))' : 'hsl(var(--muted-foreground))',
              }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </motion.span>
          </motion.button>
        </ScrollFade>
      </div>
    </section>
  );
}
