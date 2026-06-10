import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { VentureCard } from './VentureCard';

// Import portfolio images
import beauImg from '@/assets/portfolio/beau.png';
import beauAppImg from '@/assets/portfolio/beau-app.png';
import beauGatewayImg from '@/assets/portfolio/beau-gateway.png';
import bawabaImg from '@/assets/portfolio/bawaba.png';
import myoolalaLandingImg from '@/assets/portfolio/myoolala-landing.png';
import myoolalaAppImg from '@/assets/portfolio/myoolala-app.png';
import district267Img from '@/assets/portfolio/district267.png';
import pandamoodImg from '@/assets/portfolio/pandamood.png';
import padeldesignImg from '@/assets/portfolio/padeldesign.png';
import maisonsImg from '@/assets/portfolio/maisons.png';
import beauTreasuryImg from '@/assets/portfolio/beau-treasury.png';
import maisonsHeroImg from '@/assets/portfolio/maisons-hero.png';
import maisonsDashboardImg from '@/assets/portfolio/maisons-dashboard.png';
import lesvieillespierresHeroImg from '@/assets/portfolio/lesvieillespierres-hero.png';
import lesvieillespierresImg from '@/assets/portfolio/lesvieillespierres.png';
import lesvieillespierresAdminImg from '@/assets/portfolio/lesvieillespierres-admin.png';
import lesvieillespierresSouffleurImg from '@/assets/portfolio/lesvieillespierres-souffleur.png';
import livegreatImg from '@/assets/portfolio/livegreat.png';
import sillonImg from '@/assets/portfolio/sillon.png';
import sillonDashboardImg from '@/assets/portfolio/sillon-dashboard.png';

// Placeholder for ventures without images yet
const placeholderImg = '/placeholder.svg';

interface Venture {
  name: string;
  description: string;
  execution: string;
  detail: string;
  image: string;
  imagePosition?: string;
  splitImages?: { left: string; right: string };
  splitPortrait?: boolean;
  stackedImages?: { hero: string; small: string };
  url?: string;
  secondaryUrl?: string;
  badge?: string;
}

interface Category {
  title: string;
  ventures: Venture[];
}

