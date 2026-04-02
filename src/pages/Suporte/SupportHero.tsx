import React from 'react';

const SupportHero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 text-center">
      <span className="text-primary font-headline font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Central de Ajuda</span>
      <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-8">
        Como podemos ajudar?
      </h1>
      <div className="max-w-2xl mx-auto relative group">
        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-secondary">
          <span className="material-symbols-outlined">search</span>
        </div>
        <input
          className="w-full pl-16 pr-8 py-6 rounded-2xl bg-surface-container-high border-none focus:ring-4 focus:ring-primary/10 transition-all text-lg font-body placeholder:text-secondary/50"
          placeholder="Procure por rastreio, prazos, preços..."
          type="text"
        />
      </div>
    </section>
  );
};

export default SupportHero;
