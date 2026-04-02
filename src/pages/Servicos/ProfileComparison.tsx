import React from 'react';

const ProfileComparison: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold font-headline mb-4">Escolha seu Perfil</h2>
        <p className="text-secondary">Soluções otimizadas para cada necessidade de envio.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Pessoa Física */}
        <div className="p-1 border border-outline-variant rounded-2xl">
          <div className="bg-surface-container-lowest p-10 rounded-xl h-full flex flex-col">
            <h3 className="text-2xl font-extrabold font-headline mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">person</span>
              H3RMES Personal (PF)
            </h3>
            <ul className="space-y-4 flex-1">
              <li className="flex items-center gap-3 text-secondary">
                <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                Envio simplificado via App
              </li>
              <li className="flex items-center gap-3 text-secondary">
                <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                Coleta domiciliar expressa
              </li>
              <li className="flex items-center gap-3 text-secondary">
                <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                Pagamento via PIX ou Cartão
              </li>
              <li className="flex items-center gap-3 text-secondary">
                <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                Rastreio via WhatsApp
              </li>
            </ul>
            <button className="w-full mt-10 py-4 bg-surface-container text-on-surface font-bold rounded-lg hover:bg-surface-container-high transition-all scale-95 active:scale-90">
              Criar Conta PF
            </button>
          </div>
        </div>
        {/* Pessoa Jurídica */}
        <div className="p-1 bg-linear-to-br from-primary to-[#bd003c] rounded-2xl shadow-xl">
          <div className="bg-surface-container-lowest p-10 rounded-xl h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-extrabold font-headline flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">business</span>
                H3RMES Business (PJ)
              </h3>
              <span className="bg-primary text-on-primary text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-tighter">
                Mais Popular
              </span>
            </div>
            <ul className="space-y-4 flex-1">
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-tertiary text-sm">verified</span>
                <b>Preços volumétricos exclusivos</b>
              </li>
              <li className="flex items-center gap-3 text-secondary">
                <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                Dashboard de gestão BI
              </li>
              <li className="flex items-center gap-3 text-secondary">
                <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                Integração com ERP/E-commerce
              </li>
              <li className="flex items-center gap-3 text-secondary">
                <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                Faturamento mensal (Boleto/Cartão)
              </li>
              <li className="flex items-center gap-3 text-secondary">
                <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                Gerente de conta dedicado
              </li>
            </ul>
            <button className="w-full mt-10 py-4 bg-linear-to-br from-primary to-[#bd003c] text-on-primary font-bold rounded-lg shadow-lg transition-all scale-95 active:scale-90">
              Abrir Conta PJ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileComparison;
