import React from 'react';

const TrackingSearch: React.FC = () => {
  return (
    <section className="mb-12">
      <div className="max-w-2xl">
        <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3 font-label">Real-Time Intelligence</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 font-headline">Track Your Kinetic Journey</h1>
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-secondary">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input
            className="w-full bg-surface-container-highest border-none rounded-lg py-5 pl-14 pr-32 focus:ring-2 focus:ring-primary/20 text-lg font-body placeholder:text-secondary/50"
            placeholder="Enter Tracking Code (e.g., HR-8829-KNT)"
            type="text"
          />
          <button className="absolute right-2 top-2 bottom-2 bg-primary text-on-primary px-8 rounded-lg font-bold hover:scale-[1.02] transition-transform font-headline">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrackingSearch;
