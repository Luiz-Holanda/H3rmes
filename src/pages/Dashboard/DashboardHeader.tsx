import React from 'react';

const DashboardHeader: React.FC = () => {
  return (
    <header className="mb-12">
      <h1 className="text-4xl font-headline font-extrabold text-primary tracking-tight">Painel de Controle</h1>
      <p className="text-on-surface-variant mt-2 font-medium">Bem-vindo de volta! Você tem 3 encomendas em trânsito hoje.</p>
    </header>
  );
};

export default DashboardHeader;
