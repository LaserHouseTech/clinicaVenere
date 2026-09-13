import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import draImg from '../../media/DraIMG.png';
import botoxImg from '../../media/Botox.png';

interface ProtocolData {
  id: string;
  labelLine1: string;
  labelLine2?: string;
  titleWord1: string;
  titleWord2: string;
  titleWord3?: string;
  description: string;
  doctorName: string;
  doctorRole: string;
  doctorPhoto: string;
  procedureImage: string;
  ctaLink: string;
}

const PROTOCOLS: ProtocolData[] = [
  {
    id: 'estetica',
    labelLine1: 'Estética &',
    labelLine2: 'Rejuvenescimento',
    titleWord1: 'Botox',
    titleWord2: 'Harmonização',
    titleWord3: 'Natural',
    description:
      'Suavização de linhas de expressão e rejuvenescimento facial preservando a expressividade única do seu rosto. Procedimento personalizado sob coordenação médica com foco em sutileza e elegância.',
    doctorName: 'Dra. Daniela Rossi',
    doctorRole: 'Responsável Técnica',
    doctorPhoto: draImg,
    procedureImage: botoxImg,
    ctaLink: 'https://wa.me/5551999672121?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Botox%20e%20Harmonização%20Natural.',
  },
  {
    id: 'emagrecimento',
    labelLine1: 'Emagrecimento &',
    labelLine2: 'Longevidade',
    titleWord1: 'Modulação',
    titleWord2: 'Metabólica',
    titleWord3: 'Corporal',
    description:
      'Diagnóstico metabólico avançado e reposição de micronutrientes para restauração de queima energética, tônus corporal e vitalidade sem perdas de massa magra.',
    doctorName: 'Dr. Gladistone',
    doctorRole: 'Responsável Técnico',
    doctorPhoto:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    procedureImage:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    ctaLink: 'https://wa.me/5551999672121?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Emagrecimento%20e%20Longevidade.',
  },
  {
    id: 'integrativa',
    labelLine1: 'Saúde Integrativa & Bem-',
    labelLine2: 'Estar',
    titleWord1: 'Terapia',
    titleWord2: 'Regenerativa',
    titleWord3: 'Celular',
    description:
      'Protocolos biológicos focados em mitocôndrias, estresse oxidativo e purificação tecidual para saúde de órgãos vitais e disposição diária renovada.',
    doctorName: 'Dr. Edegar Tatsch',
    doctorRole: 'Responsável Técnico',
    doctorPhoto:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
    procedureImage:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    ctaLink: 'https://wa.me/5551999672121?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Saúde%20Integrativa.',
  },
  {
    id: 'intima',
    labelLine1: 'Estética Íntima Feminina',
    titleWord1: 'Ginecologia',
    titleWord2: 'Regenerativa',
    titleWord3: 'Laser',
    description:
      'Tecnologias de ponta para bioestímulo íntimo, conforto funcional e resgate da feminilidade em ambiente seguro, discreto e acolhedor.',
    doctorName: 'Dra. Bruna Volpato',
    doctorRole: 'Responsável Técnica',
    doctorPhoto:
      'https://images.unsplash.com/photo-1594824813589-9801ff982181?auto=format&fit=crop&w=400&q=80',
    procedureImage:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    ctaLink: 'https://wa.me/5551999672121?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Estética%20Íntima%20Feminina.',
  },
  {
    id: 'ozonio',
    labelLine1: 'Sauna de Ozônio',
    titleWord1: 'Sauna de',
    titleWord2: 'Ozônio',
    titleWord3: 'Terapêutica',
    description:
      'Imersão de desintoxicação profunda com oxigenoterapia transdérmica que acelera o metabolismo, ativa o sistema imune e promove rejuvenescimento celular.',
    doctorName: 'Dr. Gladistone',
    doctorRole: 'Responsável Técnico',
    doctorPhoto:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    procedureImage:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    ctaLink: 'https://wa.me/5551999672121?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Sauna%20de%20Ozônio.',
  },
];

