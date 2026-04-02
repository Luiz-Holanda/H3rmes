import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-center text-4xl font-extrabold font-headline mb-16">Nossas Soluções</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 bg-surface-container-high rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-5xl mb-6">storefront</span>
              <h3 className="text-3xl font-bold font-headline mb-4">E-commerce Pro</h3>
              <p className="text-on-surface-variant max-w-xs">Integração total com as maiores plataformas do mercado para automatizar seus envios.</p>
            </div>
            <img
              className="absolute bottom-0 right-0 w-2/3 h-1/2 object-cover rounded-tl-[2rem] translate-y-4 translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500"
              alt="E-commerce packaging"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa8VkPCtrpxmgMRpUlabwaY4MpHRND29oAL4kzM6tPRFpcm4qLgPr5j3jgTSseC4gLYH82Br_S2-wMpNXGLN_A46AsGmLophc4RzZxICp5tMaCrW5x34zjMU0Vm-efTkT2qs-mr5gqIpnThajjR0TCUDCraeoM0O82t_WQIsHzaqrxo1p2c7vrHw7BbgJm2OvXJnY0mSh22f48CP32dyn2cuuYBmtNTKNuS21RwjBlmY6pe3QLc7FepzXGlMLZR0LbbfNGHbOnEgs"
            />
          </div>
          <div className="md:col-span-2 bg-secondary-container/10 border-2 border-secondary-container/20 rounded-[2rem] p-10 flex items-center gap-8 group">
            <div className="w-20 h-20 rounded-lg bg-secondary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white text-3xl">helicopter</span>
            </div>
            <div>
              <h3 className="text-xl font-bold font-headline mb-2">H3rmes Air Priority</h3>
              <p className="text-sm text-on-surface-variant">Conectando estados em poucas horas com malha aérea dedicada.</p>
            </div>
          </div>
          <div className="md:col-span-1 bg-surface-container-low rounded-[2rem] p-8 hover:bg-primary/5 transition-colors cursor-pointer text-center">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">inventory_2</span>
            <h3 className="font-bold mb-2">Fulfillment</h3>
            <p className="text-xs text-on-surface-variant">Nós armazenamos, separamos e enviamos.</p>
          </div>
          <div className="md:col-span-1 bg-surface-container-low rounded-[2rem] p-8 hover:bg-primary/5 transition-colors cursor-pointer text-center">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">support_agent</span>
            <h3 className="font-bold mb-2">Suporte 24/7</h3>
            <p className="text-xs text-on-surface-variant">Atendimento humano sempre disponível.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
