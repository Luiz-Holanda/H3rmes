import React from 'react';

const TrackingTimeline: React.FC = () => {
  return (
    <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-8">
      <div className="flex justify-between items-start mb-12">
        <div>
          <h2 className="text-2xl font-bold font-headline mb-1">Package HR-8829-KNT</h2>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            <span className="text-tertiary font-semibold text-sm">In Transit: High Velocity</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-secondary text-xs uppercase font-bold tracking-tighter">Origin</p>
          <p className="font-bold">Berlin, DE</p>
        </div>
      </div>
      {/* Vertical Stepper */}
      <div className="space-y-10 relative">
        {/* Step Line */}
        <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-secondary-container"></div>
        <div className="absolute left-[15px] top-2 h-2/3 w-0.5 bg-primary"></div>
        {/* Step 4: Delivered (Inactive) */}
        <div className="flex gap-6 relative z-10 opacity-40">
          <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-sm">check</span>
          </div>
          <div>
            <h3 className="font-bold text-lg font-headline">Delivered</h3>
            <p className="text-secondary text-sm">Estimated arrival at your doorstep.</p>
          </div>
        </div>
        {/* Step 3: Out for Delivery (Current) */}
        <div className="flex gap-6 relative z-10">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_0_0_4px_rgba(230,30,80,0.15)]">
            <span className="material-symbols-outlined text-on-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
          </div>
          <div>
            <h3 className="font-bold text-lg font-headline text-primary">Out for Delivery</h3>
            <p className="text-on-surface text-sm">Courier is in your neighborhood. Priority route assigned.</p>
            <p className="text-secondary text-xs mt-1">Today, 09:42 AM • São Paulo Distribution Hub</p>
          </div>
        </div>
        {/* Step 2: In Transit */}
        <div className="flex gap-6 relative z-10">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
          </div>
          <div>
            <h3 className="font-bold text-lg font-headline">In Transit</h3>
            <p className="text-on-surface text-sm">Package cleared customs and moved to regional center.</p>
            <p className="text-secondary text-xs mt-1">Yesterday, 14:15 PM • Viracopos Logistics Park</p>
          </div>
        </div>
        {/* Step 1: Order Received */}
        <div className="flex gap-6 relative z-10">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
          </div>
          <div>
            <h3 className="font-bold text-lg font-headline">Order Received</h3>
            <p className="text-on-surface text-sm">Merchant dispatched the package to H3RMES.</p>
            <p className="text-secondary text-xs mt-1">Oct 24, 08:30 AM • Berlin Main Terminal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingTimeline;
