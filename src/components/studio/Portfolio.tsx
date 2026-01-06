import { motion } from 'framer-motion';
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
        detail: 'Product strategy from scratch — defining what "wealth infrastructure" means for expat families with assets across 4+ countries. Designed the full data architecture for multi-currency portfolios, liabilities tracking, and document management. Led UX for the dashboard, access gateway, and advisor sharing flows. Built the pricing model and go-to-market positioning. Currently in private beta.',
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
        detail: 'Market analysis across 12 African countries to identify the right entry point. Built a full financial model with 5-year projections, unit economics, and scenario planning. Designed and wrote the investor deck from scratch. Structured the partnership with local operators (land, construction, management). Currently raising $300K for 25% equity, targeting 19-20% IRR. Opening Q4 2026.',
        image: district267Img,
        url: 'https://district267.co.bw',
      },
      {
        name: 'PandaMood',
        description: 'Quiet-luxury padel equipment brand. Limited editions only.',
        execution: 'Brand identity · Product design · Supply chain · E-commerce',
        detail: 'Created the brand from zero — name, positioning ("Play Your Mood"), visual identity. Designed the first racket line (ALPHA series) with a manufacturing partner. Built the entire supply chain from sourcing to fulfillment. Developed the e-commerce site with reservation system. First drop: 50 units, Feb 2026.',
        image: pandamoodImg,
        url: 'https://pandamood.com',
      },
      {
        name: 'padel.design',
        description: 'Advisory for padel club development in underserved markets.',
        execution: 'Territory analysis · Feasibility · Club playbooks',
        detail: 'Packaged everything learned from District 267 into a consulting offer for investors entering new padel markets. Three tiers: Market Scan ($2,500) — feasibility and go/no-go recommendation. Club Playbook ($7,500) — full business architecture and investor docs. Full Advisory ($25,000+) — end-to-end partnership from concept to opening. Target markets: Africa, GCC, Central Asia.',
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
        detail: 'Founded with my wife Darya. Two properties live: Maison Atlantique (Finistère, Brittany) and Maison Georgia (Gudauri, Caucasus). Built the brand framework, booking flow, and multilingual guest experience (EN/FR/AR/RU). Designed the operational playbook for remote property management. Exploring expansion to Portugal (Cascais) for 2027.',
        image: maisonsImg,
        url: 'https://maisons.co',
      },
      {
        name: 'Les Vieilles Pierres',
        description: 'Heritage hiking association in Brittany. Since 1974.',
        execution: 'Web rebuild · Editorial · E-commerce · Community tools',
        detail: 'Complete digital rebuild for a 50-year-old association maintaining 130km of hiking trails in Morbihan. Designed and built the new website from scratch — responsive, modern, accessible. Wrote all editorial content. Added e-commerce for trail maps and heritage books. Integrated event calendar and community features. Pro bono project; my father is the president.',
        image: lesvieillespierresImg,
        url: 'https://lesvieillespierres.com',
      },
      {
        name: 'Oolala Social Foundation',
        description: 'Grants vehicle for youth development in Africa.',
        execution: 'Structure design · Governance · Grant framework',
        detail: 'Created a giving vehicle to fund youth-focused initiatives in Africa. Designed the legal structure, governance model, and grant evaluation framework. First sponsored project: Live Great Foundation (below). Focus areas: education, environment, sports, employment. Funded through Oolala FZ LLC profits.',
        image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop',
      },
      {
        name: 'Live Great Foundation',
        description: 'Community foundation in Kibera, Nairobi. Sponsored rebuild.',
        execution: 'Funding · Information architecture · Web design · Copy',
        detail: 'Sponsored digital transformation for a grassroots foundation run by Lucie Omondi in Kibera (one of Africa\'s largest informal settlements). Funded the project through Oolala Social. Designed the full information architecture, built the website, wrote all copy. Programs: waste management (5,000+ kg/month), climate education (50+ champions), youth employment (200+ jobs), sports nutrition (300+ athletes).',
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
        description: 'Lightweight operations system for independent record labels.',
        execution: 'Domain modeling · Full-stack build · Database architecture',
        detail: 'Built a custom ERP for Outre-National Records, a vinyl label. Domain modeling for catalog, inventory, suppliers, orders, and sales analytics. Full-stack development (React, Node, PostgreSQL). Designed the database architecture for multi-format inventory (LP, CD, digital) with location tracking. Modular by design — potentially replicable for other indie labels. Not a SaaS; a proof of technical capability.',
        image: sillonImg,
        url: 'https://outrenational-erp.vercel.app',
      },
    ],
  },
];

export function Portfolio() {
  return (
    <main>
      {categories.map((category, categoryIndex) => (
        <section key={category.title} className="py-16 md:py-24 border-t border-border">
          <div className="container max-w-[1200px] mx-auto px-8">
            {/* Section header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="font-body text-[0.9375rem] font-medium tracking-[0.15em] uppercase text-primary">
                {category.title}
              </h2>
            </motion.header>

            {/* Ventures grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-8">
              {category.ventures.map((venture, ventureIndex) => (
                <VentureCard
                  key={venture.name}
                  {...venture}
                  index={ventureIndex}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
