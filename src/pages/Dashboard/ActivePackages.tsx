import React from 'react';

const ActivePackages: React.FC = () => {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-lg shadow-[0px_20px_40px_rgba(28,27,27,0.04)] border border-surface-container">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-headline font-bold text-on-surface">Encomendas Ativas</h2>
        <button className="text-primary font-bold text-sm hover:underline hover:opacity-80 transition-all">Ver todas</button>
      </div>
      <div className="space-y-6">
        {/* Tracking Item 1 (Active) */}
        <div className="relative pl-6 border-l-4 border-primary bg-surface p-6 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Em Trânsito</span>
                <span className="text-xs text-on-surface-variant font-semibold">#HRM-99283-BR</span>
              </div>
              <h4 className="font-headline font-bold text-lg">Smartphone Galaxy S24 Ultra</h4>
              <p className="text-sm text-on-surface-variant font-medium">Saindo de: Centro de Distribuição (Barueri, SP)</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-on-surface-variant mb-1">Previsão de Entrega</p>
              <p className="font-headline font-black text-xl text-on-surface">Hoje, 17:00</p>
            </div>
          </div>
          <div className="mt-6 h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: '75%' }}></div>
          </div>
        </div>
        {/* Tracking Item 2 */}
        <div className="bg-surface-container-low p-6 rounded-lg border border-transparent hover:border-surface-variant transition-all cursor-pointer">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">Objeto Postado</span>
                <span className="text-xs text-on-surface-variant font-semibold">#HRM-10293-BR</span>
              </div>
              <h4 className="font-headline font-bold text-lg">Kit Teclado e Mouse Gamer</h4>
              <p className="text-sm text-on-surface-variant font-medium">Origem: Loja Oficial H3rmes (Curitiba, PR)</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-on-surface-variant mb-1">Previsão de Entrega</p>
              <p className="font-headline font-bold text-lg text-on-surface">Terça, 12 Mai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivePackages;