export const TreatmentsSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('estetica');
  const activeProtocol =
    PROTOCOLS.find((p) => p.id === activeId) || PROTOCOLS[0];

  const mobileTabsRef = React.useRef<HTMLDivElement>(null);

  const handleSelectProtocol = (id: string, index: number) => {
    setActiveId(id);
    if (mobileTabsRef.current) {
      const btn = mobileTabsRef.current.children[index] as HTMLElement;
      if (btn) {
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

  return (
    <section id="tratamentos" className="w-full bg-[#f8f9fa] py-10 sm:py-20 lg:py-24 scroll-mt-20 sm:scroll-mt-28">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Clean Rounded Card - Cloned from Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.95, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[24px] sm:rounded-[40px] p-5 sm:p-10 lg:p-14 border border-[#e5e8ec] shadow-[0_6px_30px_rgba(0,0,0,0.03)]"
        >
          
          {/* ========================================================================= */}
          {/* MOBILE ONLY: Horizontal Protocol Selector                                */}
          {/* ========================================================================= */}
          <div className="lg:hidden flex flex-col mb-6 pb-5 border-b border-[#edf0f3]">
            <span className="font-[Plus_Jakarta_Sans] text-[10.5px] font-bold tracking-[0.14em] text-[#0066f5] uppercase mb-3.5">
              TRATAMENTOS E PROTOCOLOS
            </span>
            <div
              ref={mobileTabsRef}
              className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none snap-x -mx-2 px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {PROTOCOLS.map((protocol, index) => {
                const isSelected = protocol.id === activeProtocol.id;
                return (
                  <button
                    key={protocol.id}
                    type="button"
                    onClick={() => handleSelectProtocol(protocol.id, index)}
                    className={`shrink-0 snap-center px-4 py-2.5 rounded-full font-[Plus_Jakarta_Sans] text-[12px] font-semibold transition-all duration-300 flex items-center gap-2 border min-h-[42px] cursor-pointer ${
                      isSelected
                        ? 'bg-[#0066f5] text-white border-[#0066f5] shadow-[0_4px_14px_rgba(0,102,245,0.3)]'
                        : 'bg-[#f4f6f9] text-[#556070] border-[#e2e8f0] hover:text-[#111315]'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isSelected ? 'bg-white' : 'bg-[#0066f5]'
                      }`}
                    />
                    <span>
                      {protocol.labelLine1} {protocol.labelLine2 || ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Menu / Protocols List (Desktop only) */}
            <div className="hidden lg:flex lg:col-span-3 flex-col justify-start pr-8 border-r border-[#edf0f3]">
              {/* Tag Header */}
              <span className="font-[Plus_Jakarta_Sans] text-[11px] sm:text-[12px] font-bold tracking-[0.14em] text-[#0066f5] uppercase mb-6 sm:mb-10">
                TRATAMENTOS E PROTOCOLOS
              </span>

              {/* Protocol Items List */}
              <div className="flex flex-col gap-4 sm:gap-6">
                {PROTOCOLS.map((protocol) => {
                  const isSelected = protocol.id === activeProtocol.id;
                  return (
                    <button
                      key={protocol.id}
                      type="button"
                      onClick={() => setActiveId(protocol.id)}
                      className="flex items-start gap-3.5 text-left group cursor-pointer focus:outline-none transition-transform duration-200 hover:translate-x-1"
                    >
                      {/* Blue Dot (●) */}
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#0066f5] scale-125 shadow-[0_0_8px_#0066f5]'
                            : 'bg-[#cbd5e1] group-hover:bg-[#0066f5]'
                        }`}
                      />
                      
                      {/* Text */}
                      <span
                        className={`font-[Plus_Jakarta_Sans] text-[13.5px] sm:text-[15px] leading-[1.32] transition-colors duration-200 ${
                          isSelected
                            ? 'font-bold text-[#111315]'
                            : 'font-normal text-[#556070] group-hover:text-[#111315]'
                        }`}
                      >
                        {protocol.labelLine1}
                        {protocol.labelLine2 && (
                          <>
                            <br />
                            {protocol.labelLine2}
                          </>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Middle Column: Selected Protocol Details */}
            <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between items-start py-1 pr-0 lg:pr-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProtocol.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between h-full w-full"
                >
                  <div className="flex flex-col items-start w-full">
                    {/* Title in Cormorant Garamond with blue italic & */}
                    <h3 className="font-[Cormorant_Garamond] text-[26px] sm:text-[38px] lg:text-[44px] leading-[1.14] text-[#111315] font-normal mb-3.5 sm:mb-7">
                      {activeProtocol.titleWord1}{' '}
                      <span className="text-[#0066f5] italic font-serif">&amp;</span>{' '}
                      {activeProtocol.titleWord2}
                      {activeProtocol.titleWord3 && (
                        <>
                          <br />
                          {activeProtocol.titleWord3}
                        </>
                      )}
                    </h3>

                    {/* Description Paragraph */}
                    <p className="font-[Plus_Jakarta_Sans] text-[13.5px] sm:text-[15px] leading-[1.65] text-[#556070] max-w-[420px] mb-5 sm:mb-6 lg:mb-12">
                      {activeProtocol.description}
                    </p>
                  </div>

                  {/* Responsible Doctor Badge */}
                  <div className="flex items-center gap-3 pt-2 sm:pt-4 mb-5 lg:mb-0">
                    <img
                      src={activeProtocol.doctorPhoto}
                      alt={activeProtocol.doctorName}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-[#e2e8f0] shadow-sm shrink-0"
                    />
                    <div className="flex flex-col">
                      <span className="font-[Plus_Jakarta_Sans] text-[12.5px] sm:text-[13px] font-bold text-[#0066f5] leading-tight">
                        {activeProtocol.doctorName}
                      </span>
                      <span className="font-[Plus_Jakarta_Sans] text-[10.5px] sm:text-[11px] text-[#64748b] leading-tight mt-0.5">
                        {activeProtocol.doctorRole}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Procedure Image with Overlay CTA Button */}
            <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center w-full">
              <div className="relative w-full h-[260px] sm:h-[400px] lg:h-[440px] rounded-[20px] sm:rounded-[34px] overflow-hidden bg-[#eef1f5] shadow-[0_10px_35px_rgba(0,0,0,0.06)] group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProtocol.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url("${activeProtocol.procedureImage}")`,
                    }}
                  />
                </AnimatePresence>

                {/* Subtle soft gradient overlay for bottom button readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

                {/* Overlay CTA Button at Bottom */}
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-auto z-10">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={activeProtocol.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0066f5] hover:bg-[#0055d4] text-white rounded-full font-[Plus_Jakarta_Sans] text-[11.5px] sm:text-[13px] font-bold tracking-[0.06em] uppercase shadow-[0_6px_22px_rgba(0,102,245,0.45)] hover:shadow-[0_8px_28px_rgba(0,102,245,0.55)] transition-all cursor-pointer text-center min-h-[46px]"
                  >
                    CONHECER O PROTOCOLO
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
