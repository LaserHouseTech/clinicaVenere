import React, { useState, useEffect } from 'react';
import logoImg from '../logo.png';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070e17]/80 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-white/[0.05]'
      }`}
    >
      <div
        className={`max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-[72px] sm:h-[84px]' : 'h-[84px] sm:h-[100px]'
        }`}
      >
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center group shrink-0">
          <img
            src={logoImg}
            alt="Clínica Vênere"
            className={`object-contain transition-all duration-300 group-hover:scale-105 ${
              isScrolled
                ? 'w-[38px] h-[38px] sm:w-[46px] sm:h-[46px]'
                : 'w-[42px] h-[42px] sm:w-[52px] sm:h-[52px]'
            }`}
          />
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          <a
            href="#clinica"
            className="font-[Plus_Jakarta_Sans] text-[12px] font-bold tracking-[0.05em] text-[#869ab0] hover:text-white uppercase transition-colors"
          >
            A CLÍNICA
          </a>
          <a
            href="#especialistas"
            className="font-[Plus_Jakarta_Sans] text-[12px] font-bold tracking-[0.05em] text-[#869ab0] hover:text-white uppercase transition-colors"
          >
            ESPECIALISTAS
          </a>
          <a
            href="#tratamentos"
            className="font-[Plus_Jakarta_Sans] text-[12px] font-bold tracking-[0.05em] text-[#869ab0] hover:text-white uppercase transition-colors"
          >
            TRATAMENTOS
          </a>
          <a
            href="#experiencia"
            className="font-[Plus_Jakarta_Sans] text-[12px] font-bold tracking-[0.05em] text-[#869ab0] hover:text-white uppercase transition-colors"
          >
            EXPERIÊNCIA
          </a>
          <a
            href="#depoimentos"
            className="font-[Plus_Jakarta_Sans] text-[12px] font-bold tracking-[0.05em] text-[#869ab0] hover:text-white uppercase transition-colors"
          >
            DEPOIMENTOS
          </a>
          <a
            href="#localizacao"
            className="font-[Plus_Jakarta_Sans] text-[12px] font-bold tracking-[0.05em] text-[#869ab0] hover:text-white uppercase transition-colors"
          >
            LOCALIZAÇÃO
          </a>
        </nav>

        {/* Actions Container */}
        <div className="flex items-center gap-3">
          {/* Primary CTA Button */}
          <a
            href="https://wa.me/5551999672121"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 sm:px-7 py-2.5 sm:py-3 bg-[#0066f5] hover:bg-[#0055d4] text-white rounded-full font-[Plus_Jakarta_Sans] text-[11px] sm:text-[12px] font-bold tracking-[0.05em] uppercase shadow-[0_6px_20px_rgba(0,102,245,0.4)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span className="sm:hidden">AGENDE</span>
            <span className="hidden sm:inline">AGENDE SUA EXPERIÊNCIA</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-[#09111b]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4">
            <a
              href="#clinica"
              onClick={() => setMobileMenuOpen(false)}
              className="font-[Plus_Jakarta_Sans] text-[13px] font-bold tracking-[0.06em] text-[#869ab0] hover:text-white uppercase transition-colors py-1.5"
            >
              A CLÍNICA
            </a>
            <a
              href="#especialistas"
              onClick={() => setMobileMenuOpen(false)}
              className="font-[Plus_Jakarta_Sans] text-[13px] font-bold tracking-[0.06em] text-[#869ab0] hover:text-white uppercase transition-colors py-1.5"
            >
              ESPECIALISTAS
            </a>
            <a
              href="#tratamentos"
              onClick={() => setMobileMenuOpen(false)}
              className="font-[Plus_Jakarta_Sans] text-[13px] font-bold tracking-[0.06em] text-[#869ab0] hover:text-white uppercase transition-colors py-1.5"
            >
              TRATAMENTOS
            </a>
            <a
              href="#experiencia"
              onClick={() => setMobileMenuOpen(false)}
              className="font-[Plus_Jakarta_Sans] text-[13px] font-bold tracking-[0.06em] text-[#869ab0] hover:text-white uppercase transition-colors py-1.5"
            >
              EXPERIÊNCIA
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="font-[Plus_Jakarta_Sans] text-[13px] font-bold tracking-[0.06em] text-[#869ab0] hover:text-white uppercase transition-colors py-1.5"
            >
              DEPOIMENTOS
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="font-[Plus_Jakarta_Sans] text-[13px] font-bold tracking-[0.06em] text-[#869ab0] hover:text-white uppercase transition-colors py-1.5"
            >
              LOCALIZAÇÃO
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="font-[Plus_Jakarta_Sans] text-[13px] font-bold tracking-[0.06em] text-[#869ab0] hover:text-white uppercase transition-colors py-1.5"
            >
              FAQ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
