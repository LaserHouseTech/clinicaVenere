import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqData {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqData[] = [
  {
    id: '1',
    question: 'Como funciona a avaliação inicial na Vênere?',
    answer:
      'Nossa avaliação é estruturada de forma individualizada. Mapeamos suas necessidades estéticas e de saúde para indicar a integração de tratamentos mais adequada, respeitando suas metas e ritmo.',
  },
  {
    id: '2',
    question: 'Os procedimentos estéticos exigem tempo de repouso?',
    answer:
      'A grande maioria dos procedimentos modernos na Vênere tem rápida recuperação (downtime mínimo ou inexistente), permitindo o retorno quase imediato às suas atividades de rotina e passeios em Gramado.',
  },
  {
    id: '3',
    question: 'Como a Sauna de Ozônio funciona e quais são os benefícios?',
    answer:
      'A Sauna de Ozônio atua pela absorção transdérmica do ozônio medicinal com calor brando. O protocolo ativa a oxigenação celular, combate radicais livres, reduz a inflamação corporal e promove relaxamento muscular profundo.',
  },
  {
    id: '4',
    question: 'Como faço para agendar minha consulta?',
    answer:
      'O agendamento é realizado de forma privativa e direta através do nosso WhatsApp oficial ou telefone. Nossa concierge médica fornecerá todas as orientações prévias necessárias.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <div
      className="w-full"
      style={{
        background: `
          radial-gradient(1000px circle at 88% 100%, rgba(29, 78, 130, 0.95) 0%, rgba(20, 52, 86, 0.78) 32%, rgba(12, 28, 48, 0.52) 58%, transparent 80%),
          radial-gradient(750px circle at 15% 100%, rgba(14, 34, 58, 0.38) 0%, transparent 65%),
          linear-gradient(180deg, #08101a 0%, #08101a 100%)
        `,
      }}
    >
      <section className="w-full bg-[#fbfaf8] py-10 sm:py-24 border-t border-[#eeeae2] rounded-b-[36px] sm:rounded-b-[70px] relative z-20 scroll-mt-20 sm:scroll-mt-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Heading & Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col items-start w-full"
            >
              <span className="font-[Plus_Jakarta_Sans] text-[10.5px] sm:text-[11px] font-bold tracking-[2px] text-[#0074ff] uppercase mb-2.5 sm:mb-3 block">
                FAQ
              </span>

              <h2 className="font-[Cormorant_Garamond] text-[26px] sm:text-[44px] leading-[1.15] text-[#111315] mb-3 sm:mb-4">
                Perguntas Frequentes & <span className="italic text-[#0074ff]">Esclarecimentos</span>
              </h2>

              <p className="font-[Plus_Jakarta_Sans] text-[13px] sm:text-[14px] leading-[1.65] text-[#111315b2] mb-6 sm:mb-10">
                Tire suas dúvidas sobre consultas, avaliações médicas integradas e protocolos personalizados na Clínica Vênere.
              </p>

              {/* Support Card */}
              <div className="w-full max-w-[400px] rounded-[22px] sm:rounded-[24px] bg-white p-5 sm:p-7 border border-[#e8e3d8] shadow-sm">
                <h3 className="font-[Plus_Jakarta_Sans] text-[15px] sm:text-[16px] font-bold text-[#111315] mb-1.5 sm:mb-2">
                  Ainda tem dúvidas?
                </h3>
                <p className="font-[Plus_Jakarta_Sans] text-[12.5px] sm:text-[13px] leading-[1.6] text-[#11131599] mb-5 sm:mb-6">
                  Fale com nossa equipe de atendimento para um suporte personalizado e agendamento exclusivo.
                </p>
                <a
                  href="https://wa.me/5551999672121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 min-h-[46px] bg-[#111315] hover:bg-[#22262a] active:scale-[0.98] text-white rounded-full font-[Plus_Jakarta_Sans] text-[12px] font-bold tracking-[0.6px] transition-all text-center"
                >
                  Fale no WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Right Column: Accordions */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col gap-3 sm:gap-4 w-full"
            >
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-[18px] sm:rounded-[20px] transition-all duration-300 border ${
                      isOpen
                        ? 'bg-white border-[#dcd6ca] shadow-sm'
                        : 'bg-white/60 hover:bg-white border-[#e8e4db]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full px-4 sm:px-7 py-3.5 sm:py-5 min-h-[54px] flex items-center justify-between text-left cursor-pointer active:bg-black/[0.02]"
                    >
                      <span className="font-[Plus_Jakarta_Sans] text-[13.5px] sm:text-[16px] font-bold text-[#111315] pr-3 sm:pr-4">
                        {item.question}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                          isOpen ? 'bg-[#111315] text-white' : 'bg-[#f0ebe1] text-[#111315]'
                        }`}
                      >
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="text-[10px] sm:text-[11px] leading-none inline-block"
                        >
                          ▼
                        </motion.span>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-7 pb-4 sm:pb-6 pt-1 text-[#111315b2] font-[Plus_Jakarta_Sans] text-[13px] sm:text-[14px] leading-[1.65]">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
