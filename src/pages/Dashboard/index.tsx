import React from 'react';
import DashboardHeader from './DashboardHeader';
import QuickActions from './QuickActions';
import ActivePackages from './ActivePackages';
import History from './History';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <DashboardHeader />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <QuickActions />
        <section className="lg:col-span-8 flex flex-col gap-6">
          <ActivePackages />
          <History />
        </section>
      </div>
      {/* Promotional/Support Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-high/50 p-6 rounded-lg flex items-start gap-4 hover:shadow-md transition-shadow">
          <div className="bg-secondary-container p-3 rounded-lg text-white">
            <span className="material-symbols-outlined">support_agent</span>
          </div>
          <div>
            <h5 className="font-headline font-bold text-on-surface">Suporte 24/7</h5>
            <p className="text-sm text-on-surface-variant mt-1 font-medium">Dúvidas sobre sua entrega? Fale com nosso concierge agora.</p>
          </div>
        </div>
        <div className="bg-surface-container-high/50 p-6 rounded-lg flex items-start gap-4 hover:shadow-md transition-shadow">
          <div className="bg-primary p-3 rounded-lg text-white">
            <span className="material-symbols-outlined">verified</span>
          </div>
          <div>
            <h5 className="font-headline font-bold text-on-surface">Seguro Total</h5>
            <p className="text-sm text-on-surface-variant mt-1 font-medium">Todas as suas encomendas possuem seguro contra roubo e extravio.</p>
          </div>
        </div>
        <div className="bg-surface-container-high/50 p-6 rounded-lg flex items-start gap-4 hover:shadow-md transition-shadow">
          <div className="bg-tertiary-container p-3 rounded-lg text-white">
            <span className="material-symbols-outlined">eco</span>
          </div>
          <div>
            <h5 className="font-headline font-bold text-on-surface">H3rmes Green</h5>
            <p className="text-sm text-on-surface-variant mt-1 font-medium">Entregas 100% carbono neutro através de frotas elétricas.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
