import React from 'react';

const PrecosHero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <span className="inline-block text-primary font-bold tracking-widest text-sm uppercase">Tarifário H3RMES 2024</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-none">
            Transparência Total em Custos
          </h1>
          <p className="text-xl text-secondary max-w-xl leading-relaxed">
            Elimine surpresas na fatura. Tarifas dinâmicas baseadas em inteligência logística para garantir a melhor rota pelo menor preço.
          </p>
        </div>
        <div className="flex-1 w-full relative">
          <div className="absolute inset-0 bg-primary/5 rounded-2xl -rotate-2"></div>
          <img
            alt="Modern logistics warehouse"
            className="relative z-10 w-full aspect-video object-cover rounded-2xl shadow-xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE3wgEKNTLFLfIB0pY7mjtpGjt56H44SE5FBIko7wZJW8s-4x8gIsodHzQZ70l_Mwi61Vr4J8Qx4pmiPv44OXwBjULj6223pMJo48lQWj4m_Y8Ud88mUqw8Sfa6daYY22cE5MdMDQzDYf1ZILhQUcHnnfnp62SKA9-nViWLrDyhUVEGZd5rdRXCn_aaoQedJ1Y_1TmtNpSwTqw5NWWacG0qss10AXccUcvUoCtL5Z-QykknjqyaicGehY8rCx3uaHtAtpEF6Yu2Gw"
          />
        </div>
      </div>
    </section>
  );
};

export default PrecosHero;
