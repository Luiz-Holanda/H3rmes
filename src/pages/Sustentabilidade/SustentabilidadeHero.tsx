import React from 'react';

const SustentabilidadeHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[870px] flex items-center overflow-hidden bg-surface-container-low">
      <div className="absolute inset-0 z-0">
        <img
          alt="Sustainable Delivery"
          className="w-full h-full object-cover opacity-90"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuABJEuwZBURU8mxSiuClNvg6fDF2aPYWH_WdaVVEMknky182WSV-xBNR8S5nzZ8L2ZZ8raYclXr83DDpiU9S6HAwvOQ5hJwzdlPuamRaaDhPDIiBf5IxEB7kpZsDs51Mx043Pgq35Q9ouXEV2j0BuaBCigaTNjF-0exXVNhC6L7Uyt_YOwuoP18r4_lUhsA0aBYd6s3ukoLhGVd0AMDeShYQcUz4rY5B0QIfhNzIj7JI-xB9PQEzoogYgnaelgWwJcEy03Vk0ePDFE"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent opacity-40"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest font-headline">
            H3rmes Green Initiative
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-headline text-on-surface leading-[1.1] mb-8">
            Logística Sustentável: <span className="text-primary">Movendo o Futuro</span> hoje.
          </h1>
          <p className="text-lg text-on-surface-variant font-medium mb-10 leading-relaxed max-w-lg">
            Estamos redefinindo o transporte de última milha com tecnologia limpa e responsabilidade ambiental. Porque entregar rápido é bom, mas entregar o futuro é nossa missão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
              Faça parte da mudança
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg border-2 border-primary/20 text-primary hover:bg-primary/5 transition-all">
              <span className="material-symbols-outlined">play_circle</span>
              Ver nossa Missão
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustentabilidadeHero;
