import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { About } from '@/components/about';
import { Testimonials } from '@/components/testimonials';
import { Pricing } from '@/components/pricing';
import { Stats } from '@/components/stats';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
       <Stats />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
}