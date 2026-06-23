import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import NewsSection from './components/NewsSection';
import CareerSection from './components/CareerSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <NewsSection />
      <CareerSection />
      <ContactSection />
      <Footer />
    </main>
  );
}