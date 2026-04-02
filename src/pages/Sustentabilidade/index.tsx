import React from 'react';
import SustentabilidadeHero from './SustentabilidadeHero';
import ESGPillars from './ESGPillars';
import CarbonProgress from './CarbonProgress';
import FleetShowcase from './FleetShowcase';
import GreenPartners from './GreenPartners';

const Sustentabilidade: React.FC = () => {
  return (
    <main>
      <SustentabilidadeHero />
      <ESGPillars />
      <CarbonProgress />
      <FleetShowcase />
      <GreenPartners />
      {/* Final CTA section */}
      <section className="py-24 max-w-7xl mx-auto px-8 text-center bg-on-surface text-surface rounded-[3rem] mb-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-bold font-headline mb-6 tracking-tight">Pronto para ser parte da mudança?</h2>
          <p className="text-surface-container-high text-xl mb-10 max-w-2xl mx-auto">
            Escolha uma logística que respeita o planeta. Junte-se à H3rmes Green hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-primary hover:bg-primary-container text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
              Começar Envio Sustentável
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Falar com um especialista ESG
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sustentabilidade;
