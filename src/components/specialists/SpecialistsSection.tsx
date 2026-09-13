import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import draImg from '../../media/DraIMG.png';

interface SpecialistData {
  id: string;
  name: string;
  role: string;
  badge: string;
  quote: string;
  bio: string;
  credentialsTitle: string;
  credentialsSub: string;
  image: string;
}

const SPECIALISTS_LIST: SpecialistData[] = [
  {
    id: 'daniela',
    name: 'Dra. Daniela Rossi',
    role: 'Procedimentos Estéticos',
    badge: 'Procedimentos Estéticos',
    quote:
      '“Promoção da saúde e da beleza da pele com objetivo de elevar a autoestima dos meus pacientes por meio do embelezamento com naturalidade e individualidade.”',
    bio: 'Médica atuante com dedicação exclusiva ao embelezamento harmonioso, protocolos de bioestimulação de colágeno e rejuvenescimento facial com máxima precisão e segurança técnica em Gramado.',
    credentialsTitle: 'MÉDICA - CORPO CLÍNICO VÊNERE',
    credentialsSub: 'Medicina Estética & Rejuvenescimento Facial',
    image: draImg,
  },
  {
    id: 'bruna',
    name: 'Dra. Bruna Volpato',
    role: 'Estética Íntima e Saúde Feminina',
    badge: 'Saúde Feminina & Estética Íntima',
    quote:
      '“O cuidado íntimo feminino une regeneração tecidual, acolhimento sem tabus e restauração da autoconfiança plena da mulher.”',
    bio: 'Médica especializada em ginecologia regenerativa e estética íntima funcional, proporcionando protocolos individualizados com segurança e privacidade absoluta.',
    credentialsTitle: 'MÉDICA - CORPO CLÍNICO VÊNERE',
    credentialsSub: 'Estética Íntima & Saúde da Mulher',
    image:
      'https://images.unsplash.com/photo-1594824813589-9801ff982181?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gladistone',
    name: 'Dr. Gladistone',
    role: 'Nutrologia e Metabolismo',
    badge: 'Nutrologia & Metabolismo',
    quote:
      '“Compreender a bioquímica de cada paciente é a chave mestra para a longevidade ativa, emagrecimento sustentável e vitalidade perene.”',
    bio: 'Médico nutrólogo focado em otimização metabólica, equilíbrio hormonal e estratégias de longevidade saudável para prevenção e alta performance.',
    credentialsTitle: 'MÉDICO - CORPO CLÍNICO VÊNERE',
    credentialsSub: 'Nutrologia Clínica & Metabolismo',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'grasiela',
    name: 'Dra. Grasiela Caliari',
    role: 'Nutrição Funcional e Emagrecimento',
    badge: 'Nutrição Funcional',
    quote:
      '“A nutrição de precisão não impõe restrições vazias, mas resgata o equilíbrio digestivo, hormonal e a relação saudável com o próprio corpo.”',
    bio: 'Nutricionista clínica com vasta experiência em modulação da microbiota, controle inflamatório e protocolos de emagrecimento com acolhimento e suporte contínuo.',
    credentialsTitle: 'NUTRICIONISTA - CORPO CLÍNICO VÊNERE',
    credentialsSub: 'Nutrição Funcional & Emagrecimento',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'luciana',
    name: 'Dra. Luciana Ruff',
    role: 'Psicologia - TCC e Emagrecimento',
    badge: 'Psicologia Comportamental',
    quote:
      '“A mente e o corpo caminham juntos. Transformar padrões de pensamento é o pilar definitivo para a mudança real do estilo de vida.”',
    bio: 'Psicóloga com ênfase na Terapia Cognitivo-Comportamental aplicada ao comportamento alimentar, autocuidado e fortalecimento da autoestima.',
    credentialsTitle: 'PSICÓLOGA - CORPO CLÍNICO VÊNERE',
    credentialsSub: 'Psicologia Clínica & TCC',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gabriela',
    name: 'Dra. Gabriela Fogassa',
    role: 'Nutricionista - Saúde da Mulher',
    badge: 'Saúde da Mulher & Nutrição',
    quote:
      '“Cada fase da vida da mulher requer nutrientes e estímulos específicos para florescer com disposição, equilíbrio hormonal e leveza.”',
    bio: 'Especialista em nutrição integrada à saúde feminina, fertilidade, climatério e desordens metabólicas específicas.',
    credentialsTitle: 'NUTRICIONISTA - CORPO CLÍNICO VÊNERE',
    credentialsSub: 'Nutrição Integrativa Feminina',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'daiana',
    name: 'Dra. Daiana Trentin',
    role: 'Nutrição Funcional e Estética',
    badge: 'Nutrição Funcional & Estética',
    quote:
      '“A beleza exterior é o reflexo direto da saúde celular interior. Nutrimos de dentro para fora para potencializar qualquer tratamento estético.”',
    bio: 'Nutricionista dedicada a protocolos dermofuncionais, estímulo de síntese de colágeno e vitalidade cutânea.',
    credentialsTitle: 'NUTRICIONISTA - CORPO CLÍNICO VÊNERE',
    credentialsSub: 'Nutrição Estética & Dermocosmética',
    image:
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'edegar',
    name: 'Dr. Edegar Tatsch',
    role: 'Acupuntura, Gerontologia e Shiatsu',
    badge: 'Medicina Integrativa & Acupuntura',
    quote:
      '“Harmonizar os meridianos e a energia vital permite recuperar a mobilidade sem dor e envelhecer com dignidade, vigor e serenidade.”',
    bio: 'Médico especialista em gerontologia clínica e acupuntura médica tradicional, pioneiro na integração de saberes milenares com a medicina preventiva.',
    credentialsTitle: 'MÉDICO - CORPO CLÍNICO VÊNERE',
    credentialsSub: 'Gerontologia, Acupuntura & Longevidade',
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
  },
];

