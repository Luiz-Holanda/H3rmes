import React from 'react';
import SupportHero from './SupportHero';
import SupportCategories from './SupportCategories';
import SupportFAQ from './SupportFAQ';
import SupportContact from './SupportContact';

const Suporte: React.FC = () => {
  return (
    <div className="pt-12 pb-20">
      <SupportHero />
      <SupportCategories />
      <SupportFAQ />
      <SupportContact />
    </div>
  );
};

export default Suporte;
