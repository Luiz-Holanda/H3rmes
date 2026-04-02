import React from 'react';

const ServicosHero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <span className="text-primary font-bold tracking-widest text-sm uppercase font-label">
          Logística de Alta Performance
        </span>
        <h1 className="text-6xl font-extrabold font-headline leading-[1.1] tracking-tight">
          Nossos <span className="text-primary">Serviços</span> Para Sua Velocidade.
        </h1>
        <p className="text-lg text-secondary leading-relaxed max-w-lg">
          Soluções modulares para e-commerce e empresas que não podem parar. De integração API ao transporte aéreo prioritário.
        </p>
        <div className="flex gap-4">
          <button className="bg-linear-to-br from-primary to-[#bd003c] text-on-primary px-8 py-4 rounded-lg font-bold shadow-lg hover:opacity-90 transition-all scale-95 active:scale-90">
            Começar Agora
          </button>
          <button className="bg-surface-container text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-surface-container-high transition-all scale-95 active:scale-90">
            Falar com Consultor
          </button>
        </div>
      </div>
      <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        <img
          alt="Logistics warehouse"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWCDZ-dyehV1SjnLUQYXylDLjo8ew0JehJUxCnKdzxebK-yZ4FeQFYrxhcFhNr0ZX7Q-WExyCEd4V5Icd-FcKx5YRqbnG37amxe9i5SKHPR7dP935OmeMSEkp-NDV9K7qdqdyJqIOsrW_ylBe-zuWl3A1mCN772ecIDPpnyQkqJAoViimDr4PlWd5uWQKxwQQKfL-7gkSYQmqYSGdGuqq4y0XFXZIa4QJcgp9FRnBXO2fJ_Drrydcr05v3dqMPkQLoMuc5OQb-n4Q"
        />
      </div>
    </section>
  );
};

export default ServicosHero;
