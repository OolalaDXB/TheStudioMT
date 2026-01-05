import { Hero } from '@/components/studio/Hero';
import { Philosophy } from '@/components/studio/Philosophy';
import { Portfolio } from '@/components/studio/Portfolio';
import { Contact } from '@/components/studio/Contact';
import { Footer } from '@/components/studio/Footer';
import { Navigation } from '@/components/studio/Navigation';
import { CustomCursor } from '@/components/studio/CustomCursor';

const Index = () => {
  return (
    <div className="grain">
      <CustomCursor />
      <Navigation />
      
      <main>
        <Hero />
        <Philosophy />
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
