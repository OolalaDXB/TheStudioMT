import { motion } from 'framer-motion';
import { ScrollFade } from './AnimatedText';
import { VentureCard } from './VentureCard';

// Import portfolio images
import beauImg from '@/assets/portfolio/beau.png';
import beauGatewayImg from '@/assets/portfolio/beau-gateway.png';
import district267Img from '@/assets/portfolio/district267.png';
import pandamoodImg from '@/assets/portfolio/pandamood.png';
import padeldesignImg from '@/assets/portfolio/padeldesign.png';
import maisonsImg from '@/assets/portfolio/maisons.png';
import lesvieillespierresImg from '@/assets/portfolio/lesvieillespierres.png';
import livegreatImg from '@/assets/portfolio/livegreat.png';
import sillonImg from '@/assets/portfolio/sillon.png';

interface Category {
  title: string;
  subtitle: string;
  ventures: {
    name: string;
    description: string;
    image: string;
    url?: string;
  }[];
}

const categories: Category[] = [
  {
    title: 'Wealth Infrastructure',
    subtitle: 'Financial technology for the modern era',
    ventures: [
      {
        name: 'BEAU',
        description: 'Reimagining wealth management for high-net-worth individuals',
        image: beauImg,
        url: 'https://beau.money',
      },
      {
        name: 'BEAU Gateway',
        description: 'Enterprise-grade crypto infrastructure for institutions',
        image: beauGatewayImg,
        url: 'https://beaugateway.com',
      },
    ],
  },
  {
    title: 'Sports & Emerging Markets',
    subtitle: 'Where passion meets opportunity',
    ventures: [
      {
        name: 'District 267',
        description: 'AI-powered football scouting and analytics platform',
        image: district267Img,
        url: 'https://district267.com',
      },
      {
        name: 'PandaMood',
        description: 'Panda-themed lifestyle brand capturing joy',
        image: pandamoodImg,
        url: 'https://pandamood.com',
      },
      {
        name: 'padel.design',
        description: 'Premium padel court design and construction',
        image: padeldesignImg,
        url: 'https://padel.design',
      },
    ],
  },
  {
    title: 'Place & Purpose',
    subtitle: 'Creating spaces that inspire',
    ventures: [
      {
        name: 'Maisons.co',
        description: 'Curated luxury real estate marketplace',
        image: maisonsImg,
        url: 'https://maisons.co',
      },
      {
        name: 'Les Vieilles Pierres',
        description: 'Restoring heritage properties with modern elegance',
        image: lesvieillespierresImg,
        url: 'https://lesvieillespierres.com',
      },
      {
        name: 'Live Great',
        description: 'Premium hospitality and lifestyle experiences',
        image: livegreatImg,
        url: 'https://livegreat.com',
      },
    ],
  },
  {
    title: 'Systems',
    subtitle: 'Building the infrastructure of tomorrow',
    ventures: [
      {
        name: 'Sillon',
        description: 'AI-powered automation for modern businesses',
        image: sillonImg,
        url: 'https://sillon.ai',
      },
    ],
  },
];

export function Portfolio() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <ScrollFade>
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] text-gold uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Ventures We've Built
            </h2>
          </div>
        </ScrollFade>

        {/* Categories */}
        {categories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-24 last:mb-0">
            {/* Category header */}
            <ScrollFade delay={0.1}>
              <div className="flex items-center gap-6 mb-10">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 h-px bg-border origin-left"
                />
                <div className="text-right">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {category.subtitle}
                  </p>
                </div>
              </div>
            </ScrollFade>

            {/* Venture grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.ventures.map((venture, ventureIndex) => (
                <VentureCard
                  key={venture.name}
                  {...venture}
                  index={categoryIndex * 0.5 + ventureIndex}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
