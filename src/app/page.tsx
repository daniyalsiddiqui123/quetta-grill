'use client';

import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import ReservationCTA from '@/components/ReservationCTA';
import Footer from '@/components/Footer';

export default function Home() {
  const { language } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main dir={language === 'ar' ? 'rtl' : 'ltr'} className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero
        onReserveClick={() => scrollToSection('reservation')}
        onMenuClick={() => scrollToSection('menu')}
      />
      <MenuSection />
      <AboutSection />
      <ReservationCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