export const SpecialistsSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('daniela');
  const activeSpecialist =
    SPECIALISTS_LIST.find((s) => s.id === activeId) || SPECIALISTS_LIST[0];

  const currentIndex = SPECIALISTS_LIST.findIndex((s) => s.id === activeSpecialist.id);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? SPECIALISTS_LIST.length - 1 : currentIndex - 1;
    setActiveId(SPECIALISTS_LIST[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = currentIndex === SPECIALISTS_LIST.length - 1 ? 0 : currentIndex + 1;
    setActiveId(SPECIALISTS_LIST[newIndex].id);
  };

  const tabsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (tabsRef.current) {
      const activeBtn = tabsRef.current.querySelector<HTMLElement>(`[data-specialist-id="${activeId}"]`);
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeId]);

  return (
    <section
      id="especialistas"
      className="relative w-full bg-[#faf9f6] pt-12 sm:pt-24 pb-14 sm:pb-28 -mt-10 rounded-t-[36px] sm:rounded-t-[70px] z-20 scroll-mt-20 sm:scroll-mt-28"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start mb-8 sm:mb-16"
        >
          <span className="font-[Plus_Jakarta_Sans] text-[10.5px] sm:text-[12px] font-bold tracking-[2.5px] text-[#318FFF] uppercase mb-2.5 sm:mb-3">
            CORPO CLÍNICO MULTIDISCIPLINAR
          </span>
          <h2 className="font-[Cormorant_Garamond] text-[28px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-1px] text-[#111315] mb-3 sm:mb-4">
            Ciência, olhar atento e cuidado<br className="hidden sm:inline" />{' '}
            a serviço da sua <span className="italic text-[#318FFF]">saúde e beleza</span>
          </h2>
          <p className="font-[Plus_Jakarta_Sans] text-[13.5px] sm:text-[16px] leading-[1.6] text-[#111315b2] max-w-[680px]">
            Conheça os especialistas dedicados a acompanhar cada etapa da sua jornada com rigor técnico e cuidado individualizado.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* MOBILE OPTIMIZED VIEW (screens below lg)                                   */}
        {/* Adheres to mobile UI/UX standards: horizontal thumb tabs + stepper card   */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:hidden w-full gap-5">
          {/* 1. Horizontal Scrollable Specialist Selector */}
          <div className="w-full">
            <div
              ref={tabsRef}
              className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none snap-x -mx-4 px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {SPECIALISTS_LIST.map((specialist) => {
                const isActive = specialist.id === activeSpecialist.id;
                return (
                  <button
                    key={specialist.id}
                    type="button"
                    data-specialist-id={specialist.id}
                    onClick={() => setActiveId(specialist.id)}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-full shrink-0 snap-start transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-white border-[#318FFF] shadow-[0_4px_14px_rgba(49,143,255,0.18)]'
                        : 'bg-white/70 border-[#e8e4dc] hover:bg-white text-[#11131599]'
                    }`}
                  >
                    <img
                      src={specialist.image}
                      alt={specialist.name}
                      referrerPolicy="no-referrer"
                      className={`w-7 h-7 rounded-full object-cover shrink-0 border ${
                        isActive ? 'border-[#318FFF]' : 'border-transparent'
                      }`}
                    />
                    <div className="flex flex-col text-left pr-1.5">
                      <span
                        className={`font-[Plus_Jakarta_Sans] text-[12px] font-bold leading-tight whitespace-nowrap ${
                          isActive ? 'text-[#111315]' : 'text-[#111315cc]'
                        }`}
                      >
                        {specialist.name}
                      </span>
                      <span className="font-[Plus_Jakarta_Sans] text-[10px] text-[#11131580] leading-tight whitespace-nowrap">
                        {specialist.badge}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Stepper & Counter Bar */}
          <div className="flex items-center justify-between px-1">
            <span className="font-[Plus_Jakarta_Sans] text-[11.5px] font-semibold text-[#11131580] tracking-wide">
              Especialista <strong className="text-[#111315]">{currentIndex + 1}</strong> de {SPECIALISTS_LIST.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Especialista anterior"
                className="w-9 h-9 rounded-full bg-white border border-[#e8e4dc] shadow-sm flex items-center justify-center text-[#111315] hover:bg-[#f0ebe1] active:scale-95 transition-all cursor-pointer"
              >
                <span className="text-[14px] leading-none">‹</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Próximo especialista"
                className="w-9 h-9 rounded-full bg-white border border-[#e8e4dc] shadow-sm flex items-center justify-center text-[#111315] hover:bg-[#f0ebe1] active:scale-95 transition-all cursor-pointer"
              >
                <span className="text-[14px] leading-none">›</span>
              </button>
            </div>
          </div>

          {/* 3. Unified Specialist Mobile Showcase Card */}
          <div className="w-full bg-white rounded-[28px] p-4 sm:p-6 border border-[#e8e4dc] shadow-[0_8px_24px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpecialist.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex flex-col"
              >
                {/* Specialist Photo with elegant frame */}
                <div className="relative w-full h-[320px] sm:h-[380px] rounded-[22px] overflow-hidden bg-white border border-[#ece8df]">
                  <div
                    className="w-full h-full bg-cover bg-center transition-all duration-500"
                    style={{
                      backgroundImage: `url("${activeSpecialist.image}")`,
                    }}
                  />
                </div>

                {/* Content Details */}
                <div className="flex flex-col items-start pt-5">
                  {/* Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#edf4ff] border border-[#318FFF] mb-3.5">
                    <span className="font-[Plus_Jakarta_Sans] text-[11px] font-semibold text-[#318FFF]">
                      {activeSpecialist.badge}
                    </span>
                  </div>

                  {/* Quote in Cormorant Garamond */}
                  <p className="font-[Cormorant_Garamond] text-[19px] italic leading-[1.4] text-[#111315] mb-3">
                    {activeSpecialist.quote}
                  </p>

                  {/* Bio */}
                  <p className="font-[Plus_Jakarta_Sans] text-[13.5px] leading-[1.6] text-[#4a5568] mb-6">
                    {activeSpecialist.bio}
                  </p>

                  {/* CTA Button */}
                  <a
                    href="https://wa.me/5551999672121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3.5 bg-[#111315] hover:bg-[#22262a] active:bg-[#000] text-white rounded-full font-[Plus_Jakarta_Sans] text-[12px] font-bold tracking-[0.08em] uppercase shadow-md transition-all text-center min-h-[46px] mb-5"
                  >
                    AGENDAR CONSULTA
                  </a>

                  {/* Doctor Credentials */}
                  <div className="flex flex-col border-t border-[#e2ddd6] pt-4 w-full">
                    <span className="font-[Cormorant_Garamond] text-[19px] font-bold text-[#111315]">
                      {activeSpecialist.name}
                    </span>
                    <span className="font-[Plus_Jakarta_Sans] text-[10.5px] font-bold tracking-[0.12em] text-[#318FFF] uppercase mt-0.5">
                      {activeSpecialist.credentialsTitle}
                    </span>
                    <span className="font-[Plus_Jakarta_Sans] text-[11.5px] text-[#11131599] mt-0.5">
                      {activeSpecialist.credentialsSub}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (lg+) - 100% UNCHANGED 3-COLUMN LAYOUT                       */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Column 1: Specialists Navigation List */}
          <div className="lg:col-span-4 flex flex-col gap-2 w-full">
            {SPECIALISTS_LIST.map((specialist) => {
              const isActive = specialist.id === activeSpecialist.id;
              return (
                <button
                  key={specialist.id}
                  type="button"
                  onClick={() => setActiveId(specialist.id)}
                  className={`flex items-center justify-between w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-[14px] text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white border border-[#318FFF] shadow-[0_4px_16px_rgba(49,143,255,0.12)]'
                      : 'bg-transparent border border-transparent hover:bg-black/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isActive ? (
                      <span className="w-[6px] h-[6px] rounded-full bg-[#318FFF] shrink-0" />
                    ) : (
                      <span className="w-[6px] h-[6px] shrink-0" />
                    )}
                    <div className="flex flex-col">
                      <span className="font-[Plus_Jakarta_Sans] text-[13.5px] sm:text-[14px] font-bold text-[#111315]">
                        {specialist.name}
                      </span>
                      <span className="font-[Plus_Jakarta_Sans] text-[11.5px] sm:text-[12px] text-[#11131599]">
                        {specialist.role}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`font-[Plus_Jakarta_Sans] text-[18px] font-semibold leading-none ${
                      isActive ? 'text-[#318FFF]' : 'text-[#11131540]'
                    }`}
                  >
                    ›
                  </span>
                </button>
              );
            })}
          </div>

          {/* Column 2: Center Specialist Photo Frame */}
          <div className="lg:col-span-4 flex justify-center w-full">
            <div className="relative w-full max-w-[340px] h-[400px] sm:h-[490px] rounded-[32px] sm:rounded-[36px] overflow-hidden bg-white p-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.08)] border border-[#e8e4dc]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpecialist.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full rounded-[26px] sm:rounded-[28px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url("${activeSpecialist.image}")`,
                  }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Column 3: Right Details & Quote Card */}
          <div className="lg:col-span-4 flex flex-col items-start pl-0 lg:pl-4 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpecialist.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start w-full"
              >
                {/* Pill badge with thin blue border and fully rounded corners */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#edf4ff] border border-[#318FFF] mb-6">
                  <span className="font-[Plus_Jakarta_Sans] text-[12px] font-semibold text-[#318FFF]">
                    {activeSpecialist.badge}
                  </span>
                </div>

                {/* Quote in Cormorant Garamond, 22px, #111315 and italic */}
                <p className="font-[Cormorant_Garamond] text-[20px] sm:text-[22px] italic leading-[1.45] text-[#111315] mb-5 sm:mb-6">
                  {activeSpecialist.quote}
                </p>

                {/* Bio in dark gray, 15px, line-height 1.6 */}
                <p className="font-[Plus_Jakarta_Sans] text-[14px] sm:text-[15px] leading-[1.6] text-[#4a5568] mb-6 sm:mb-8">
                  {activeSpecialist.bio}
                </p>

                {/* Solid black pill button */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/5551999672121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-7 sm:px-8 py-3.5 bg-[#111315] hover:bg-[#22262a] text-white rounded-full font-[Plus_Jakarta_Sans] text-[12px] font-bold tracking-[0.08em] uppercase transition-all mb-8 shadow-md text-center"
                >
                  AGENDAR CONSULTA
                </motion.a>

                {/* Doctor Signature / Credentials */}
                <div className="flex flex-col border-t border-[#e2ddd6] pt-5 w-full">
                  <span className="font-[Cormorant_Garamond] text-[20px] font-bold text-[#111315]">
                    {activeSpecialist.name}
                  </span>
                  <span className="font-[Plus_Jakarta_Sans] text-[11px] font-bold tracking-[0.12em] text-[#318FFF] uppercase mt-1">
                    {activeSpecialist.credentialsTitle}
                  </span>
                  <span className="font-[Plus_Jakarta_Sans] text-[12px] text-[#11131599] mt-0.5">
                    {activeSpecialist.credentialsSub}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
