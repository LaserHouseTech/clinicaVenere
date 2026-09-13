import React from 'react';
import { Navbar } from './components/hero/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { SpecialistsSection } from './components/specialists/SpecialistsSection';
import { TreatmentsSection } from './components/treatments/TreatmentsSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { LocationSection } from './components/location/LocationSection';
import { FaqSection } from './components/faq/FaqSection';
import { CtaSection } from './components/cta/CtaSection';
import { FooterSection } from './components/footer/FooterSection';
import { FloatingWhatsAppButton } from './components/common/FloatingWhatsAppButton';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#0b141d] text-[#111315] overflow-x-hidden flex flex-col selection:bg-[#0066f5] selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div id="inicio">
          <div id="clinica">
            <HeroSection />
          </div>
        </div>

        {/* Specialists / Corpo Clínico */}
        <SpecialistsSection />

        {/* Treatments & Protocols */}
        <TreatmentsSection />

        {/* Clinic Experience / O Conceito Vênere */}
        <ExperienceSection />

        {/* Social Proof & Testimonials / Reviews */}
        <TestimonialsSection />

        {/* Location & Attendance / Gramado */}
        <LocationSection />

        {/* Frequently Asked Questions */}
        <div id="faq" className="scroll-mt-20 sm:scroll-mt-24">
          <FaqSection />
        </div>

        {/* Final Call to Action */}
        <CtaSection />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Floating WhatsApp Pulse Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}
