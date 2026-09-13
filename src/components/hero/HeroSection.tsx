import React from 'react';
import { motion } from 'motion/react';
import heroImg from '../../media/heroIMG.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0b141d] pt-[115px] sm:pt-[160px] pb-12 sm:pb-28 overflow-hidden">
      {/* Background ambient subtle blue glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -top-32 -left-20 w-[650px] h-[650px] bg-[#0066f5]/15 rounded-full blur-[160px] pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start w-full max-w-[740px] pr-0 lg:pr-4"
          >
            {/* Badge Superior */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#102131] border border-[#1b344e] mb-5 sm:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#0066f5] shrink-0 shadow-[0_0_8px_#0066f5]" />
              <span className="font-[Plus_Jakarta_Sans] text-[10px] sm:text-[11px] font-bold tracking-[1.5px] text-[#6f9ecc]">
                Saúde, Estética e Longevidade
              </span>
            </motion.div>

            {/* Headline (H1) - Exact content, colors, and line breaks */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-[Plus_Jakarta_Sans] text-[26px] sm:text-[44px] md:text-[54px] lg:text-[56px] xl:text-[62px] font-bold leading-[1.12] sm:leading-[1.08] tracking-[-0.03em] mb-5 sm:mb-6"
            >
              <span className="block sm:whitespace-nowrap">
                <span className="text-white">Realçamos </span>
                <span className="text-[#0066f5]">a </span>
                <span className="text-[#318FFF]">beleza</span>
                <span className="text-[#0066f5]"> que</span>
              </span>
              <span className="block sm:whitespace-nowrap">
                <span className="text-white">já </span>
                <span className="text-[#0066f5]">existe em </span>
                <span className="text-[#318FFF]">você</span>
              </span>
            </motion.h1>

            {/* Descrição (P) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-[Plus_Jakarta_Sans] text-[14px] sm:text-[17px] leading-[1.65] text-[#869ab0] max-w-[560px] mb-7 sm:mb-10"
            >
              Unimos medicina estética de alta precisão, saúde integrativa e protocolos de longevidade em um refúgio acolhedor no coração de Gramado.
            </motion.p>

            {/* Botão Principal CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <a
                href="https://wa.me/5551999672121"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] bg-[#0066f5] hover:bg-[#0055d4] active:scale-[0.98] text-white rounded-full font-[Plus_Jakarta_Sans] text-[12px] sm:text-[13px] font-bold tracking-[0.05em] uppercase shadow-[0_6px_20px_rgba(0,102,245,0.4)] hover:shadow-[0_8px_28px_rgba(0,102,245,0.55)] transition-all text-center"
              >
                AGENDE SUA EXPERIÊNCIA PERSONALIZADA
              </a>
            </motion.div>

            {/* Rodapé da Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.0 }}
              className="flex items-center gap-2.5 mt-5 sm:mt-8"
            >
              <span className="text-[#0066f5] text-[10px] leading-none shrink-0">●</span>
              <p className="font-[Plus_Jakarta_Sans] text-[11.5px] sm:text-[13px] text-[#869ab0]">
                Atendimento exclusivo com hora marcada em ambiente privativo.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-center w-full mt-2 lg:mt-0"
          >
            <div className="relative w-full max-w-[480px] lg:max-w-[500px] h-[320px] sm:h-[500px] lg:h-[660px] rounded-[26px] sm:rounded-[42px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] bg-[#101b26] group">
              {/* Photo of aesthetic facial treatment */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url("${heroImg}")`,
                }}
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09131d]/60 via-transparent to-black/10 pointer-events-none" />

              {/* Tag at bottom */}
              <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 sm:left-7 sm:translate-x-0">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09131d]/85 backdrop-blur-md border border-[#ffffff20] shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066f5]" />
                  <span className="font-[Plus_Jakarta_Sans] text-[10.5px] sm:text-[11px] font-medium text-white/90 tracking-[0.5px]">
                    Gramado - RS
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
