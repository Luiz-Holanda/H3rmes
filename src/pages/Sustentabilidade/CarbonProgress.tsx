import React from 'react';

const CarbonProgress: React.FC = () => {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold font-headline mb-6">Nosso Caminho até 2030</h2>
          <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
            Não são apenas promessas. Estamos mensurando cada quilômetro rodado e cada watt consumido para atingir o Net Zero até 2030.
          </p>
          <div className="space-y-10">
            <div className="relative">
              <div className="flex justify-between mb-3 items-end">
                <span className="text-sm font-bold font-headline text-on-surface">Redução de Emissões Atual</span>
                <span className="text-3xl font-black text-primary">64%</span>
              </div>
              <div className="h-4 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '64%' }}></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-on-surface">2021</div>
                <div className="text-xs text-on-surface-variant uppercase font-bold">Início</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">HOJE</div>
                <div className="text-xs text-on-surface-variant uppercase font-bold">Acelerando</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-on-surface">2030</div>
                <div className="text-xs text-on-surface-variant uppercase font-bold">Meta Zero</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl relative z-10 border border-surface-container-high">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <div>
                <h4 className="text-xl font-bold font-headline">Status: No Caminho</h4>
                <p className="text-sm text-on-surface-variant">Última auditoria: Novembro 2023</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <p className="text-on-surface font-medium">85% da frota principal eletrificada em SP</p>
              </div>
              <div className="flex gap-4 items-center">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <p className="text-on-surface font-medium">Uso de biocombustíveis em rotas interestaduais</p>
              </div>
              <div className="flex gap-4 items-center">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <p className="text-on-surface font-medium">Compensação de carbono via reflorestamento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonProgress;
