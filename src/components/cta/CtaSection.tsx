import React from 'react';
import { motion } from 'motion/react';
import logoImg from '../logo.png';
import ctaImg from '../../media/CTAimg.png';

export const CtaSection: React.FC = () => {
  return (
    <section
      id="contato"
      className="relative w-full pt-8 sm:pt-14 pb-20 sm:pb-28 lg:pb-32 scroll-mt-20 sm:scroll-mt-28 overflow-hidden"
      style={{
        background: `
          radial-gradient(1000px circle at 88% 18%, rgba(29, 78, 130, 0.95) 0%, rgba(20, 52, 86, 0.78) 32%, rgba(12, 28, 48, 0.52) 58%, transparent 80%),
          radial-gradient(750px circle at 15% 85%, rgba(14, 34, 58, 0.38) 0%, transparent 65%),
          linear-gradient(180deg, #08101a 0%, #060b13 45%, #04070c 100%)
        `,
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.95, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[28px] sm:rounded-[36px] bg-[#0c1015] border border-white/[0.08] overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.65)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Content (below on mobile, left on desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-6 p-6 sm:p-12 lg:p-14 xl:p-16 flex flex-col items-start justify-center z-10 bg-[#0c1015]">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#005cdb]/80 bg-[#071324]/80 mb-5 sm:mb-7">
                <span className="w-2 h-2 rounded-full bg-[#0074ff] shrink-0 shadow-[0_0_8px_#0074ff]" />
                <span className="font-[Plus_Jakarta_Sans] text-[10px] sm:text-[11px] font-bold tracking-[1.5px] text-[#0074ff] uppercase">
                  SEU NOVO CAPÍTULO
                </span>
              </div>

              {/* Title */}
              <h2 className="mb-4 sm:mb-6">
                <span className="font-[Plus_Jakarta_Sans] text-[24px] sm:text-[40px] lg:text-[46px] font-bold text-white leading-[1.12] tracking-[-0.02em] block">
                  Venha vivenciar <br />
                  sua melhor versão
                </span>
                <span className="font-[Cormorant_Garamond] text-[26px] sm:text-[44px] lg:text-[50px] font-normal italic text-[#0074ff] leading-[1.1] block mt-1 sm:mt-1.5">
                  com saúde, segurança e <br />
                  equilíbrio
                </span>
              </h2>

              {/* Description */}
              <p className="font-[Plus_Jakarta_Sans] text-[12.5px] sm:text-[13.5px] leading-[1.65] text-[#8f9cae] max-w-[440px] mb-6 sm:mb-8">
                Dê o primeiro passo para um cuidado integral e acolhedor. <br className="hidden sm:inline" />
                Nossa equipe multidisciplinar está pronta <br className="hidden sm:inline" />
                para receber você.
              </p>

              {/* CTA Button */}
              <a
                href="https://wa.me/5551999672121"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 min-h-[48px] bg-[#0074ff] hover:bg-[#0062d9] active:scale-[0.98] text-white rounded-xl sm:rounded-2xl font-[Plus_Jakarta_Sans] text-[12px] sm:text-[13px] font-bold tracking-[0.6px] uppercase shadow-[0_8px_30px_rgba(0,116,255,0.45)] transition-all transform sm:hover:-translate-y-0.5 text-center"
              >
                AGENDE SUA EXPERIÊNCIA PERSONALIZADA
              </a>
            </div>

            {/* Photo (above on mobile, right on desktop) */}
            <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-6 relative h-[280px] sm:h-[400px] lg:h-full min-h-[280px] sm:min-h-[400px] lg:min-h-[580px] w-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: `url("${ctaImg}")`,
                }}
              />
              {/* Subtle gradient vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1015] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0c1015]/40 lg:via-transparent lg:to-transparent" />

              {/* Bottom Right Floating Badge */}
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto sm:max-w-[320px] z-10">
                <div className="bg-[#141b22]/90 backdrop-blur-md rounded-[16px] sm:rounded-[18px] p-3.5 sm:p-4 border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-8 h-8 rounded-full bg-[#051124] border border-white/10 flex items-center justify-center p-1 shrink-0">
                      <img
                        src={logoImg}
                        alt="Vênere"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-[Plus_Jakarta_Sans] text-[13px] sm:text-[14px] font-bold text-white tracking-wide">
                      Experiência Vênere
                    </span>
                  </div>
                  <p className="font-[Plus_Jakarta_Sans] text-[10.5px] sm:text-[11.5px] leading-[1.45] text-white/75">
                    Cuidado Integrativo, Estética Avançada &amp; Longevidade no coração de Gramado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
