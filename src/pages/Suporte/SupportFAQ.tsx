import React, { useState } from 'react';

const faqs = [
  {
    question: 'Como rastrear minha encomenda internacional?',
    answer: 'Para rastrear encomendas internacionais, utilize o código enviado no seu e-mail de confirmação. O sistema H3RMES integra dados de alfândega em tempo real para fornecer a localização exata e previsão de chegada em solo nacional.',
  },
  {
    question: 'Quais são os prazos para entregas interestaduais?',
    answer: 'Nossos prazos variam de acordo com o modal escolhido. O serviço Express garante entrega em até 24h para capitais, enquanto o Standard pode levar de 3 a 5 dias úteis.',
  },
  {
    question: 'Posso alterar o endereço de entrega após o despacho?',
    answer: 'Alterações de endereço podem ser solicitadas até o momento em que a carga entra em rota final. Verifique a disponibilidade no seu painel de controle.',
  },
  {
    question: 'Como solicitar reembolso por atraso logístico?',
    answer: 'Caso sua entrega ultrapasse o prazo garantido, você pode solicitar o estorno parcial ou total do frete diretamente pelo suporte ou aba de faturamento.',
  },
];

const SupportFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-4xl mx-auto px-8 mb-24">
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight">Perguntas Frequentes</h2>
        <a className="text-primary font-bold flex items-center gap-2 hover:opacity-70 transition-opacity" href="#">
          Ver todas <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline/5">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container transition-colors group"
            >
              <span className="font-headline font-bold text-lg group-hover:text-primary transition-colors">{faq.question}</span>
              <span className={`material-symbols-outlined text-secondary group-hover:text-primary transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-secondary leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportFAQ;
