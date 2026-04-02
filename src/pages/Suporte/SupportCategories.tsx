import React from 'react';

const categories = [
  {
    icon: 'package_2',
    title: 'Tracking',
    description: 'Acompanhe seu pedido em tempo real com precisão cinética.',
  },
  {
    icon: 'local_shipping',
    title: 'Shipping',
    description: 'Entenda nossas rotas, modais e prazos de entrega expressa.',
  },
  {
    icon: 'manage_accounts',
    title: 'Account',
    description: 'Gerencie seu perfil, endereços e histórico de faturamento.',
  },
  {
    icon: 'corporate_fare',
    title: 'Business',
    description: 'Soluções integradas de logística B2B para sua empresa.',
  },
];

const SupportCategories: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="group p-8 rounded-2xl bg-surface-container-low hover:bg-primary transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-primary/20 scale-100 hover:scale-[1.02] active:scale-95 transition-transform"
          >
            <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center mb-6 group-hover:bg-white/20">
              <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">{cat.icon}</span>
            </div>
            <h3 className="font-headline font-bold text-xl mb-2 group-hover:text-white">{cat.title}</h3>
            <p className="text-secondary group-hover:text-white/80 text-sm leading-relaxed">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportCategories;
