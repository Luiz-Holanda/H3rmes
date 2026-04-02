import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-surface pt-16 pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent rounded-bl-[4rem]"></div>
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-surface-container-high text-primary font-bold text-xs uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">bolt</span>
            Logística de Alta Performance
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold font-headline leading-[1.1] text-on-surface tracking-tight">
            Sua encomenda na <span className="text-primary italic">velocidade</span> da luz.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
            Entregas inteligentes, rastreamento em tempo real e a confiança que sua empresa precisa para crescer sem limites.
          </p>
          {/* Tracking Search Bar */}
          <div className="bg-surface-container-lowest p-2 rounded-xl shadow-2xl shadow-primary/10 flex items-center max-w-xl group focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <div className="pl-6 text-on-surface-variant flex items-center">
              <span className="material-symbols-outlined">package_2</span>
            </div>
            <input
              className="w-full px-4 py-4 bg-transparent border-none focus:ring-0 font-medium text-on-surface placeholder:text-neutral-400"
              placeholder="Código de Rastreio (ex: HM123456789)"
              type="text"
            />
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-container transition-all flex items-center gap-2">
              Rastrear <span className="hidden sm:inline">Encomenda</span>
            </button>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              className="w-full h-[500px] object-cover"
              alt="Modern logistics warehouse"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_NhiJAI5MdB81yHHxJvH7z30fvsB_rcn3TZIoYuoHvIekWoWJ6oOIoRFNmD-xnGSIifTbwxhNpXylfjPUl9JnAtH4TEmTIixSQKXfqmxEW-tgxtanjic7cI9URS00vIinhT7gVKNHGNbjyi_N50tKhUUezjBU1ZNixDX53VnOylouTTMDU0f1oEi4VA_Mtwl-Bj4uU7aVaOmFO65ZwU_BhFaP0Ks4MjX7JYd5qDcYav3KBzLglGcUYEkEF5aaOkBGupKh9B7eT1I"
            />
          </div>
          {/* Floating Stats Card */}
          <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-2xl shadow-xl z-20 border-l-4 border-primary">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">99.8% Eficiência</p>
                <p className="text-xs text-on-surface-variant">Entregas no prazo garantidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
