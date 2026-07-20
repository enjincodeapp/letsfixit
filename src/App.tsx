import { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { DevelopmentsSection } from './components/Developments';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Timeline } from './components/Timeline';
import { Testimonials } from './components/Testimonials';
import { VideoSection } from './components/VideoSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export function App() {
  // Initialize Lenis Smooth Scroll & GSAP ScrollTrigger
  useLenis();

  const [consultationOpen, setConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
  };

  return (
    <div className="min-h-screen bg-charcoal text-gray-100 font-sans antialiased selection:bg-gold selection:text-charcoal relative">
      {/* Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Page Sections */}
      <main className="relative z-10 overflow-hidden">
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onOpenVideo={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <AboutSection onOpenConsultation={handleOpenConsultation} />

        <Services onOpenConsultation={handleOpenConsultation} />

        <Projects onOpenConsultation={handleOpenConsultation} />

        <DevelopmentsSection onOpenConsultation={handleOpenConsultation} />

        <WhyChooseUs />

        <Timeline />

        <Testimonials />

        <VideoSection />

        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}

export default App;
