import React from 'react';
import ServicosHero from './ServicosHero';
import ServicesBento from './ServicesBento';
import ProfileComparison from './ProfileComparison';
import CTASection from './CTASection';

const Servicos: React.FC = () => {
  return (
    <main>
      <ServicosHero />
      <ServicesBento />
      <ProfileComparison />
      <CTASection />
    </main>
  );
};

export default Servicos;
