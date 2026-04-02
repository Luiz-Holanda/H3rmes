import React from 'react';
import { Link } from 'react-router-dom';

const ServicesBento: React.FC = () => {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* E-commerce API */}
          <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between min-h-[400px] shadow-sm">
            <div>
              <span className="material-symbols-outlined text-primary text-4xl mb-6">api</span>
              <h3 className="text-3xl font-extrabold font-headline mb-4">E-commerce Integration</h3>
              <p className="text-secondary text-lg max-w-md">
                Integre sua loja em minutos com nossa API robusta. Webhooks em tempo real e tracking nativo para Checkout.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <span className="px-4 py-1 bg-surface-container text-on-surface-variant rounded-full text-sm font-medium">Rest API</span>
              <span className="px-4 py-1 bg-surface-container text-on-surface-variant rounded-full text-sm font-medium">SDKs</span>
              <span className="px-4 py-1 bg-surface-container text-on-surface-variant rounded-full text-sm font-medium">Webhooks</span>
            </div>
          </div>
          {/* Same Day Delivery */}
          <div className="md:col-span-4 bg-linear-to-br from-primary to-[#bd003c] p-10 rounded-xl text-on-primary flex flex-col justify-between shadow-lg">
            <span className="material-symbols-outlined text-4xl mb-6">flight_takeoff</span>
            <div>
              <h3 className="text-2xl font-extrabold font-headline mb-2">Air Priority</h3>
              <p className="opacity-90 font-medium">Same-day delivery para as principais capitais. Velocidade máxima garantida.</p>
            </div>
          </div>
          {/* Warehouse/Fulfillment */}
          <div className="md:col-span-5 bg-surface-container p-10 rounded-xl flex flex-col justify-between h-[450px]">
            <img
              className="w-full h-48 object-cover rounded-lg mb-8"
              alt="Modern logistics center"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASoj_Q68bxQfN0HrnT9N2McRmid9kKoOSi3_9nl2o_owoEIapSjpa6_k70JnmU14SlldnvMmYxZGlbqIRe7JYd6Ljo3w1uJ5ddOx5tCOsrZwN7mF0cJQXNw4nlmWXyq8FeSsIdxkumJ1cr9g5S8RcVNgYOdm2rFkxHGAdFTD2CVX5DQY_tJssmgywrAtAeGhV-iYaiuqoGFdF65UHvBPrcV6hLWex5khWrGX---I9yAeRq6kADFQDJkYXPVzI7RuaRmN5jY10Dd44"
            />
            <div>
              <h3 className="text-2xl font-extrabold font-headline mb-2">Logistics Fulfillment</h3>
              <p className="text-secondary">Armazenagem inteligente e picking automatizado para escalar sua operação.</p>
            </div>
          </div>
          {/* Green Delivery */}
          <div className="md:col-span-7 bg-[#006b4f] p-10 rounded-xl text-white flex items-center gap-8 shadow-sm relative overflow-hidden">
            <div className="flex-1 relative z-10">
              <h3 className="text-4xl font-extrabold font-headline mb-4">Electric fleet</h3>
              <p className="opacity-90 text-lg mb-6">
                Logística de última milha 100% sustentável. Reduza a pegada de carbono da sua marca com nossa frota elétrica.
              </p>
              <Link
                to="/sustentabilidade"
                className="inline-block bg-[#8ef7cc] text-[#002116] px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all scale-95 active:scale-90"
              >
                Ver Metas ESG
              </Link>
            </div>
            <span className="material-symbols-outlined text-[180px] opacity-10 select-none absolute -right-8 top-1/2 -translate-y-1/2">
              electric_car
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
