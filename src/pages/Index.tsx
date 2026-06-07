import { Hero } from '@/components/studio/Hero';
import { Portfolio } from '@/components/studio/Portfolio';
import { Capabilities } from '@/components/studio/Capabilities';
import { Contact } from '@/components/studio/Contact';
import { Footer } from '@/components/studio/Footer';
import { SectionDivider } from '@/components/studio/SectionDivider';

const Index = () => {
  return (
    <div>
      <Hero />
      <SectionDivider index={1} label="Portfolio" />
      <Portfolio />
      <SectionDivider index={2} label="Capabilities" />
      <Capabilities />
      <SectionDivider index={3} label="Contact" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
