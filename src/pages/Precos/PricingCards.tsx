import React from 'react';

const PricingCards: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Standard Card */}
        <div className="bg-surface-container border border-outline/10 p-10 rounded-2xl flex flex-col justify-between group hover:bg-surface-container-low transition-colors duration-300">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-surface-container-highest rounded-lg">
                <span className="material-symbols-outlined text-on-surface">pace</span>
              </div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest px-3 py-1 bg-surface-container-highest rounded-full">
                Econômico
              </span>
            </div>
            <h3 className="text-3xl font-extrabold mb-4 font-headline">H3RMES Standard</h3>
            <p className="text-secondary mb-8 leading-relaxed">
              Ideal para entregas comerciais recorrentes com prazo estendido e custo otimizado.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span className="text-on-surface">Entrega em 3 a 5 dias úteis</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span className="text-on-surface">Rastreamento ponto-a-ponto</span>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-outline/10">
            <span className="text-secondary text-sm">A partir de</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold">R$</span>
              <span className="text-5xl font-extrabold tracking-tighter">14,90</span>
            </div>
          </div>
        </div>
        {/* Express Card */}
        <div className="bg-on-background p-10 rounded-2xl flex flex-col justify-between text-on-primary-container relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-primary rounded-lg">
                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                  bolt
                </span>
              </div>
              <span className="text-xs font-bold text-primary-container uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full backdrop-blur-md">
                Prioritário
              </span>
            </div>
            <h3 className="text-3xl font-extrabold mb-4 text-white font-headline">H3RMES Express</h3>
            <p className="text-white/70 mb-8 leading-relaxed">
              Velocidade máxima para necessidades críticas. Prioridade total em nossa malha aérea e terrestre.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span className="text-white">Entrega em até 24 horas</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span className="text-white">Seguro total incluso</span>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10">
            <span className="text-white/60 text-sm">A partir de</span>
            <div className="flex items-baseline gap-1 text-white">
              <span className="text-xl font-bold">R$</span>
              <span className="text-5xl font-extrabold tracking-tighter">32,50</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
