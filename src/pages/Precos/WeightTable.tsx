import React from 'react';

const weightFaixas = [
  {
    type: 'Leve',
    weight: 'Até 1kg',
    description: 'Ideal para documentos e eletrônicos pequenos.',
    price: 'R$ 14,90',
    unit: '/unid',
  },
  {
    type: 'Médio',
    weight: 'Até 5kg',
    description: 'Perfeito para caixas de sapatos ou vestuário.',
    price: 'R$ 28,40',
    unit: '/unid',
  },
  {
    type: 'Pesado',
    weight: '10kg +',
    description: 'Logística dedicada para volumes robustos.',
    price: 'R$ 45,00',
    unit: '+ R$ 2,50/kg',
  },
];

const WeightTable: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-20">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight font-headline">Tabela por Faixa de Peso</h2>
        <p className="text-secondary">Valores base para capitais e regiões metropolitanas.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {weightFaixas.map((faixa) => (
          <div
            key={faixa.type}
            className="bg-surface-container-low p-8 rounded-2xl flex flex-col justify-between h-64 hover:bg-surface-container transition-colors border border-outline/5"
          >
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">{faixa.type}</span>
              <h4 className="text-2xl font-extrabold mt-2 font-headline">{faixa.weight}</h4>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-secondary">{faixa.description}</p>
              <p className="text-2xl font-bold text-on-surface">
                {faixa.price} <span className="text-sm font-normal text-secondary">{faixa.unit}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeightTable;
