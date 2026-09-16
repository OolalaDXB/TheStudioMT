import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { VentureCard } from './VentureCard';
import { cn } from '@/lib/utils';

// Import portfolio images
import beauImg from '@/assets/portfolio/beau.png';
import beauAppImg from '@/assets/portfolio/beau-app.png';
import beauGatewayImg from '@/assets/portfolio/beau-gateway.png';
import bawabaLogoImg from '@/assets/portfolio/bawaba-logo.png';
import consoleDashboardCropImg from '@/assets/portfolio/console-dashboard-crop.webp';
import consoleRoutingCropImg from '@/assets/portfolio/console-routing-crop.webp';
import consoleAuditCropImg from '@/assets/portfolio/console-audit-crop.webp';
import consoleDashboardImg from '@/assets/portfolio/console-dashboard.webp';
import consoleRoutingImg from '@/assets/portfolio/console-routing.webp';
import consoleAuditImg from '@/assets/portfolio/console-audit.webp';
import myoolalaLandingImg from '@/assets/portfolio/myoolala-landing.png';
import myoolalaAppImg from '@/assets/portfolio/myoolala-app.png';
import myoolalaWalletPassImg from '@/assets/portfolio/myoolala-wallet-pass.jpg';
import rlsguardBlockImg from '@/assets/portfolio/rlsguard-block.png';
import rlsguardPassImg from '@/assets/portfolio/rlsguard-pass.png';
import coachgariAccueilImg from '@/assets/portfolio/coachgari-accueil.png';
import coachgariBackofficeImg from '@/assets/portfolio/coachgari-backoffice.png';
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
  stripImages?: string[];
  gallery?: string[];
  embeds?: (string | undefined)[];
  logo?: string;
  splitPortrait?: boolean;
  stackedImages?: { hero: string; small: string };
  url?: string;
  urlTitle?: string;
  secondaryUrl?: string;
  secondaryTitle?: string;
  badge?: string;
  capabilities?: string[];
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
        detail: 'Security gateway between AI agents and enterprise systems. Every call crosses an eight-stage fail-closed pipeline — authenticate, rate-limit, apply policy, tokenise PII, route by jurisdiction, execute, de-tokenise, audit — and a stage that cannot reach a verdict refuses the call rather than letting it through: an unknown jurisdiction is a refusal, never a default route. Personal data never leaves the perimeter in clear, a Rust tokeniser carrying the seven patterns generic scanners miss, and the clear values are restored only on the way back. Each request is pinned to the jurisdiction that governs it and to the operator that hosts it — Inwi DC Casablanca under loi 09-08 and the CNDP, STC Cloud Riyadh under the PDPL and SAMA, G42 Abu Dhabi under DIFC and ADGM, Hetzner Frankfurt under GDPR and DORA. The audit trail is an Ed25519-signed hash chain exported to your SIEM and held seven years, so a tampered record breaks the chain instead of quietly rewriting history.',
        capabilities: [
          'MCP reverse proxy for AI agents',
          'Eight-stage fail-closed pipeline',
          'Authentication & per-caller rate limits',
          'Attribute-aware policy, verdict before execution',
          'Rust PII tokeniser — seven patterns',
          'IBAN, Morocco CIN, KSA NID & Iqama, Emirates ID',
          'Luhn-validated card detection',
          'Re-identification on the return path only',
          'Morocco — Inwi DC Casablanca (loi 09-08, CNDP)',
          'Saudi — STC Cloud Riyadh (PDPL, SAMA)',
          'UAE — G42 Abu Dhabi (DIFC, ADGM)',
          'EU — Hetzner Frankfurt (GDPR, DORA)',
          'Ed25519-signed hash-chain audit',
          'SIEM export, seven-year retention',
          'CISO dashboard',
          'Docker-ready deployment',
        ],
        logo: bawabaLogoImg,
        image: consoleDashboardImg,
        imagePosition: 'object-top',
        // the card shows tight crops; the zoom and the sheet show the full pages
        stripImages: [consoleDashboardCropImg, consoleRoutingCropImg, consoleAuditCropImg],
        gallery: [consoleDashboardImg, consoleRoutingImg, consoleAuditImg],
        badge: 'Dossier on request',
        url: 'https://bawaba.systems',
        urlTitle: 'Open the site',
      },
    ],
  },
  {
    title: 'Wealth Infrastructure',
    ventures: [
      {
        name: 'BEAU',
        description: 'Wealth structuring infrastructure for multi-jurisdictional families.',
        execution: 'Product strategy · Data architecture · UX · Row-level security',
        detail: 'Wealth structuring for expat families whose assets sit across four or more jurisdictions. Access is scoped to the authenticated session by 236 row-level-security policies, and a schema contract runs in CI that fails the build if a future migration weakens owner-scoping for any role — security written as a test rather than as a promise. Above it sits a consolidated view of portfolios, liabilities and estate documents in every currency the family actually holds, and a gateway that shows an advisor, a spouse or an heir exactly the slice they are entitled to and nothing past it. Liabilities model murabaha and ijara alongside conventional debt. The Dead Man Switch runs a real ladder: a missed heartbeat becomes a warning, then a reminder, then scoped beneficiary access — and personal messages stay sealed until an executor releases them, which is a second key nobody builds for a demo. From €390 a year.',
        capabilities: [
          'Row-level security on every query',
          'Schema contract enforced in CI',
          'Multi-currency portfolio consolidation',
          'Amortisation, payoff & loan comparison',
          'Murabaha & ijara structures modelled',
          'Zakat calculator',
          'Document vault with OCR & expiry',
          'Access gateway, permission by permission',
          'Advisor, spouse & heir roles',
          'Dead Man Switch with executor release',
          'Cross-border succession exposure flags',
          'Built for four-plus jurisdictions',
        ],
        image: beauImg,
        splitImages: { left: beauGatewayImg, right: beauAppImg },
        badge: 'Private beta',
        url: 'https://beau.capital',
        secondaryUrl: 'https://beau.capital/#:~:text=Pricing-,Request,-a%20demo',
        secondaryTitle: 'Request a demo',
      },
      {
        name: 'BEAU Treasury',
        description: 'Treasury intelligence for mid-market corporates. ISO 20022 native.',
        execution: 'Product strategy · Domain expertise · Market positioning · Architecture',
        detail: 'Treasury intelligence for the corporates that have outgrown a spreadsheet and will never buy an enterprise TMS. Designed on sixteen years of payments infrastructure across 83 countries, and ISO 20022 native rather than retrofitted — the richer remittance data survives the whole journey instead of being truncated into a legacy field on the way. Cash visibility across banks and currencies, FX exposure, and payment orchestration that reuses KM OpenPay for execution rails. In development: the modules below are the scope being built.',
        capabilities: [
          'Multi-bank cash position',
          'Multi-currency consolidation',
          'FX exposure & hedging view',
          'Cash forecasting',
          'Payment orchestration',
          'ISO 20022 native messaging',
          'Execution rails via KM OpenPay',
          'Approval & compliance workflow',
        ],
        image: beauTreasuryImg,
        imagePosition: 'object-top',
        badge: 'In development',
      },
    ],
  },
  {
    title: 'Systems',
    ventures: [
      {
        name: 'Sillon',
        description: 'Multi-tenant ERP for physical music distribution — and the SaaS that bills it.',
        execution: 'Domain modeling · Multi-tenant architecture · POS · Accounting · E-invoicing · Pro portal',
        detail: 'Four surfaces on one schema: the internal ERP, a B2B portal for professional buyers, a platform admin, and an AI assistant. 138 tables, 202 application-authored database functions — 160 of them SECURITY DEFINER — and 43 edge functions. It bills its own tenants on plans, add-ons and subscriptions, and separately lets each tenant take card payments on its own Stripe account through Connect, against a platform fee. Isolation is enforced by policy, not by a front-end filter: RLS is on every tenant-scoped table, with no permissive true policy and no write policy blind to the tenant, and the whole posture is rebuilt by replaying all 76 migrations into a clean Postgres on every schema-touching pull request and again nightly, then diffed against a committed introspection of production. That machinery exists because an audit found three security controls that were all green and none of which measured anything.',
        capabilities: [
          'RLS on every tenant-scoped table',
          'Plan entitlements enforced in Postgres',
          'Multi-location stock, lots & movements',
          'Replenishment proposals & backorders',
          'Purchasing, goods receipt & returns',
          'Landed-cost allocation on imports',
          'P&L, balance sheet, VAT & intra-EU return',
          'Bank reconciliation & FX realised gains',
          'Exports to Sage, QuickBooks, Zoho & Pennylane',
          'AP / AR ledgers & payment alerts',
          'Factur-X generation & recurring invoices',
          'B2B pro portal with price groups',
          'Point of sale with cash sessions, per tenant',
          'Tenant billing, plus Stripe Connect payouts',
          'Tamper-evident audit chain',
          'Uptime, error & RLS-drift monitoring',
          'Discogs · Ship24 · VIES · FX rates',
          'Tenant go-live with break-glass log',
          '641 unit tests & 15 adversarial DB benches',
        ],
        image: sillonImg,
        badge: 'Live',
        splitImages: { left: sillonImg, right: sillonDashboardImg },
        url: 'https://sillon.me',
        secondaryUrl: 'https://sillon.me/demo',
        secondaryTitle: 'Request a demo',
      },
      {
        name: 'RLS Guard',
        description: 'Security CI for multi-tenant Postgres. Catches tenant isolation breaks before they merge.',
        execution: 'CLI · GitHub Action · Migration replay · Evidence report',
        detail: 'Replays your migrations on an ephemeral Postgres, asserts four anti-leak invariants — RLS enabled on every tenant table, no permissive true policy reachable by an unprivileged role, no write policy blind to the tenant, no SECURITY DEFINER function without a caller-identity guard — and blocks the merge on a violation. No production secret is ever needed: the replay reads only your repository. Every green run emits a tenant isolation evidence report, JSON and self-contained HTML, that you can attach to a security questionnaire instead of writing prose about controls. Written after an audit found three security controls that were all green and none of which measured anything.',
        capabilities: [
          'Migration replay on ephemeral Postgres',
          'Invariant — RLS on every tenant table',
          'Invariant — no permissive true policy',
          'Invariant — no tenant-blind write policy',
          'Invariant — no unguarded SECURITY DEFINER',
          'Merge blocked on violation',
          'Reads the repository, never production',
          'No production secret required',
          'Evidence report — JSON & standalone HTML',
          'CLI & GitHub Action',
        ],
        image: rlsguardBlockImg,
        splitImages: { left: rlsguardBlockImg, right: rlsguardPassImg },
        badge: 'v1.0.0 · download',
        url: 'https://github.com/OolalaDXB/rls-guard/releases/tag/v1.0.0',
        urlTitle: 'Download v1.0.0',
        secondaryUrl: 'https://github.com/OolalaDXB/rls-guard',
        secondaryTitle: 'View the repository',
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
        detail: 'One identity, several faces. A single profile carries four separate views — Social, Work, Events, Exclusive — and each is a different person to a different audience: its own content, its own QR code, its own wallet pass. The pass is the real engineering. It is built from scratch: a hand-written ZIP, a SHA-1 manifest, and a PKCS#7 detached signature chained to Apple own intermediate certificate — a pass either signs correctly or iOS refuses it, so there is no demo mode here. Its serial embeds the view, so the work face and the social face are genuinely different passes. Apple PassKit web service and APNs push are implemented too, which means an already-issued pass updates over the air: edit the broadcast line and every phone holding the pass is notified. Google Wallet has its own full implementation beside it.',
        capabilities: [
          'Four views — Social, Work, Events, Exclusive',
          'A QR code per view',
          'Apple Wallet pass per view, PKCS#7 signed',
          'Google Wallet implementation beside it',
          'PassKit web service & APNs push',
          'Broadcast line pushes to every pass',
          'Vanity URLs & per-view aliases',
          'Embedded music players per view',
          'Donations through Stripe',
          'vCard export & SSR profile pages',
        ],
        image: myoolalaWalletPassImg,
        splitImages: { left: myoolalaWalletPassImg, right: myoolalaAppImg },
        // the Sofia Reyes panel opens the live profile in the overlay, not a new tab
        embeds: [undefined, 'https://myoolala.com/profile.html'],
        splitPortrait: true,
        badge: 'Live',
        url: 'https://myoolala.com',
        urlTitle: 'Open a live Oo',
        secondaryUrl: 'https://myoolala.com/auth?tab=signup',
        secondaryTitle: 'Create your Oo',
      },
      {
        name: 'Maisons.co',
        description: 'Short-term rentals and long-term leases, with the accounting that follows both.',
        execution: 'Full-stack build · Booking · Leases & rent calls · Reconciliation · Team ops',
        detail: 'Two businesses in one schema. Short stays run a direct booking engine with seasonal pricing and iCal channel sync; long lets run leases, rent calls and the French IRL index — seeded with real INSEE quarterly values, and refusing a second revision inside the same calendar year because the 1989 law says so. Underneath sits the part usually outsourced to a spreadsheet: a five-currency ledger that is append-only in the database itself, where a correction is a reversal and the exchange rate is recomputed server-side over whatever the client sent. The assistant that writes to it is fenced by a whitelist of eighteen actions pinned to named columns, and every refusal is logged. 76 tables, 94 database functions, 23 edge functions, 196 migrations. Two properties live — Morbihan and Gudauri — with Dubai next.',
        capabilities: [
          'Direct booking engine & signed contracts',
          'Server-authoritative pricing & seasons',
          'iCal channel sync, both directions',
          'Leases, rent calls & INSEE IRL indexation',
          'Rent notices & receipts in French words',
          'Append-only ledger, EUR/USD/AED/GEL/GBP',
          'Bank-statement import & learned rules',
          'Charge reconciliation & P&L per property',
          'Legal entities & portfolio access',
          'Owner, team & guest portals',
          'Cleaning checklists & templates',
          'Guest onboarding in EN/FR/RU',
          'Souffleur assistant, 18 whitelisted actions',
          'GDPR purge runs & security alerts',
        ],
        image: maisonsHeroImg,
        splitImages: { left: maisonsHeroImg, right: maisonsDashboardImg },
        splitPortrait: true,
        badge: 'Live',
        url: 'https://maisons.co',
      },
    ],
  },
  {
    title: 'Sports & Emerging Markets',
    ventures: [
      {
        name: 'Coach Gari',
        description: 'Coaching business and influencer partnerships, run from one back-office.',
        execution: 'Site · Booking · Payment hub · Brand partnerships · CRM · Back-office',
        detail: 'A coach with a 23K audience earns two ways — sessions and brand partnerships — and the back-office runs both. Deals move from proposal to signed agreement to settlement, with commission origins, exemptions and per-line statements, beside a booking engine that holds slots across timezones for a coach who works from several locations. Underneath sits a payment hub built to be extracted and sold on its own: fourteen rails behind one interface, its own FX engine with quotes that stay honoured for a request, and a webhook gate that refuses a live event at a test merchant in both directions and records the refusal rather than swallowing it. Built for one business, architected as a platform: 64 tables, 301 database functions, 18 edge functions. Authorisation is checked per permission on every write — of 83 callable write paths exactly two skip it, both writing only the caller own browser push endpoint — and 16 rollback SQL suites carry 941 assertions, one domain each.',
        capabilities: [
          'Booking, availability rules & exceptions',
          'Slots held across timezones',
          'Tour stops with their own services',
          'BEAU PH hub — Stripe & PayPal live',
          'Mode-matched webhooks, never guessed',
          'Brand deals: proposal → agreement → settlement',
          'Commission origins & exemptions',
          'Partner earnings & settlement statements',
          'CRM with notes, consent management',
          'Refunds & chargebacks',
          'Email, WhatsApp & push outbox',
          'Fourteen payment rails behind one hub',
          'FX engine with consumable quotes',
          'E-signature with evidentiary hashing',
          'Web, YouTube & Instagram analytics',
        ],
        image: coachgariAccueilImg,
        splitImages: { left: coachgariAccueilImg, right: coachgariBackofficeImg },
        badge: 'Live',
        url: 'https://coachgari28.com',
      },
      {
        name: 'District 267',
        description: 'Premium padel & wellness club in Gaborone, Botswana.',
        execution: 'Market scan · Financial model · Investor deck · Local ops',
        detail: 'Produced end to end through the padel.design Full Advisory engagement — the tier proving itself on a real deal rather than in a brochure. Market analysis across twelve African countries narrowed the entry point to Gaborone; a five-year model set the unit economics and ran the downside scenarios; the investor deck and the partnership structure with local operators for land, construction and management followed from it. Raising $300K for 25% equity against a 19–20% IRR target, opening Q4 2026.',
        capabilities: [
          'Market scan across 12 African countries',
          'Site & territory selection',
          'Five-year financial model',
          'Unit economics & scenario planning',
          'Investor deck',
          'Operator structuring — land, build, management',
          '$300K raise for 25% equity',
          '19–20% IRR target',
        ],
        image: district267Img,
        badge: 'On hold',
        url: 'https://district267.co.bw',
      },
      {
        name: 'PandaMood',
        description: 'Quiet-luxury padel equipment brand. Limited editions only.',
        execution: 'Brand identity · Product design · Supply chain · E-commerce',
        detail: 'A padel brand built from nothing: the name, the positioning and the visual identity, then the object itself. The ALPHA racket line was designed with a manufacturing partner and is in sampling. Quiet luxury means the restraint is the product — matte black, no sponsor logos, no seasonal refresh — and limited editions mean the drop sells out or it does not, with no discount cycle to fall back on. The whole chain is in place, from sourcing to fulfilment, behind an e-commerce site that takes reservations ahead of a drop. First drop: 50 units, targeted Q3 2026.',
        capabilities: [
          'Name, positioning & visual identity',
          'ALPHA racket line',
          'Manufacturing partner & sampling',
          'Sourcing-to-fulfilment supply chain',
          'E-commerce storefront',
          'Pre-drop reservation system',
          'Limited editions — 50 units, Q3 2026',
        ],
        image: pandamoodImg,
        badge: 'Prototype',
        url: 'https://pandamood.com',
      },
      {
        name: 'padel.design',
        description: 'Advisory for padel club development in underserved markets. Delivered the District 267 dossier.',
        execution: 'Territory analysis · Feasibility · Club playbooks',
        detail: 'Advisory for investors entering padel markets nobody has mapped yet. Three tiers, priced so a sceptical investor can buy the cheapest one first: Market Scan at $2,500 ends in a go or a no-go, Club Playbook at $7,500 delivers the business architecture and investor documents, Full Advisory from $25,000 runs from concept to opening. Africa, the GCC and Central Asia. The top tier is not theoretical — it has already produced a complete dossier for District 267 in Gaborone, twelve-country analysis, five-year model, investor deck and structured local partnerships included.',
        capabilities: [
          'Market Scan — $2,500, go / no-go',
          'Club Playbook — $7,500, business architecture',
          'Full Advisory — $25,000+, concept to opening',
          'Territory & competitive analysis',
          'Feasibility & unit economics',
          'Investor documentation',
          'Operator & partnership structuring',
          'Africa, GCC & Central Asia',
        ],
        image: padeldesignImg,
        badge: 'Live',
        url: 'https://padel.design',
      },
    ],
  },
  {
    title: 'Social Impact',
    ventures: [
      {
        name: 'Les Vieilles Pierres',
        description: 'Heritage hiking association in Bretagne — public site and self-managed back-office.',
        execution: 'Full-stack build · Editorial site · Multi-role CMS · Embedded AI assistant',
        detail: 'Digital rebuild for a heritage hiking association in Quistinic, Morbihan — founded in 1974, 130km of trails, run entirely by volunteers. Two layers in one build. The front is an editorial public site: trails, events, shop, gallery, contact. The back is a no-code admin space the volunteers operate themselves, with no developer standing behind them — whitelisted access, role-based tabs, per-page editing, photo uploads they reorder by hand. The part that decides whether any of it survives is the Souffleur IA: an embedded assistant with a plain-language guide written for people who do not work in software. They ask it a question in their own words and it answers. Pro bono; my father is president.',
        capabilities: [
          'Editorial public site — trails, events, gallery',
          'Shop for maps & heritage books',
          'No-code admin run by volunteers',
          'Whitelisted auth with role-based tabs',
          'Per-page content editing',
          'Photo library with ordering',
          'Messages, orders & contacts',
          'Calendar & visit statistics',
          'Team management & audit journal',
          'Souffleur IA — 14 tools over the live database',
          'Contact CRM across four registers',
          'CSV & Excel import and export',
          'Append-only audit log admins cannot alter',
          'Resend transactional email',
          'Plausible analytics',
        ],
        image: lesvieillespierresHeroImg,
        imagePosition: 'object-center',
        gallery: [lesvieillespierresHeroImg, lesvieillespierresSouffleurImg, lesvieillespierresAdminImg],
        badge: 'Live',
        url: 'https://lesvieillespierres.com',
      },
      {
        name: 'Oolala Social Foundation',
        description: 'Giving vehicle for youth initiatives in Africa.',
        execution: 'Structure design · Governance · Grant framework',
        detail: 'The giving vehicle behind the portfolio: legal structure, governance model and a grant evaluation framework, so funding decisions follow written criteria rather than whoever asked most recently. Focus areas are education, environment, sport and employment for young people in Africa. Funded out of Oolala FZ LLC. First grantee: Live Great Foundation.',
        capabilities: [
          'Legal structure & statutes',
          'Governance model',
          'Grant evaluation framework',
          'Focus — education, environment, sport, employment',
          'Funded through Oolala FZ LLC',
          'First grantee — Live Great Foundation',
        ],
        image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop',
      },
      {
        name: 'Live Great Foundation',
        description: 'Grassroots foundation in Kibera, Nairobi. Sponsored rebuild.',
        execution: 'Funding · Information architecture · Web design · Copy',
        detail: 'A grassroots foundation in Kibera, one of the largest informal settlements in Africa, doing work that was invisible online. Sponsored through Oolala Social: information architecture, the site itself, and all the copy — written so a funder can see the programmes and their numbers in one pass instead of digging. What those programmes move, monthly and yearly, is below.',
        capabilities: [
          'Information architecture',
          'Website build & editorial copy',
          'Waste management — 5,000+ kg a month',
          'Climate education — 50+ champions',
          'Youth employment — 200+ jobs',
          'Sports nutrition — 300+ athletes fed',
          'Funded through Oolala Social',
        ],
        image: livegreatImg,
        badge: 'Live',
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
        {/* auto-fit stretches a lone card across the whole row, so a category with
            one venture keeps the column width the others get instead. */}
        <div
          className={cn(
            'grid grid-cols-1 gap-6 md:gap-8',
            category.ventures.length === 1
              ? 'md:grid-cols-2'
              : 'md:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(340px,1fr))]'
          )}
        >
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
