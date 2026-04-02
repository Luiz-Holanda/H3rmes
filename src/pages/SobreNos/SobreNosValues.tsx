import React from 'react';

const values = [
  {
    icon: 'bolt',
    title: 'Velocidade com Propósito',
    description: 'Cada segundo conta quando se trata do sucesso do nosso cliente.',
    color: 'primary'
  },
  {
    icon: 'code',
    title: 'Inovação Contínua',
    description: 'O código nunca para; estamos sempre evoluindo nossa tecnologia.',
    color: 'secondary'
  },
  {
    icon: 'visibility',
    title: 'Transparência Radical',
    description: 'Confiança se constrói com visibilidade total em cada etapa do processo.',
    color: 'primary'
  },
  {
    icon: 'eco',
    title: 'Compromisso Sustentável',
    description: 'Crescer respeitando o meio ambiente através de frotas limpas e inteligência logística.',
    color: 'secondary'
  }
];

const SobreNosValues: React.FC = () => {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-headline text-4xl font-extrabold mb-4">Nossos Valores</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div key={index} className="group p-8 rounded-[2rem] bg-surface-container-low hover:bg-surface-container-high transition-all duration-300">
            <div className={`w-14 h-14 ${value.color === 'primary' ? 'bg-linear-to-br from-primary to-[#e61e50]' : 'bg-secondary'} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
              <span className="material-symbols-outlined text-white text-2xl">{value.icon}</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-4">{value.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SobreNosValues;
