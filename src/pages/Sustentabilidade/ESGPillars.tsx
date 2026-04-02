import React from 'react';

const ESGPillars: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Nossos Pilares ESG</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Compromissos reais que transformam a logística em uma força para o bem do planeta e da sociedade.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
        {/* Environmental */}
        <div className="md:col-span-7 bg-surface-container-low rounded-[2rem] p-10 flex flex-col justify-between overflow-hidden relative group">
          <div className="z-10">
            <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-3xl">eco</span>
            </div>
            <h3 className="text-3xl font-bold font-headline mb-4">Meio Ambiente</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
              Foco total em frota 100% elétrica e neutralidade de carbono. Reduzimos nossa pegada ambiental em cada entrega realizada.
            </p>
          </div>
          <div className="z-10 flex flex-wrap gap-3 mt-8">
            <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-primary">
              Carbono Zero
            </span>
            <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-primary">
              Frota Elétrica
            </span>
            <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-primary">
              Energia Solar
            </span>
          </div>
          <img
            alt="Green Tech"
            className="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover rounded-tl-[3rem] opacity-20 group-hover:opacity-40 transition-opacity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ5ARBYrlxByMC9eHnYROLxefqbhWV1xtviUhhP0K5zerT1S_HMLUKBnEbTsxqIa_JvJ3hxFC4R_WSxcRo6H68sNFpZPmCD9fTxJPKKEdHGcUMnyJ2wy8j6hv0HRaBAmoAfzWQxseY9VVHsmmriJeJYgtzbp5GfZB3pxyLjO3b7CA2mu8teoEqCuSOeL_XEZCz1Pwkpbt-nDixQGdyD_bzpNKq7Rey8I_spC_s9zHbzbagVU7ZpUWVAvGL131EsAR99tZZCTOUplM"
          />
        </div>
        {/* Social */}
        <div className="md:col-span-5 bg-surface-container-high rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden group">
          <div className="z-10">
            <div className="w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="text-3xl font-bold font-headline mb-4 text-on-surface">Social</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Impacto positivo nas comunidades onde operamos, priorizando trabalho justo e inclusão digital para todos os colaboradores.
            </p>
          </div>
          <img
            alt="Community"
            className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full object-cover border-8 border-white group-hover:scale-110 transition-transform"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNIvB-ezlH9gA6tx2bUEjRob60ShVUMXQP4dNbtnfszzvXBhGo02O5FjRVkRSBejObUP5hZadsDZnl9qM7eA6BWtz8_KXI0OXNfPLbZUXYwteQqvddN0pbPtKNhYr5Z_BHKr_3TotZkSjd0Ub-8HDqzlG0ngkwAse0TzmOyWVBJSkScYLxuIg5N5R1EszV0NUCNPH5Uf782ZxlxpkhF3yGPzzptvh7l0wpq3AYEGkFxU9Dg9SdEHSXIFJlYAGFkaZFObFt1wjxE8k"
          />
        </div>
        {/* Governance */}
        <div className="md:col-span-12 bg-on-surface text-surface rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8 backdrop-blur">
              <span className="material-symbols-outlined text-3xl">balance</span>
            </div>
            <h3 className="text-3xl font-bold font-headline mb-4">Governança</h3>
            <p className="text-surface-container-high text-lg leading-relaxed">
              Transparência e ética são inegociáveis. Nosso conselho independente garante que cada passo da H3rmes siga os mais altos padrões de compliance global.
            </p>
          </div>
          <div className="md:w-1/3 grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-xs uppercase tracking-widest text-white/60">Transparência</div>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-primary mb-1">Global</div>
              <div className="text-xs uppercase tracking-widest text-white/60">Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGPillars;
