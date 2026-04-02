import React from 'react';

const PackageDetails: React.FC = () => {
  return (
    <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-surface-container-high pt-12">
      <div>
        <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Package Intel</h4>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-secondary text-sm">Weight</span>
            <span className="font-bold">2.45 kg</span>
          </div>
          <div className="flex justify-between">
            <span className="text-secondary text-sm">Dimensions</span>
            <span className="font-bold">30 x 20 x 15 cm</span>
          </div>
          <div className="flex justify-between">
            <span className="text-secondary text-sm">Service Type</span>
            <span className="font-bold">H3RMES Kinetic Prime</span>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Recipient</h4>
        <p className="font-bold">Mariana Gonçalves</p>
        <p className="text-secondary text-sm mt-2">Av. Paulista, 1000 - Bela Vista</p>
        <p className="text-secondary text-sm">São Paulo, SP - 01310-100</p>
      </div>
      <div className="bg-surface-container-highest p-6 rounded-lg">
        <h4 className="font-bold font-headline mb-2">Safe Delivery Protocol</h4>
        <p className="text-sm text-secondary">This package is protected by H3RMES Motion Insurance. Your courier will verify ID upon arrival.</p>
        <button className="text-primary text-xs font-bold uppercase tracking-tighter mt-4 flex items-center gap-1">
          Change Delivery Preferences <span className="material-symbols-outlined text-xs">arrow_forward_ios</span>
        </button>
      </div>
    </section>
  );
};

export default PackageDetails;
