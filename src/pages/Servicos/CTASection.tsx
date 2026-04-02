import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-24">
      <div className="bg-surface-container-high p-16 rounded-2xl relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[300px]">rocket_launch</span>
        </div>
        <h2 className="text-5xl font-extrabold font-headline mb-6 max-w-2xl">Pronto para acelerar sua logística?</h2>
        <p className="text-xl text-secondary mb-10 max-w-xl">
          Junte-se a mais de 5.000 empresas que confiam na H3RMES para suas entregas críticas.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary font-bold">speed</span>
            <span className="font-bold">Alta Performance</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary font-bold">security</span>
            <span className="font-bold">Segurança Máxima</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary font-bold">support_agent</span>
            <span className="font-bold">Suporte 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
