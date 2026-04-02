import React from 'react';

const vehicles = [
  {
    name: 'H-Van Electric',
    tag: '280km Autonomia',
    description: 'Ideal para grandes volumes urbanos, equipada com sistema de regeneração de carga e zero emissão sonora.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADgKdzCCYzZ-0J9gUcHOzduzeAsjFnPBUKAvKlWUq_6Vf7GPBmASTq27DLmjr1yLHViej1YUUNlf_9gcRULNuVvZvAb6j-K2k3AphbtBV3wV-dvNDx5eEodZ79Zwlag_hwJhGxmzP_r3fGPiVy3Pu2HdWUuzv0Gu_7mBTze5Hr2jwxooCbGzMbDeNuv7mlHaI1spaVOI3-dewtzNR9davw3R7gqJZ1DyjQRXBTZ6-KUuc6y97E0xquus8RZpvyJ202ou3vm8-SccM',
    features: [
      { icon: 'ev_station', label: 'Carga Rápida' },
      { icon: 'volume_off', label: 'Silencioso' },
    ],
  },
  {
    name: 'Eco-Bike',
    tag: 'Última Milha',
    description: 'Nossas bikes elétricas navegam pelo trânsito intenso com facilidade, garantindo entregas rápidas e 100% limpas.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkx5fKVB3qnxC14-0oU1EUqk0bpQ6sJ7nvl6tgsDISu1UhnnlkuHFpXMpZi7lasLGF5z2FQqMwUfzeCSx-HnmM4THkJi6yO0zBJZGz8u-PVM9R1KRzFcDdYxrpVtXUEVxBzUyNpv7AqI20DIcdbi6blaqxtgkB6hTCLNz9MVX3HQgIHHmtI7SZACKc2-8qmBDaY5F7OWIulTn81ECKfX-rlOiOAcPdgtYiAlTz_hvHRpZ1DMPiKH4vwXhXjWHf66rWEUzvR0xNV6c',
    features: [
      { icon: 'pedal_bike', label: 'Agilidade' },
      { icon: 'nest_eco_leaf', label: '100% Eco' },
    ],
  },
  {
    name: 'H-Air Drone',
    tag: 'Experimental',
    description: 'O futuro do ar. Drones autônomos para entregas em áreas de difícil acesso, reduzindo o tempo de entrega em até 70%.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2lLHEEjyNOx2K46HbMBbmTvrP9xx6E8ZHo-XefDzsVW1zYMSnQgjTZ9hdOYYA68pLxPaKqfmzw__bhqO-lbOvT6j_79r75Vv0z_7jUW35otbyleRIPu1C30hfEssVNgodII9cKPAXXU0WlKwGbX5_DQ5j6k6_QO4xRCESgrwMlQWJ76oA7VvbYknTlo0-FlU8o0iKMSnA4B0etuMKJ5hVHVvQaRGZfm-1Ogcr0a_Kx-FhhcGuXVPmJPbVVjEEV53PqATb2sKy79Y',
    features: [
      { icon: 'flight', label: 'Aéreo' },
      { icon: 'precision_manufacturing', label: 'Autônomo' },
    ],
  },
];

const FleetShowcase: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold font-headline mb-4">Tecnologia que Move</h2>
          <p className="text-on-surface-variant text-lg">
            Conheça os veículos que estão transformando o asfalto em um caminho mais limpo.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="w-12 h-12 rounded-full border border-surface-container-high flex items-center justify-center hover:bg-surface-container-low transition-colors text-on-surface">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-all">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.name}
            className="bg-white rounded-[2rem] overflow-hidden group border border-surface-container-low hover:border-primary/20 transition-all duration-500"
          >
            <div className="h-64 overflow-hidden">
              <img
                alt={vehicle.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={vehicle.img}
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold font-headline">{vehicle.name}</h4>
                <span className="text-primary font-bold">{vehicle.tag}</span>
              </div>
              <p className="text-on-surface-variant text-sm mb-6">{vehicle.description}</p>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                {vehicle.features.map((feature) => (
                  <span key={feature.label} className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">{feature.icon}</span> {feature.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FleetShowcase;
