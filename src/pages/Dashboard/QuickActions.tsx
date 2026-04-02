import React from 'react';

const QuickActions: React.FC = () => {
  return (
    <section className="lg:col-span-4 flex flex-col gap-6">
      <div className="bg-primary p-8 rounded-lg text-white relative overflow-hidden group transition-all duration-300 hover:shadow-lg">
        <div className="relative z-10">
          <h2 className="text-2xl font-headline font-bold mb-4 leading-tight">Agendar Coleta Expressa</h2>
          <p className="text-white/80 text-sm mb-6 font-medium">Nós buscamos sua encomenda em até 2 horas na sua residência ou trabalho.</p>
          <button className="bg-white text-primary px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
            Solicitar Agora
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 transform group-hover:scale-110 transition-transform duration-500">
          <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>package_2</span>
        </div>
      </div>
      {/* Account Settings Small Card */}
      <div className="bg-surface-container-low p-6 rounded-lg border border-transparent hover:border-surface-variant transition-all">
        <h3 className="text-on-surface font-headline font-bold mb-4">Minha Conta</h3>
        <div className="space-y-3">
          <a className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-sm text-on-surface-variant font-semibold" href="#">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">person</span>
              Dados Pessoais
            </div>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
          </a>
          <a className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-sm text-on-surface-variant font-semibold" href="#">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              Endereços Salvos
            </div>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
          </a>
          <a className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-sm text-on-surface-variant font-semibold" href="#">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">credit_card</span>
              Pagamentos
            </div>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
