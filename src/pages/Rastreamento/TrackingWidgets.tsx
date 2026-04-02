import React from 'react';

const TrackingWidgets: React.FC = () => {
  return (
    <div className="lg:col-span-5 space-y-6">
      {/* Map View */}
      <div className="bg-surface-container rounded-xl overflow-hidden h-[320px] relative group">
        <img
          className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
          alt="delivery route map"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd_mOypDgl4YKygnOESsZ-p0Vx-n1OA447ktGTs6uwzwMrk7sEvl_eEZWykM-WJWDu-Fs79Jl9jG40iz-7fF22hmDf-ZFwDPlYVdUVPiJysKpxStwxjVPc68hWQSXd2athae-Q5MqpvcFofucXNsSvgli2aSGemcsmgg6xdC3ZGxA5ipRPhmGMqy1bep08ek9n_0yd5afqZh_J6mAzM1dQEiKJkGYngmLb6HmH92Me6yf94-CCf6F9NnZCLsbR991G2-vw9_6AqK0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-fixed overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Courier"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByoNZLPrNAZ1dr0FECT9QYRMZiG-sOTm9gp5pM-ET_zccY9nrdk0haLWO8UdDbt1vqJRUZi4utPHJ3-IiUPiMl1-yn93Hlda50ojwHSmIXtnnXMKuwr6I5oiznsKoiKrj01t4YjB8RJBas8YygtJe8EbZYATtggj6YUJWg5JtnXMLPvVVpWwSNlqe1NDX25qkzqJ_nNT1gW8LcAARkw74065QH9Md8jazxEmkrLLT7BGZXUJXIQsi0yY2c8-JmtNKJc0N131ftYHA"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-secondary uppercase tracking-tighter">Your Courier</p>
              <p className="font-bold">Ricardo S.</p>
            </div>
          </div>
          <button className="bg-primary-container text-white p-2 rounded-full shadow-lg">
            <span className="material-symbols-outlined">near_me</span>
          </button>
        </div>
      </div>
      {/* Estimated Delivery Widget */}
      <div className="bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-between overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 -mr-8 -mt-8">
          <span className="material-symbols-outlined text-[160px]">schedule</span>
        </div>
        <div>
          <p className="text-primary-fixed font-bold uppercase tracking-widest text-xs mb-2">Estimated Arrival</p>
          <p className="text-4xl font-black font-headline">11:45 AM</p>
          <p className="text-primary-fixed mt-1 font-medium">Within the next 2 hours</p>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs opacity-80">Signature required upon delivery. Please ensure someone is available at the address.</p>
        </div>
      </div>
      {/* Support Contact Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-surface-container-low p-6 rounded-xl hover:bg-surface-container transition-colors group cursor-pointer">
          <span className="material-symbols-outlined text-primary mb-3 group-hover:scale-110 transition-transform">chat_bubble</span>
          <h4 className="font-bold font-headline block">Live Chat</h4>
          <p className="text-xs text-secondary mt-1">Avg response: 2m</p>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl hover:bg-surface-container transition-colors group cursor-pointer">
          <span className="material-symbols-outlined text-primary mb-3 group-hover:scale-110 transition-transform">phone_in_talk</span>
          <h4 className="font-bold font-headline block">Priority Call</h4>
          <p className="text-xs text-secondary mt-1">Exclusive for HR-KNT</p>
        </div>
      </div>
    </div>
  );
};

export default TrackingWidgets;
