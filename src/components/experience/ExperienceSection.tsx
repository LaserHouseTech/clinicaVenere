import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import aboutUsVid from '../../media/aboutUsVid.mp4';
import atendimentoHumanizadoImg from '../../media/atendimentoHumanizado (2).png';
import tecnologiaRegenerativaImg from '../../media/TecnologiaRegenerativa.png';
import ambienteAcolhedorImg from '../../media/AmbienteAcolhedor.jpg';

export const ExperienceSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full bg-[#111e2e]">
      <section
        id="clinica"
        className="relative w-full bg-white pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28 rounded-b-[44px] sm:rounded-b-[70px] z-20 scroll-mt-20 sm:scroll-mt-28"
      >
        {/* Anchor for experiencia */}
        <div id="experiencia" className="sr-only" />
      
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Feature: Video Card + Editorial Content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center"
        >
          {/* Left: Video Showcase Card */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-start w-full">
            <div
              onClick={togglePlay}
              className="relative w-full max-w-[380px] sm:max-w-[420px] h-[300px] sm:h-[460px] lg:h-[540px] rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] group cursor-pointer bg-[#0b141d]"
            >
              {/* HTML5 Video Element */}
              <video
                ref={videoRef}
                src={aboutUsVid}
                playsInline
                loop
                onEnded={() => setIsPlaying(false)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay (shown or reduced depending on playing state) */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  isPlaying ? 'bg-transparent hover:bg-black/20' : 'bg-black/25'
                }`}
              />

              {/* Centered Circular White Play/Pause Button */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                }`}
              >
                <div className="w-[54px] h-[54px] sm:w-[72px] sm:h-[72px] rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-[0_6px_25px_rgba(0,0,0,0.3)] group-hover:scale-110 active:scale-95 transition-transform duration-300">
                  {isPlaying ? (
                    <div className="flex gap-1.5 items-center justify-center">
                      <span className="w-1.5 sm:w-2 h-4 sm:h-5 bg-[#111315] rounded-sm" />
                      <span className="w-1.5 sm:w-2 h-4 sm:h-5 bg-[#111315] rounded-sm" />
                    </div>
                  ) : (
                    <span className="w-0 h-0 border-t-[6px] sm:border-t-[9px] border-t-transparent border-l-[10px] sm:border-l-[16px] border-l-[#111315] border-b-[6px] sm:border-b-[9px] border-b-transparent ml-0.5 sm:ml-1" />
                  )}
                </div>
              </div>

              {/* Watermark brand at bottom */}
              {!isPlaying && (
                <div className="absolute bottom-6 sm:bottom-12 inset-x-0 flex justify-center pointer-events-none transition-opacity duration-300">
                  <span className="font-[Cormorant_Garamond] text-[28px] sm:text-[42px] font-normal italic tracking-[0.04em] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] select-none">
                    vênere
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Editorial Typography, Blue Divider, Paragraph & Stats */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start justify-center">
            {/* Main H2 Heading */}
            <h2 className="font-[Cormorant_Garamond] text-[23px] sm:text-[38px] lg:text-[46px] xl:text-[50px] leading-[1.14] text-[#111315] font-normal uppercase tracking-[0.01em]">
              MUITO ALÉM DE UMA CONSULTA: UM<br className="hidden sm:inline" />{' '}
              RITUAL DE <span className="text-[#318FFF] italic font-normal">SAÚDE E BEM-ESTAR</span> NO<br className="hidden sm:inline" />{' '}
              CORAÇÃO DE GRAMADO.
            </h2>

            {/* Blue Divider Line directly under the title */}
            <div className="w-full h-[1.5px] bg-[#318FFF] mt-4 sm:mt-7 mb-4 sm:mb-7" />

            {/* Explanatory Paragraph */}
            <p className="font-[Plus_Jakarta_Sans] text-[13.5px] sm:text-[16px] leading-[1.65] text-[#556070] max-w-[580px] mb-5 sm:mb-9">
              Cada detalhe foi pensado para oferecer acolhimento, privacidade e uma experiência verdadeiramente singular.
            </p>

            {/* Tag Label */}
            <span className="font-[Plus_Jakarta_Sans] text-[10.5px] sm:text-[12px] font-bold tracking-[0.14em] text-[#0066f5] uppercase mb-3 sm:mb-6">
              O CONCEITO VÊNERE
            </span>

            {/* Two Stats Columns */}
            <div className="flex items-start gap-8 sm:gap-16">
              <div className="flex flex-col">
                <span className="font-[Plus_Jakarta_Sans] text-[28px] sm:text-[46px] font-extrabold text-[#111315] leading-none mb-1.5 sm:mb-2">
                  100%
                </span>
                <span className="font-[Plus_Jakarta_Sans] text-[10px] sm:text-[12px] font-bold tracking-[0.08em] text-[#718096] uppercase">
                  PERSONALIZADO
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-[Plus_Jakarta_Sans] text-[28px] sm:text-[46px] font-extrabold text-[#111315] leading-none mb-1.5 sm:mb-2">
                  Gramado
                </span>
                <span className="font-[Plus_Jakarta_Sans] text-[10px] sm:text-[12px] font-bold tracking-[0.08em] text-[#718096] uppercase">
                  REFÚGIO E CONFORTO
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Middle 3 Experience Pillars Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-18 lg:mt-20">
          {/* Card 1: Atendimento Humanizado */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-start group"
          >
            <div className="w-full h-[190px] sm:h-[240px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[#edf0f3] bg-[#f8f9fa]">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url("${atendimentoHumanizadoImg}")`,
                }}
              />
            </div>
            <h3 className="font-[Plus_Jakarta_Sans] text-[15.5px] sm:text-[17px] font-bold text-[#111315] mt-3.5 sm:mt-4 mb-1">
              Atendimento Humanizado e Exclusivo
            </h3>
            <p className="font-[Plus_Jakarta_Sans] text-[13px] sm:text-[14px] leading-[1.55] text-[#556070]">
              Escuta atenta e consultas sem pressa para entender integralmente a sua saúde e seus anseios.
            </p>
          </motion.div>

          {/* Card 2: Tecnologia Regenerativa */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.85, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-start group"
          >
            <div className="w-full h-[190px] sm:h-[240px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[#edf0f3] bg-[#f8f9fa]">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url("${tecnologiaRegenerativaImg}")`,
                }}
              />
            </div>
            <h3 className="font-[Plus_Jakarta_Sans] text-[15.5px] sm:text-[17px] font-bold text-[#111315] mt-3.5 sm:mt-4 mb-1">
              Tecnologia Regenerativa Única
            </h3>
            <p className="font-[Plus_Jakarta_Sans] text-[13px] sm:text-[14px] leading-[1.55] text-[#556070]">
              Instalação dedicada à Sauna de Ozônio e protocolos integrativos avançados para revitalização celular.
            </p>
          </motion.div>

          {/* Card 3: Ambiente Acolhedor */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.85, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-start group"
          >
            <div className="w-full h-[190px] sm:h-[240px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[#edf0f3] bg-[#f8f9fa]">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url("${ambienteAcolhedorImg}")`,
                }}
              />
            </div>
            <h3 className="font-[Plus_Jakarta_Sans] text-[15.5px] sm:text-[17px] font-bold text-[#111315] mt-3.5 sm:mt-4 mb-1">
              Ambiente Acolhedor
            </h3>
            <p className="font-[Plus_Jakarta_Sans] text-[13px] sm:text-[14px] leading-[1.55] text-[#556070]">
              Marcenaria em nogueira, espaço aromatizado, lounge de descanso e café especial em atmosfera de acolhimento.
            </p>
          </motion.div>
        </div>

        {/* Bottom Full-Width Blue Line */}
        <div className="w-full h-[1.5px] bg-[#318FFF] mt-10 sm:mt-18 lg:mt-20 mb-6 sm:mb-7" />

        {/* Bottom Editorial Lockup & Descriptor */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          {/* Left: Two-line Editorial Typography */}
          <div className="flex flex-col select-none">
            <div className="font-[Cormorant_Garamond] text-[24px] sm:text-[27px] leading-tight">
              <span className="text-[#111315] font-normal uppercase tracking-[0.02em]">CLÍNICA </span>
              <span className="text-[#318FFF] italic font-normal uppercase tracking-[0.02em]">VÊNERE</span>
            </div>
            <div className="font-[Cormorant_Garamond] text-[21px] sm:text-[24px] leading-tight mt-0.5">
              <span className="text-[#318FFF] font-normal uppercase tracking-[0.02em]">SAÚDE </span>
              <span className="text-[#111315] italic font-normal uppercase tracking-[0.02em]">&amp; LONGEVIDADE</span>
            </div>
          </div>

          {/* Right: Descriptor Text */}
          <p className="font-[Plus_Jakarta_Sans] text-[12px] sm:text-[13px] text-[#556070] max-w-[460px] leading-[1.6] sm:text-right">
            Um espaço criado para resgatar sua essência com segurança, ciência e acolhimento singular em Gramado - RS.
          </p>
        </div>
      </div>
    </section>
  </div>
  );
};
