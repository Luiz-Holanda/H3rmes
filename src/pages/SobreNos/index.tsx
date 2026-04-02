import React from 'react';
import SobreNosHero from './SobreNosHero';
import SobreNosBento from './SobreNosBento';
import SobreNosValues from './SobreNosValues';
import SobreNosAuthor from './SobreNosAuthor';

const SobreNos: React.FC = () => {
  return (
    <main>
      <SobreNosHero />
      <SobreNosBento />
      <SobreNosValues />
      <SobreNosAuthor />
    </main>
  );
};

export default SobreNos;
