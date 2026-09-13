import React from 'react';
import logoImg from '../logo.png';
import footerDevByImg from '../../media/footerDevBy.png';

export const FooterSection: React.FC = () => {
  return (
    <div className="w-full relative bg-[#04070c]">
      <footer
        className="relative w-full text-white pt-16 sm:pt-24 pb-10 sm:pb-12 rounded-t-[32px] sm:rounded-t-[64px] border-t border-l border-r border-b-0 border-white/[0.08]"
        style={{
          background: `
            radial-gradient(1100px circle at 88% 22%, rgba(29, 78, 130, 0.95) 0%, rgba(20, 52, 86, 0.78) 32%, rgba(12, 28, 48, 0.52) 58%, transparent 80%),
            radial-gradient(850px circle at 50% 92%, rgba(24, 62, 105, 0.45) 0%, transparent 65%),
            radial-gradient(750px circle at 15% 85%, rgba(14, 34, 58, 0.38) 0%, transparent 65%),
            linear-gradient(180deg, #08101a 0%, #060b13 45%, #04070c 100%)
          `,
        }}
      >
        {/* Top Overlapping Logo Medallion */}
        <div className="absolute -top-10 sm:-top-16 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-[#051124] border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.85)] flex items-center justify-center p-2 sm:p-2.5 z-20">
          <img
            src={logoImg}
            alt="Clínica Vênere"
            className="w-full h-full object-contain"
          />
        </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Top Tagline */}
        <div className="text-center pt-2 sm:pt-4 mb-6 sm:mb-10">
          <p className="font-[Plus_Jakarta_Sans] text-[9.5px] sm:text-[12px] font-semibold tracking-[1.6px] sm:tracking-[2.5px] text-white/80 uppercase">
            MEDICINA INTEGRATIVA · ESTÉTICA AVANÇADA
          </p>
        </div>

        {/* Full-width Divider */}
        <div className="w-full border-t border-white/[0.08] mb-8 sm:mb-12" />

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-start mb-8 sm:mb-12">
          {/* Column 1: Localização */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="font-[Plus_Jakarta_Sans] text-[11px] sm:text-[12.5px] font-bold tracking-[1.5px] text-white uppercase mb-2 sm:mb-4">
              LOCALIZAÇÃO
            </h4>
            <p className="font-[Plus_Jakarta_Sans] text-[13px] sm:text-[14px] font-bold text-white mb-0.5 sm:mb-1">
              R. Leopoldo Rosenfeld, 678
            </p>
            <p className="font-[Plus_Jakarta_Sans] text-[12px] sm:text-[13px] text-white/70 mb-0.5">
              Bairro Planalto, Gramado - RS
            </p>
            <p className="font-[Plus_Jakarta_Sans] text-[11.5px] sm:text-[13px] text-white/70">
              CEP 95675–060
            </p>
          </div>

          {/* Column 2: Contato */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="font-[Plus_Jakarta_Sans] text-[11px] sm:text-[12.5px] font-bold tracking-[1.5px] text-white uppercase mb-2 sm:mb-4">
              CONTATO
            </h4>
            <a
              href="https://instagram.com/veneregramado"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[Plus_Jakarta_Sans] text-[12.5px] sm:text-[13.5px] text-white/80 hover:text-white py-1 inline-flex items-center gap-1 transition-colors"
            >
              Instagram: @veneregramado <span className="text-[11px] opacity-70">↗</span>
            </a>
            <a
              href="https://wa.me/5551999672121"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[Plus_Jakarta_Sans] text-[12.5px] sm:text-[13.5px] text-white/80 hover:text-white py-1 inline-flex items-center gap-1 transition-colors"
            >
              WhatsApp: (51) 99967–2121 <span className="text-[11px] opacity-70">↗</span>
            </a>
            <p className="font-[Plus_Jakarta_Sans] text-[11.5px] sm:text-[12px] text-white/50 mt-1">
              Atendimento com hora marcada
            </p>
          </div>

          {/* Column 3: Navegação */}
          <div className="md:col-span-4 flex flex-col items-start w-full">
            <h4 className="font-[Plus_Jakarta_Sans] text-[11px] sm:text-[12.5px] font-bold tracking-[1.5px] text-white uppercase mb-2 sm:mb-4">
              NAVEGAÇÃO
            </h4>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-1.5 sm:gap-y-2.5 w-full">
              <div className="flex flex-col space-y-1.5 sm:space-y-2">
                <a
                  href="#inicio"
                  className="font-[Plus_Jakarta_Sans] text-[12px] sm:text-[13.5px] text-white/75 hover:text-white py-0.5 transition-colors"
                >
                  A Clínica
                </a>
                <a
                  href="#especialistas"
                  className="font-[Plus_Jakarta_Sans] text-[12px] sm:text-[13.5px] text-white/75 hover:text-white py-0.5 transition-colors"
                >
                  Especialistas
                </a>
                <a
                  href="#tratamentos"
                  className="font-[Plus_Jakarta_Sans] text-[12px] sm:text-[13.5px] text-white/75 hover:text-white py-0.5 transition-colors"
                >
                  Tratamentos &amp; Protocolos
                </a>
              </div>
              <div className="flex flex-col space-y-1.5 sm:space-y-2">
                <a
                  href="#experiencia"
                  className="font-[Plus_Jakarta_Sans] text-[12px] sm:text-[13.5px] text-white/75 hover:text-white py-0.5 transition-colors"
                >
                  Experiência Vênere
                </a>
                <a
                  href="#reviews"
                  className="font-[Plus_Jakarta_Sans] text-[12px] sm:text-[13.5px] text-white/75 hover:text-white py-0.5 transition-colors"
                >
                  Depoimentos
                </a>
                <a
                  href="#localizacao"
                  className="font-[Plus_Jakarta_Sans] text-[12px] sm:text-[13.5px] text-white/75 hover:text-white py-0.5 transition-colors"
                >
                  Localização Privilegiada
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Divider above Sub-bar */}
        <div className="w-full border-t border-white/[0.08] mb-6 sm:mb-8" />

        {/* Sub-bar: Google Rating & Legal */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          {/* Rating Pill */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0074ff] text-white shadow-sm shrink-0">
              <span className="text-[10px]">★</span>
              <span className="font-[Plus_Jakarta_Sans] text-[10.5px] sm:text-[11px] font-bold">5.0</span>
            </div>
            <span className="font-[Plus_Jakarta_Sans] text-[11px] sm:text-[12.5px] text-white/75">
              Excelência comprovada no Google Reviews
            </span>
          </div>

          {/* Legal / CRM */}
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1 text-[10.5px] sm:text-[12px] text-white/60 font-[Plus_Jakarta_Sans]">
            <span>Responsável Técnica • CRM/RS: sob consulta</span>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Privacidade
            </a>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1 h-1 rounded-full bg-white/40" />
              © 2025 Atelier Vênere
            </span>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="flex items-center justify-center pt-2 sm:pt-4 pb-2">
          <img
            src={footerDevByImg}
            alt="Desenvolvido por Paradiso - Tecnologia que Conecta"
            className="w-full max-w-[340px] sm:max-w-[480px] md:max-w-[580px] h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
    </footer>
  </div>
  );
};
