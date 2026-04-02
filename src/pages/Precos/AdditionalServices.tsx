import React from 'react';

const additionalServices = [
  {
    icon: 'shield',
    title: 'Seguro Ad-Valorem',
    description: '1% sobre o valor da nota fiscal.',
    color: 'tertiary',
  },
  {
    icon: 'flaky',
    title: 'Manuseio Especial',
    description: 'Taxa fixa de R$ 12,00 por volume.',
    color: 'primary',
  },
  {
    icon: 'event_available',
    title: 'Entrega Agendada',
    description: 'Taxa adicional de R$ 25,00.',
    color: 'secondary',
  },
  {
    icon: 'history',
    title: 'Logística Reversa',
    description: 'Desconto de 15% no frete base.',
    color: 'tertiary',
  },
];

const AdditionalServices: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-20">
      <div className="bg-surface-container p-10 md:p-16 rounded-2xl flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl font-extrabold mb-4 font-headline">Serviços Adicionais</h2>
          <p className="text-secondary leading-relaxed">
            Personalize sua entrega com camadas extras de proteção e conveniência.
          </p>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {additionalServices.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
              <div className={`p-2 bg-${service.color}/10 rounded-lg`}>
                <span className={`material-symbols-outlined text-${service.color}`}>{service.icon}</span>
              </div>
              <div>
                <h5 className="font-bold text-on-surface">{service.title}</h5>
                <p className="text-xs text-secondary mt-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
