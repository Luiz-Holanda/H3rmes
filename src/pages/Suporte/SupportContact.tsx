import React from 'react';

const SupportContact: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8">
      <div className="bg-primary rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Visual Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>

        <div className="max-w-lg relative z-10 text-center md:text-left">
          <h2 className="font-headline text-4xl font-extrabold text-white mb-6">Ainda precisa de ajuda?</h2>
          <p className="text-white/80 text-xl leading-relaxed">Nossa equipe de suporte técnico e comercial está disponível 24/7 para garantir que sua carga nunca pare.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <button className="flex items-center gap-3 bg-white text-primary px-8 py-5 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/20">
            <span className="material-symbols-outlined">forum</span>
            Chat ao Vivo
          </button>
          <button className="flex items-center gap-3 bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-5 rounded-2xl font-bold hover:bg-white/30 hover:scale-105 active:scale-95 transition-all">
            <span className="material-symbols-outlined">mail</span>
            E-mail
          </button>
          <button className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#25D366]/20">
            <span className="material-symbols-outlined">chat</span>
            WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportContact;
