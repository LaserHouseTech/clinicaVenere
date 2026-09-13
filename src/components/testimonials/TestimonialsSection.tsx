import React, { useState } from 'react';
import { motion } from 'motion/react';

interface TestimonialItem {
  id: string;
  name: string;
  avatarUrl: string;
  timeAgo: string;
  source: string;
  rating: string;
  text: string;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Marcela Oliveira',
    avatarUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjVC5DXqN_kOfAduLb5mgEuNkbWm1XZ-XLWNNxSXzwVqFFPmPu7J=w36-h36-p-rp-mo-br100',
    timeAgo: '7 meses atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'Parabenizo o trabalho executado com excelência do Dr Gabriel e a Dra Daniela. Atendimento impecável, trabalho feito com muito carinho e dedicação. Obrigada pela extração sem dor, sem traumas, me proporcionando uma ótima recuperação no pós operatório. (Você que está precisando de um tratamento excelente, os indico 100%).',
  },
  {
    id: '2',
    name: 'Ana carolina Brusius Facchin',
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocJfwffQ6rC6NfLDXPsQjVvOqKciXsatJGQXdHBz9EJTOCGDdQ=w36-h36-p-rp-mo-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'Frequento a Clínica Venere e só tenho elogios! O atendimento é sempre atencioso, organizado e humanizado.',
  },
  {
    id: '3',
    name: 'Bettina Barreto',
    avatarUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjVKvW_fM96VfLSNM3281eMoDlnRvl5cZOevnFdN8-TNgO1RYLrE=w36-h36-p-rp-mo-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'A ginecologista Dra Bruna é uma excelente profissional. Fui muito bem atendida, com muita paciência e cuidado para me explicar todos os detalhes e me ajudar a escolher o melhor método anticoncepcional.',
  },
  {
    id: '4',
    name: 'Cristina Schimitt Concatto',
    avatarUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjUTfPSAus00DunRXE5EoDQpIZZC9U1skAxkGG71lBklbkhVXI6Nvw=w36-h36-p-rp-mo-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'A clínica só tem profissionais excelentes, atenciosos e capacitados. Consulto com a nutricionista Grasi e já consultei com a dermato Daniele. Consultas diferenciadas, indico. Além de adorar o ambiente e o cafezinho 😁♥️',
  },
  {
    id: '5',
    name: 'Jaqueline Rossi',
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocKW9N-wQnVCC3DEOp7iUMwC90X_mTgdVpKJ7Z7zsLlS_e7kpw=w36-h36-p-rp-mo-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'Melhor depilação a laser da Serra gaúcha, já estou na minha oitava sessão e quase não tenho mais pelos. Também faço botox e amoooo!! Local perfeito, com ótima localização s super bom de estacionar, o que sempre é um grande problema em Gramado.',
  },
  {
    id: '6',
    name: 'Tatiane Gomes da Costa Rossi',
    avatarUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjWoGwcaDUC_jL2998epp_4dNZUqxEibhVsrlt3mq8EnFInhO8Hy=w36-h36-p-rp-mo-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'A clínica é linda! A localização é maravilhosa! O ambiente é super acolhedor e o atendimento é impecável. A dermatologista, Dra Daniele, é maravilhosa, muito competente, atenciosa e assertiva nos tratamentos e recomendações. Super recomendo!',
  },
  {
    id: '7',
    name: 'Clenice Rasia Lucas',
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocJX4KRa8c3_JJF-qzMhwyCrPDiQ7RsI_W-T-SOb2GPQ9w0DFA=w36-h36-p-rp-mo-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'A clínica já é linda, as pessoas que atendem lá são ainda mais! Ótimo atendimento, estão de parabéns 😉',
  },
  {
    id: '8',
    name: 'Yale Jerônimo',
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocIL7qrRigRQtFNc0SC9EUW_oCyFP8vZ30YR3YEfg9Gnh2BLeg=w36-h36-p-rp-mo-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'Ótima localização, sempre com estacionamento disponível. Clínica acolhedora, bom atendimento e com profissionais de diversos nichos. O zelo do lugar é reflexo da dra Dani e da dra Grasie, sempre excelentes no que fazem! Sou fã!',
  },
  {
    id: '9',
    name: 'Tais Lamb',
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocLEOYW0jUMSsHoZsQf2pA5SJxqMLAvOw3ymQIlC0Lr1kjUaWw=w36-h36-p-rp-mo-ba12-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'Clínica linda e atendimento personalizado! Melhor nutri de todo o Rio Grande! Localização linda perto do Lago Joaquina Rita Bier, acompanhamento com dietas super fáceis de encaixar no nosso dia a dia! Nota mil ⭐️⭐️⭐️⭐️⭐️',
  },
  {
    id: '10',
    name: 'Katia Regina Machado Barreto',
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocIiHeREOs86RsbgKrRLBoJTgZN3FwJq0QFgiz_WHFqWJxRInA=w36-h36-p-rp-mo-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'A ginecologista dra Bruna tem acompanhado meus exames de rotina há anos. Recomendo o atendimento!',
  },
  {
    id: '11',
    name: 'Denis Schell',
    avatarUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjUrQLeLHue-OEpqpQXfwkopjfuHNaEsdOYyNovEhMxXHqsmCTgj=w36-h36-p-rp-mo-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'Sensacional...depois de mais de 4 anos lutando contra o corpo e a balança, encontrei a nutricionista Grasi Calhiari e a clínica Vênere que salvaram a minha vida!!',
  },
  {
    id: '12',
    name: 'Duda Ecker',
    avatarUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjXdWZqvLSvaXK0YncAotukQNOQUA6k8H-9SYAHCX74hz3OCgoxP=w36-h36-p-rp-mo-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'Clínica completa e maravilhosa!!! Atendimento nota 1000, profissionais incríveis!!! Resultados incríveis junto aos procedimentos e atendimentos dos profissionais oferecidos pela clínica 🫶🏻🫶🏻',
  },
  {
    id: '13',
    name: 'Alberto Ecker',
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocI9fR7rXaTF6FP6VS3Pc25Zp1CwNVS19V984T5Ov7kxY7826w=w36-h36-p-rp-mo-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'Clínica maravilhosa!!!! Procedimentos incríveis e profissionais competentíssimos. Parabéns, melhor de Gramado com certeza',
  },
  {
    id: '14',
    name: 'Daniela Lima Leal',
    avatarUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjWKsHU7JQZOvJeAERIn0P9qBaoaiC0ltVFBpG1xf4BfUP4VTBjQAA=w36-h36-p-rp-mo-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'Falar da Vênere é falar de saúde, cuidado, afeto e muito profissionalismo. Lugar que reúne um time de super profissionais, que te ajudam na busca da tua melhor versão!',
  },
  {
    id: '15',
    name: 'Mariana Ribas',
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocJqSr4IsHzrMIqG2PDMrZzKSxOkZA8sqddP7-D_fqZvbDEVrQ=w36-h36-p-rp-mo-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'Clínica completa com excelentes profissionais, e o lugar é fantástico.',
  },
  {
    id: '16',
    name: 'Dudu Bordin',
    avatarUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjVAwnpSy9sKQyNnY3M0l1yDO8QhUzF3UVDB-9SW_Z-rLMOrimkrMQ=w36-h36-p-rp-mo-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'Local fantástico, com profissionais altamente qualificados e alto astral! Super recomendo!!!',
  },
  {
    id: '17',
    name: 'Leonardo Rossi',
    avatarUrl:
      'https://lh3.googleusercontent.com/a-/ALV-UjVLybHGDdgsjJagWl3WBjYynk3X_LsEj4IZsLpg6lXZJHAT6JZv0A=w36-h36-p-rp-mo-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'Lugar incrível! Dra. Daniele tem mãos de fada!',
  },
  {
    id: '18',
    name: 'Alex Cese',
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocKNLzMSNOoJvVdp9lzTCc8WSLojkaxW185P29l13FQt5YdpdQ=w36-h36-p-rp-mo-ba12-br100',
    timeAgo: 'um ano atrás',
    source: 'Avaliação no Google',
    rating: '5.0',
    text: 'Excelentes profissionais. Atendimento incrível.',
  },
];

