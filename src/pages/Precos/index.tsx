import React from 'react';
import PrecosHero from './PrecosHero';
import FreightSimulator from './FreightSimulator';
import PricingCards from './PricingCards';
import WeightTable from './WeightTable';
import AdditionalServices from './AdditionalServices';
import { Link } from 'react-router-dom';

const Precos: React.FC = () => {
  return (
    <main className="pt-16 pb-20">
      <PrecosHero />
      <FreightSimulator />
      <PricingCards />
      <WeightTable />
      <AdditionalServices />
      
      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-8 text-center py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-headline">
          Pronto para acelerar seus envios?
        </h2>
        <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto">
          Junte-se a mais de 5.000 empresas que confiam na H3RMES para sua logística nacional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/cadastro"
            className="bg-primary text-on-primary px-10 py-5 rounded-lg font-bold text-lg hover:brightness-110 shadow-xl shadow-primary/20 transition-all active:scale-95 text-center"
          >
            Start shipping now
          </Link>
          <button className="bg-white border border-outline/20 text-on-surface px-10 py-5 rounded-lg font-bold text-lg hover:bg-surface-container-low transition-all">
            Falar com Consultor
          </button>
        </div>
      </section>
    </main>
  );
};

export default Precos;
