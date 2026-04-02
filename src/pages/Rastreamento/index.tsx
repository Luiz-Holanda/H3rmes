import React from 'react';
import TrackingSearch from './TrackingSearch';
import TrackingTimeline from './TrackingTimeline';
import TrackingWidgets from './TrackingWidgets';
import PackageDetails from './PackageDetails';

const Rastreamento: React.FC = () => {
  return (
    <div className="pt-16 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <TrackingSearch />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <TrackingTimeline />
        <TrackingWidgets />
      </div>
      <PackageDetails />
    </div>
  );
};

export default Rastreamento;
