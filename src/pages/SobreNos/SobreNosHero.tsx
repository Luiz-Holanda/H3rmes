import React from 'react';

const SobreNosHero: React.FC = () => {
  return (
    <section className="relative py-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Nossa Essência</span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold leading-tight mb-8 text-on-surface">
            Acelerando o <span className="text-primary">Futuro</span> da Logística
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
            Nossa missão é acelerar o futuro da logística brasileira através da tecnologia, conectando pessoas e negócios com velocidade e precisão absoluta.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              className="w-full h-[500px] object-cover" 
              alt="modern logistics center" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZkWZtUYwDLPZOooPx2IbST6Whqj0Pmtb5_3te9sO7lbEEdyCggbbgEtOzh_O0T5kA0Uq8iXyAjaF8qfsmSR0D2bEjrXqcMdjZcnow3nwxgHFeHqHKADNZtLRLaZaMnNSHXIY0CQO1Uu2_gXfNm8tgF8Ng5LhA_GJqTk1VUE6rqGhnfPNiACzJAp4V3T0bPJdhG7nUSaCF7JD_HyEfY5QfRizFxDL5xceYEaE3mSbi1YspNk7t4m2I14mhQjS0r38etC6m4VzckmE" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosHero;