const categories: Category[] = [
  {
    title: 'AI Infrastructure',
    ventures: [
      {
        name: 'Bawaba',
        description: 'Sovereign AI control plane for regulated industries. MCP reverse proxy.',
        execution: 'Architecture · Go + Rust backend · PII tokenizer · CISO dashboard',
        detail: 'Security gateway between AI agents and enterprise systems. Enforces authentication, PII protection, sovereign data routing, and tamper-proof audit on every call. Built in Go and Rust for regulated financial institutions across MENA and EU. Open-source core.',
        image: bawabaImg,
        imagePosition: 'object-top',
        badge: 'Dossier sur demande',
        url: 'https://github.com/OolalaDXB/bawaba-command',
      },
    ],
  },
  {
    title: 'Wealth Infrastructure',
    ventures: [
      {
        name: 'BEAU',
        description: 'Wealth structuring infrastructure for multi-jurisdictional families.',
        execution: 'Product strategy · Data architecture · UX · Zero Access encryption',
        detail: 'Wealth structuring platform for expat families with assets across 4+ jurisdictions. Zero Access encryption architecture — only the user can decrypt their data. Dashboard for multi-currency portfolios, liabilities, estate documents. Access gateway for advisors and family members with granular permissions. Features: Dead Man Switch, Islamic/Faraid estate planning support. Premium pricing: €1,500–€4,000/year. Private beta.',
        image: beauImg,
        splitImages: { left: beauGatewayImg, right: beauAppImg },
        url: 'https://beau.capital',
        secondaryUrl: 'https://beau-capital-dev.vercel.app',
      },
      {
        name: 'BEAU Treasury',
        description: 'Treasury intelligence for mid-market corporates. ISO 20022 native.',
        execution: 'Product strategy · Domain expertise · Market positioning · Architecture',
        detail: 'Treasury management platform built on 16 years of payments infrastructure experience across 83 countries. Targets the gap between spreadsheet-driven treasury and enterprise TMS (Kyriba, ION). Cash visibility, FX exposure, payment orchestration. ISO 20022 native — not retrofitted. Strategic synergy with KM OpenPay for execution rails.',
        image: beauTreasuryImg,
        imagePosition: 'object-top',
        url: 'https://www.thestudio.mt/',
      },
    ],
  },
  {
    title: 'Systems',
    ventures: [
      {
        name: 'Sillon',
        description: 'Full-stack ERP for independent vinyl distributors. 128K+ lines of code.',
        execution: 'Domain modeling · Full-stack build · Database architecture · Marketplace · Pro portal',
        detail: 'The most comprehensive vertical ERP for independent vinyl distribution. 128,000+ lines of TypeScript/React/Node/PostgreSQL. Built for Outre-National Records as pilot client. Full domain model: catalog management, multi-format inventory (LP, CD, digital, merch) with warehouse location tracking, supplier management, purchase orders, consignment tracking, customer management (B2B professional + B2C), invoicing with French tax compliance, and analytics. Live Discogs Marketplace integration for automated selling. Professional client portal ("Powered by Sillon") with product catalog, cart, order history. Bulk order actions, CSV/Excel export. Sprint 16 complete. Designed as a replicable, white-label SaaS for the independent music industry. Zero direct competitor at this depth — Common Ground (€29-89/mo) only covers POS + eShop.',
        image: sillonImg,
        splitImages: { left: sillonImg, right: sillonDashboardImg },
        url: 'https://www.sillom.me',
      },
    ],
  },
  {
    title: 'Digital Identity & Hospitality',
    ventures: [
      {
        name: 'MyOolala',
        description: 'Multi-view digital passport. One identity, many faces.',
        execution: 'Product design · Per-view architecture · Wallet integration · Stripe',
        detail: 'Digital identity platform with per-view functionality — show different content to different audiences (Social, Work, Exclusive). Each view has its own QR code and Apple Wallet pass. Integrated tipping, shop, and donation capabilities via Stripe. Email signature generator with Oo icon for organic distribution. Built with Lovable + Supabase.',
        image: myoolalaLandingImg,
        splitImages: { left: myoolalaLandingImg, right: myoolalaAppImg },
        url: 'https://myoolala.com',
      },
      {
        name: 'Maisons.co',
        description: 'Property collection platform — booking, operations, and financial management.',
        execution: 'Full-stack build · Multi-property ops · Revenue management · Guest systems',
        detail: 'Full-stack hospitality platform built with Lovable + Supabase. 21K+ lines of code. Direct booking engine with dynamic pricing. Admin dashboard: calendar, bookings, guest management, contracts, financial ledger with multi-currency support (EUR/USD/AED/GEL), FX rates, payment tracking, and P&L per property. Multilingual guest onboarding (EN/FR/AR/RU). Three properties live: Maison Atlantique (Morbihan), Maison Georgia (Gudauri), La Garenne-Colombes (Paris). Next: Cascais 2027.',
        image: maisonsHeroImg,
        splitImages: { left: maisonsHeroImg, right: maisonsDashboardImg },
        url: 'https://maisons.co',
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
        detail: 'Brand from zero — name, positioning, visual identity. First racket line (ALPHA series) with manufacturing partner. Full supply chain from sourcing to fulfillment. E-commerce with reservation system. First drop: 50 units, targeted Q3 2026. Currently in sampling phase with manufacturing partner.',
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
    title: 'Social Impact',
    ventures: [
      {
        name: 'Les Vieilles Pierres',
        description: 'Heritage hiking association in Brittany — public site and self-managed back-office.',
        execution: 'Full-stack build · Editorial site · Multi-role CMS · Embedded AI assistant',
        detail: 'Digital rebuild for a 50-year-old heritage hiking association in Quistinic, Morbihan. Since 1974. 130km of trails. Two layers in one build. Front: an editorial, responsive, accessible public site — trails, events, shop, gallery, contact. Back: a complete no-code admin space the volunteers run themselves, no developer needed. Supabase auth with whitelist access and role-based tabs (Messages, Orders, Content CMS, Contacts, Calendar, Statistics, Team, audit Journal). Per-page content editing, multi-photo upload with reordering, Resend email integration, Plausible analytics. The differentiator: "Souffleur IA", an embedded assistant with a plain-language user guide written for non-technical volunteers — they ask a question, it answers. Pro bono; my father is president.',
        image: lesvieillespierresHeroImg,
        imagePosition: 'object-center',
        gallery: [lesvieillespierresHeroImg, lesvieillespierresSouffleurImg, lesvieillespierresAdminImg],
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6 md:gap-8">
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
