import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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

interface Venture {
  name: string;
  description: string;
  execution: string;
  detail: string;
  image: string;
  splitImages?: { left: string; right: string };
  url?: string;
}

interface Category {
  title: string;
  ventures: Venture[];
}

const categories: Category[] = [
  {
    title: 'Wealth Infrastructure',
    ventures: [
      {
        name: 'BEAU',
        description: 'Wealth structuring infrastructure for multi-jurisdictional families.',
        execution: 'Product strategy · Data architecture · UX · Pricing',
        detail: 'Product strategy for expat families with assets across 4+ countries. Data architecture for multi-currency portfolios, liabilities, documents. UX for dashboard, access gateway, advisor sharing. Pricing model and go-to-market. Private beta.',
        image: beauImg,
        splitImages: { left: beauGatewayImg, right: beauImg },
        url: 'https://beau.capital',
      },
    ],
  },
  {
    title: 'Sports & Emerging Markets',
    ventures: [
      {
        name: 'District 267',
        description: 'Premium padel & wellness club in Gaborone, Botswana.',
        execution: 'Market scan · Financial model · Investor deck · Local ops',
        detail: 'Market analysis across 12 African countries. Financial model with 5-year projections, unit economics, scenarios. Investor deck. Partnership structuring with local operators — land, construction, management. Raising $300K for 25% equity. 19-20% IRR target. Opening Q4 2026.',
        image: district267Img,
        url: 'https://district267.co.bw',
      },
      {
        name: 'PandaMood',
        description: 'Quiet-luxury padel equipment brand. Limited editions only.',
        execution: 'Brand identity · Product design · Supply chain · E-commerce',
        detail: 'Brand from zero — name, positioning, visual identity. First racket line (ALPHA series) with manufacturing partner. Full supply chain from sourcing to fulfillment. E-commerce with reservation system. First drop: 50 units, Feb 2026.',
        image: pandamoodImg,
        url: 'https://pandamood.com',
      },
      {
        name: 'padel.design',
        description: 'Advisory for padel club development in underserved markets.',
        execution: 'Territory analysis · Feasibility · Club playbooks',
        detail: 'Consulting offer for investors entering new padel markets. Three tiers: Market Scan ($2,500) — feasibility, go/no-go. Club Playbook ($7,500) — business architecture, investor docs. Full Advisory ($25,000+) — concept to opening. Target: Africa, GCC, Central Asia.',
        image: padeldesignImg,
        url: 'https://padel.design',
      },
    ],
  },
  {
    title: 'Place & Purpose',
    ventures: [
      {
        name: 'Maisons.co',
        description: 'Character homes & place-based hospitality. With Darya.',
        execution: 'Brand framework · Guest systems · Property ops',
        detail: 'Two properties live: Maison Atlantique (Finistère) and Maison Georgia (Gudauri). Brand framework, booking flow, multilingual guest experience (EN/FR/AR/RU). Operational playbook for remote management. Portugal (Cascais) 2027.',
        image: maisonsImg,
        url: 'https://maisons.co',
      },
      {
        name: 'Les Vieilles Pierres',
        description: 'Heritage hiking association in Brittany. Since 1974.',
        execution: 'Web rebuild · Editorial · E-commerce · Community tools',
        detail: 'Digital rebuild for 50-year-old association. 130km of trails in Morbihan. New website — responsive, accessible. Editorial content. E-commerce for maps and books. Event calendar, community features. Pro bono; my father is president.',
        image: lesvieillespierresImg,
        url: 'https://lesvieillespierres.com',
      },
      {
        name: 'Oolala Social Foundation',
        description: 'Giving vehicle for youth initiatives in Africa.',
        execution: 'Structure design · Governance · Grant framework',
        detail: 'Legal structure, governance, grant evaluation framework. First project: Live Great Foundation. Focus: education, environment, sports, employment. Funded via Oolala FZ LLC.',
        image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop',
      },
      {
        name: 'Live Great Foundation',
        description: 'Grassroots foundation in Kibera, Nairobi. Sponsored rebuild.',
        execution: 'Funding · Information architecture · Web design · Copy',
        detail: 'Sponsored via Oolala Social. Digital transformation for grassroots foundation in Kibera. Information architecture, website, copy. Programs: 5,000+ kg waste/month, 50+ climate champions, 200+ jobs, 300+ athletes fed.',
        image: livegreatImg,
        url: 'https://livegreatfoundation.netlify.app',
      },
    ],
  },
  {
    title: 'Systems',
    ventures: [
      {
        name: 'Sillon',
        description: 'Custom ERP for independent record labels.',
        execution: 'Domain modeling · Full-stack build · Database architecture',
        detail: 'Custom ERP for Outre-National Records (vinyl label). Domain modeling: catalog, inventory, suppliers, orders, analytics. Full-stack: React, Node, PostgreSQL. Multi-format inventory (LP, CD, digital) with location tracking. Modular, replicable. Proof of capability.',
        image: sillonImg,
        url: 'https://outrenational-erp.vercel.app',
      },
    ],
  },
];

function CategorySection({ category, categoryIndex }: { category: Category; categoryIndex: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section
      ref={sectionRef}
      key={category.title}
      className="py-16 md:py-24 border-t border-border relative overflow-hidden"
    >
      {/* Parallax background accent */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-primary/[0.015] blur-3xl"
          style={{
            top: categoryIndex % 2 === 0 ? '10%' : '40%',
            left: categoryIndex % 2 === 0 ? '-10%' : 'auto',
            right: categoryIndex % 2 === 0 ? 'auto' : '-10%',
          }}
        />
      </motion.div>

      <div className="container max-w-[1200px] mx-auto px-8 relative z-10">
        {/* Section header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="font-body text-[0.9375rem] font-medium tracking-[0.15em] uppercase text-primary">
            {category.title}
          </h2>
        </motion.header>

        {/* Ventures grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-8">
          {category.ventures.map((venture, ventureIndex) => (
            <VentureCard key={venture.name} {...venture} index={ventureIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <main>
      {categories.map((category, categoryIndex) => (
        <CategorySection
          key={category.title}
          category={category}
          categoryIndex={categoryIndex}
        />
      ))}
    </main>
  );
}