export const TestimonialsSection: React.FC = () => {
  // Desktop pagination state
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage = 3;
  const totalItems = TESTIMONIALS_DATA.length;

  // Mobile carousel state
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number>(0);
  const mobileScrollRef = React.useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage < 0 ? totalItems - itemsPerPage : prev - itemsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= totalItems ? 0 : prev + itemsPerPage));
  };

  const visibleItems = [
    TESTIMONIALS_DATA[currentIndex % totalItems],
    TESTIMONIALS_DATA[(currentIndex + 1) % totalItems],
    TESTIMONIALS_DATA[(currentIndex + 2) % totalItems],
  ];

  const currentPage = Math.floor(currentIndex / itemsPerPage) + 1;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getInitials = (name: string) => {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Handle mobile scroll to update active indicator
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.85; // approximate width of card + gap
    const index = Math.round(scrollLeft / cardWidth);
    setMobileActiveIndex(Math.min(Math.max(index, 0), totalItems - 1));
  };

  const scrollToMobileIndex = (index: number) => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const cards = container.children;
    const targetCard = cards[index] as HTMLElement;
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setMobileActiveIndex(index);
    }
  };

  const handleMobilePrev = () => {
    const prev = mobileActiveIndex > 0 ? mobileActiveIndex - 1 : totalItems - 1;
    scrollToMobileIndex(prev);
  };

  const handleMobileNext = () => {
    const next = mobileActiveIndex < totalItems - 1 ? mobileActiveIndex + 1 : 0;
    scrollToMobileIndex(next);
  };

  return (
    <section
      id="depoimentos"
      className="w-full bg-[#111e2e] pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 relative overflow-hidden scroll-mt-20 sm:scroll-mt-28"
    >
      {/* Anchor for reviews navigation */}
      <div id="reviews" className="sr-only" />

      {/* Subtle radial glow */}
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#0074ff]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        {/* Header with Google Reviews Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <span className="font-[Plus_Jakarta_Sans] text-[10.5px] sm:text-[11px] font-bold tracking-[2px] text-[#0074ff] uppercase mb-2.5 sm:mb-3">
              PROVA SOCIAL & AVALIAÇÕES REAIS
            </span>
            <h2 className="font-[Cormorant_Garamond] text-[26px] sm:text-[44px] lg:text-[52px] leading-[1.1] text-white uppercase max-w-[720px] mb-3 sm:mb-4">
              Excelência comprovada por quem viveu a{' '}
              <span className="italic text-[#0074ff]">experiência Vênere</span>
            </h2>
            <p className="font-[Plus_Jakarta_Sans] text-[13.5px] sm:text-[15px] leading-[1.6] text-[#ffffffa6] max-w-[620px]">
              Histórias reais de transformação, segurança clínica e acolhimento compartilhado por nossos pacientes no Google.
            </p>
          </motion.div>

          {/* Google Reviews Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 bg-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-[16px] shadow-lg shrink-0 self-start lg:self-end"
          >
            {/* Google Colorful G logo */}
            <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.36 7.35 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.97 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-[#f59e0b] text-[13px] sm:text-[14px]">★★★★★</span>
                <span className="font-[Plus_Jakarta_Sans] text-[13px] font-bold text-[#111315]">
                  5.0
                </span>
              </div>
              <span className="font-[Plus_Jakarta_Sans] text-[9.5px] sm:text-[10px] font-bold tracking-[1px] text-[#11131580] uppercase">
                18+ AVALIAÇÕES GOOGLE
              </span>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE OPTIMIZED CAROUSEL (screens below md)                              */}
        {/* UI/UX: Smooth horizontal snap cards with peek + navigation controls       */}
        {/* ========================================================================= */}
        <div className="md:hidden flex flex-col mb-8">
          {/* Mobile Swiper Track with subtle peek of next card */}
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory pb-3 pt-1 -mx-4 px-4 scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                className="w-[86vw] max-w-[340px] shrink-0 snap-center bg-white rounded-[22px] p-5 flex flex-col justify-between shadow-lg border border-[#e2e8f0]"
              >
                <div>
                  {/* Card Header: Quote icon & Stars */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#edf4ff] flex items-center justify-center">
                      <span className="font-[Cormorant_Garamond] text-[20px] font-bold text-[#0074ff] leading-none">
                        “
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#f59e0b] text-[12px]">★★★★★</span>
                      <span className="font-[Plus_Jakarta_Sans] text-[10.5px] text-[#718096]">
                        {item.timeAgo}
                      </span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="font-[Plus_Jakarta_Sans] text-[13px] leading-[1.65] text-[#2d3748] mb-4 min-h-[96px]">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-3.5 border-t border-[#edf0f3]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-[#e2e8f0] shrink-0 flex items-center justify-center border border-[#dce5f0]">
                      <img
                        src={item.avatarUrl}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          if (target.parentElement) {
                            target.parentElement.innerHTML = `<span class="font-[Plus_Jakarta_Sans] text-[11px] font-bold text-[#111315]">${getInitials(
                              item.name
                            )}</span>`;
                          }
                        }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-[Plus_Jakarta_Sans] text-[12.5px] font-bold text-[#111315] leading-snug">
                        {item.name}
                      </span>
                      <span className="font-[Plus_Jakarta_Sans] text-[10px] text-[#718096] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
                        {item.source}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#f4f7fb] border border-[#dce5f0] shrink-0">
                    <span className="text-[#0074ff] text-[10px]">★</span>
                    <span className="font-[Plus_Jakarta_Sans] text-[10.5px] font-bold text-[#111315]">
                      {item.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Stepper & Control Bar */}
          <div className="flex items-center justify-between pt-4 px-1">
            {/* Counter */}
            <span className="font-[Plus_Jakarta_Sans] text-[11.5px] font-semibold text-white/70">
              Avaliação <strong className="text-white">{mobileActiveIndex + 1}</strong> de {totalItems}
            </span>

            {/* Prev / Next touch buttons with 44px minimum touch targets */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleMobilePrev}
                aria-label="Avaliação anterior"
                className="w-11 h-11 rounded-full border border-white/30 bg-white/5 text-white flex items-center justify-center hover:bg-white/15 active:scale-95 transition-all cursor-pointer text-lg font-light"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={handleMobileNext}
                aria-label="Próxima avaliação"
                className="w-11 h-11 rounded-full border border-white/30 bg-white/5 text-white flex items-center justify-center hover:bg-white/15 active:scale-95 transition-all cursor-pointer text-lg font-light"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (md+) - 3-COLUMN GRID WITH PAGINATION                         */}
        {/* ========================================================================= */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Header inside card: Quote mark & Stars + Time */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-full bg-[#edf4ff] flex items-center justify-center">
                    <span className="font-[Cormorant_Garamond] text-[22px] font-bold text-[#0074ff] leading-none">
                      “
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#f59e0b] text-[13px]">★★★★★</span>
                    <span className="font-[Plus_Jakarta_Sans] text-[11px] text-[#718096]">
                      {item.timeAgo}
                    </span>
                  </div>
                </div>

                <p className="font-[Plus_Jakarta_Sans] text-[13px] sm:text-[14px] leading-[1.65] text-[#2d3748] mb-6 sm:min-h-[100px]">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-5 border-t border-[#edf0f3]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-[#e2e8f0] shrink-0 flex items-center justify-center border border-[#dce5f0]">
                    <img
                      src={item.avatarUrl}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.innerHTML = `<span class="font-[Plus_Jakarta_Sans] text-[11px] font-bold text-[#111315]">${getInitials(
                            item.name
                          )}</span>`;
                        }
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-[Plus_Jakarta_Sans] text-[13px] font-bold text-[#111315] leading-snug">
                      {item.name}
                    </span>
                    <span className="font-[Plus_Jakarta_Sans] text-[11px] text-[#718096] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
                      {item.source}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#f4f7fb] border border-[#dce5f0]">
                  <span className="text-[#0074ff] text-[11px]">★</span>
                  <span className="font-[Plus_Jakarta_Sans] text-[11px] font-bold text-[#111315]">
                    {item.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation & See all reviews */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Avaliações anteriores"
                className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all cursor-pointer text-lg font-light"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Próximas avaliações"
                className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all cursor-pointer text-lg font-light"
              >
                ›
              </button>
            </div>

            <span className="font-[Plus_Jakarta_Sans] text-[12px] text-white/60">
              Página {currentPage} de {totalPages} ({totalItems} avaliações)
            </span>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Clinica+Venere+Gramado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto text-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 font-[Plus_Jakarta_Sans] text-[12px] font-semibold tracking-[0.5px] uppercase transition-colors min-h-[46px]"
          >
            VEJA TODAS AS AVALIAÇÕES NO GOOGLE →
          </a>
        </div>
      </div>
    </section>
  );
};
