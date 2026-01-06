import { Hero } from '@/components/studio/Hero';
import { Portfolio } from '@/components/studio/Portfolio';
import { Capabilities } from '@/components/studio/Capabilities';
import { Contact } from '@/components/studio/Contact';
import { Footer } from '@/components/studio/Footer';

const Index = () => {
  return (
    <div>
      <Hero />
      <Portfolio />
      <Capabilities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
