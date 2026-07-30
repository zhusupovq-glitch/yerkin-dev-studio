import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Youtube from '@/components/Youtube';
import WhyChoose from '@/components/WhyChoose';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Projects />
      <Youtube />
      <WhyChoose />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
