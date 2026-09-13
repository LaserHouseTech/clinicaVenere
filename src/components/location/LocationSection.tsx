import React from 'react';
import { motion } from 'motion/react';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="localizacao"
      className="relative w-full bg-[#f8f7f4] -mt-8 py-10 sm:py-20 rounded-t-[36px] sm:rounded-t-[70px] z-20 overflow-hidden min-h-[540px] sm:min-h-[720px] flex items-center scroll-mt-20 sm:scroll-mt-28"
    >
      {/* Interactive Google Maps in Background - on mobile pointer-events is disabled so vertical page swipe isn't trapped */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <iframe
          title="Localização Clínica Vênere no Google Maps"
          src="https://maps.google.com/maps?q=Rua+Leopoldo+Rosenfeld,+678,+Planalto,+Gramado+-+RS&t=&z=18&ie=UTF8&iwloc=&output=embed"
          className="absolute -top-[160px] -bottom-[160px] -left-[60px] lg:left-0 w-[calc(100%+120px)] lg:w-[150%] h-[calc(100%+320px)] border-0 contrast-[102%] pointer-events-none sm:pointer-events-auto"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Subtle gradient vignette to ensure high contrast and readability for the floating card */}
        <div className="absolute inset-0 pointer-events-none bg-[#f8f7f4]/92 sm:bg-transparent sm:bg-gradient-to-r sm:from-[#f8f7f4] sm:via-[#f8f7f4]/80 sm:to-transparent lg:w-[46%]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 relative z-10 w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Floating Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 pointer-events-auto w-full"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-[24px] sm:rounded-[32px] p-5 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#e8e4db] max-w-[500px] mx-auto lg:mx-0">
              <span className="font-[Plus_Jakarta_Sans] text-[10.5px] sm:text-[11px] font-bold tracking-[2px] text-[#0074ff] uppercase mb-2.5 sm:mb-4 block">
                LOCALIZAÇÃO & ATENDIMENTO
              </span>

              <h2 className="font-[Plus_Jakarta_Sans] text-[18px] sm:text-[28px] lg:text-[30px] font-bold leading-[1.2] text-[#111315] uppercase mb-3 sm:mb-4">
                EM UM DOS ENDEREÇOS MAIS NOBRES E TRANQUILOS DE GRAMADO
              </h2>

              <p className="font-[Plus_Jakarta_Sans] text-[13px] sm:text-[14px] leading-[1.65] text-[#111315b2] mb-5 sm:mb-8">
                Fácil acesso, com tranquilidade e estacionamento que sua experiência merece desde a chegada.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mb-5 sm:mb-8 pb-5 sm:pb-8 border-b border-[#eeeae2]">
                {/* Address Col */}
                <div className="flex flex-col">
                  <span className="font-[Plus_Jakarta_Sans] text-[10.5px] sm:text-[11px] font-bold tracking-[1.5px] text-[#11131580] uppercase mb-1.5 sm:mb-2">
                    ENDEREÇO
                  </span>
                  <span className="font-[Plus_Jakarta_Sans] text-[13.5px] sm:text-[14px] font-bold text-[#111315]">
                    Clínica Vênere
                  </span>
                  <span className="font-[Plus_Jakarta_Sans] text-[12.5px] sm:text-[13px] text-[#11131599] mt-0.5">
                    R. Leopoldo Rosenfeld, 678
                  </span>
                  <span className="font-[Plus_Jakarta_Sans] text-[12.5px] sm:text-[13px] text-[#11131599]">
                    Bairro Planalto, Gramado - RS
                  </span>
                  <span className="font-[Plus_Jakarta_Sans] text-[11.5px] sm:text-[12px] text-[#0074ff] mt-1 font-medium">
                    CEP 95675-060 · Próx. Lago Joaquina Rita Bier
                  </span>
                </div>

                {/* Contact Col */}
                <div className="flex flex-col">
                  <span className="font-[Plus_Jakarta_Sans] text-[10.5px] sm:text-[11px] font-bold tracking-[1.5px] text-[#11131580] uppercase mb-1.5 sm:mb-2">
                    WHATSAPP
                  </span>
                  <a
                    href="https://wa.me/5551999672121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[Plus_Jakarta_Sans] text-[12.5px] sm:text-[13px] text-[#111315] hover:text-[#0074ff] font-semibold mb-3 flex items-center gap-1.5"
                  >
                    (51) 99967–2121 <span className="text-[11px] text-[#0074ff]">↗</span>
                  </a>

                  <span className="font-[Plus_Jakarta_Sans] text-[10.5px] sm:text-[11px] font-bold tracking-[1.5px] text-[#11131580] uppercase mb-1.5 sm:mb-2">
                    INSTAGRAM
                  </span>
                  <a
                    href="https://instagram.com/veneregramado"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[Plus_Jakarta_Sans] text-[12.5px] sm:text-[13px] font-bold text-[#0074ff] hover:underline flex items-center gap-1"
                  >
                    @veneregramado <span className="text-[11px]">↗</span>
                  </a>
                </div>
              </div>

              {/* Action Button - Full width on mobile with 46px touch target */}
              <div className="flex justify-center w-full">
                <a
                  href="https://maps.google.com/?q=R.+Leopoldo+Rosenfeld,+678+Gramado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-3.5 min-h-[46px] bg-[#111315] hover:bg-[#22262a] text-white rounded-full font-[Plus_Jakarta_Sans] text-[12px] font-bold tracking-[0.8px] uppercase transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer text-center"
                >
                  ABRIR NO GOOGLE MAPS
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
