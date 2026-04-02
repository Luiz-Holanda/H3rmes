import React from 'react';

const SobreNosBento: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
          {/* History Card */}
          <div className="md:col-span-8 bg-surface p-12 rounded-[2rem] flex flex-col justify-center">
            <h2 className="font-headline text-3xl font-bold mb-6 text-primary">Nossa História</h2>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              A H3rmes nasceu de um sonho compartilhado entre desenvolvedores e visionários que acreditavam que a entrega de um pacote deveria ser tão rápida quanto a troca de um bit de informação. O que começou como um projeto de código e paixão em um pequeno escritório, evoluiu para uma infraestrutura tecnológica que redefine os padrões de logística nacional.
            </p>
          </div>
          {/* Stats Card */}
          <div className="md:col-span-4 bg-linear-to-br from-primary to-[#e61e50] p-12 rounded-[2rem] text-on-primary flex flex-col justify-between">
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
            <div>
              <div className="text-5xl font-extrabold font-headline mb-2">99.9%</div>
              <div className="text-sm font-medium uppercase tracking-tighter opacity-80">Precisão de Entrega</div>
            </div>
          </div>
          {/* Vision Card */}
          <div className="md:col-span-12 bg-on-background p-12 rounded-[2rem] text-white flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="font-headline text-3xl font-bold mb-6 text-secondary-container">Nossa Visão</h2>
              <p className="text-xl leading-relaxed opacity-90">
                Nossa visão é ser a espinha dorsal do e-commerce brasileiro, tornando-nos a plataforma de logística mais inteligente, sustentável e humana da América Latina até 2030.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                className="w-full h-full object-cover" 
                alt="futuristic cityscape" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh1tsqQSCu7aSdRQriz0Uupk68phDbI-CD6e8ElZb_b_nyQQoq418Gv-JcgTMwQofJeLvzelP6mITgKd2Hx6Ge1riELGDnTcNJx0kbKt_RRKZlJTqtjmYDkl95sUj06AuJIYPnNbmMBRpbgWPE5ZzhMPlg-dR4w-i3hO-QxS1BmP5M6Z3NmwnzJ_eM-I4rW_JC3_neOK1tV7aZhzOzxxDvZWNdr_HsFUTppokG8W55qcJN2OoC_opzFOcpXCH-Dby1nvpYsZ842TY" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosBento;
