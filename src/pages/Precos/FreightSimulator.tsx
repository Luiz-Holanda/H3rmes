import React, { useState } from 'react';
import { maskCEP, maskDecimal } from '../../utils/masks';

const FreightSimulator: React.FC = () => {
  const [cepOrigem, setCepOrigem] = useState('');
  const [cepDestino, setCepDestino] = useState('');
  const [peso, setPeso] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSimulate = () => {
    if (cepOrigem && cepDestino && peso) {
      setShowResult(true);
    } else {
      alert('Por favor, preencha todos os campos para simular.');
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-8 mb-20">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold font-headline text-on-surface mb-4">Simulador de Frete</h2>
          <p className="text-on-surface-variant">Simule o valor e o prazo de entrega instantaneamente. Transparência total para o seu negócio.</p>
        </div>
        <div className="flex gap-4">
          <span className="px-4 py-2 bg-surface-container-high rounded-lg text-sm font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">local_shipping</span> Terrestre
          </span>
          <span className="px-4 py-2 bg-surface-container-high rounded-lg text-sm font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">flight_takeoff</span> Aéreo
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Simulation Form */}
        <div className="lg:col-span-8 bg-surface-container-low p-8 md:p-12 rounded-[2rem] shadow-sm border border-outline/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">CEP Origem</label>
              <div className="bg-surface-container-highest p-4 rounded-lg flex items-center gap-3">
                <span className="material-symbols-outlined text-neutral-400">location_on</span>
                <input 
                  className="w-full bg-transparent border-none focus:ring-0 p-0 font-medium" 
                  placeholder="00000-000" 
                  type="text" 
                  value={cepOrigem}
                  onChange={(e) => setCepOrigem(maskCEP(e.target.value))}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">CEP Destino</label>
              <div className="bg-surface-container-highest p-4 rounded-lg flex items-center gap-3">
                <span className="material-symbols-outlined text-neutral-400">flag</span>
                <input 
                  className="w-full bg-transparent border-none focus:ring-0 p-0 font-medium" 
                  placeholder="00000-000" 
                  type="text" 
                  value={cepDestino}
                  onChange={(e) => setCepDestino(maskCEP(e.target.value))}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Peso (kg)</label>
              <div className="bg-surface-container-highest p-4 rounded-lg flex items-center gap-3">
                <span className="material-symbols-outlined text-neutral-400">weight</span>
                <input 
                  className="w-full bg-transparent border-none focus:ring-0 p-0 font-medium" 
                  placeholder="1.0" 
                  type="text" 
                  value={peso}
                  onChange={(e) => setPeso(maskDecimal(e.target.value))}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input defaultChecked className="text-primary focus:ring-primary w-5 h-5" name="service" type="radio" />
                <span className="font-bold text-on-surface group-hover:text-primary transition-colors">Standard</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input className="text-primary focus:ring-primary w-5 h-5" name="service" type="radio" />
                <span className="font-bold text-on-surface group-hover:text-primary transition-colors">Express (24h)</span>
              </label>
            </div>
            <button 
              onClick={handleSimulate}
              className="bg-primary text-white px-10 py-4 rounded-lg font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all"
            >
              Simular Agora
            </button>
          </div>
        </div>

        {/* Result Card (Conditional) */}
        {showResult && (
          <div className="lg:col-span-4 space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="bg-primary text-white p-8 rounded-[2rem] relative overflow-hidden shadow-xl shadow-primary/20">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <span className="material-symbols-outlined text-8xl">trending_up</span>
              </div>
              <p className="text-sm font-medium opacity-80 mb-1">Estimativa Express</p>
              <h3 className="text-4xl font-extrabold font-headline mb-6">R$ 42,90</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-white/20 pb-2">
                  <span>Prazo:</span>
                  <span className="font-bold">Até amanhã, 18h</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-white/20 pb-2">
                  <span>Seguro:</span>
                  <span className="font-bold">Incluso</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Emissões CO2:</span>
                  <span className="font-bold">Neutralizadas</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FreightSimulator;
