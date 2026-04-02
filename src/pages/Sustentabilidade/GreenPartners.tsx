import React from 'react';

const GreenPartners: React.FC = () => {
  const partners = [
    'ECOCERT',
    'NET-ZERO-ALLIANCE',
    'B-CORP',
    'GREEN-LAB',
    'SMART-LOG',
  ];

  return (
    <section className="py-20 border-t border-surface-container-high bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-on-surface-variant font-bold uppercase tracking-widest text-xs mb-12">
          Certificações e Parceiros Globais
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-2xl font-black font-headline text-neutral-400 hover:text-primary transition-colors cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreenPartners;
