import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Login: React.FC = () => {
  const [userType, setUserType] = useState<'pf' | 'pj'>('pf');

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 relative overflow-hidden bg-surface">
      {/* Background Velocity Decor */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-container opacity-5 rounded-full blur-3xl"></div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-surface-container-low rounded-lg overflow-hidden shadow-2xl shadow-on-surface/5">
        {/* Visual Section */}
        <div className="hidden md:flex flex-col justify-between p-12 bg-gradient-to-br from-primary to-[#bd003c] text-white relative">
          <div className="z-10">
            <h1 className="text-4xl lg:text-5xl font-headline font-extrabold leading-tight tracking-tighter mb-6">
              Velocidade que move o seu negócio.
            </h1>
            <p className="text-lg opacity-90 font-light max-w-sm">
              Conectando pessoas e empresas através da logística mais inteligente e rápida do Brasil.
            </p>
          </div>

          <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-white">local_shipping</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest opacity-70 font-bold">Status em Tempo Real</p>
                <p className="font-headline font-bold">Entrega em Rota Final</p>
              </div>
            </div>
            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-white rounded-full"></div>
            </div>
          </div>

          {/* Background Image */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <img
              alt="Delivery"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJFvPZLxUZheQbEjzLdwYr5e7b-szhzmIYzjd67J0NXg6R-3j_I5uMPWzTavsooM8FcSBVrJyEV0mZIUwXKJpz39rqYkHj7M8V-H-JSFV2burEwAmoRwNtF6bdjdo2224j5nhZtJ61mISjN4iZaPE9GC-ez1h2neEl-a4cr6jARjdr1JVj_aCR66R1qLinexKnIT9aCGRzS3C3zEWlgkhNp7m2ChSaHw1vXzr_I3jKoNnr11jua5L_hqD5nWRjr635zUl2tdNrOtI"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8 md:p-16 bg-surface-container-lowest flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-2">Bem-vindo à H3rmes</h2>
            <p className="text-on-surface-variant">Escolha como deseja acessar sua conta</p>
          </div>

          {/* User Type Toggle */}
          <div className="flex p-1 bg-surface-container-low rounded-lg mb-8">
            <button
              onClick={() => setUserType('pf')}
              className={cn(
                "flex-1 py-3 px-6 rounded-lg text-sm font-bold transition-all duration-300",
                userType === 'pf' ? "bg-white text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"
              )}
            >
              Pessoa Física
            </button>
            <button
              onClick={() => setUserType('pj')}
              className={cn(
                "flex-1 py-3 px-6 rounded-lg text-sm font-bold transition-all duration-300",
                userType === 'pj' ? "bg-white text-primary shadow-sm" : "text-on-surface-variant hover:text-primary"
              )}
            >
              Empresarial
            </button>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 px-1">
                Email, CPF ou CNPJ
              </label>
              <input
                className="w-full px-6 py-4 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline/50 transition-all"
                placeholder="Digite seus dados"
                type="text"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2 px-1">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Senha</label>
                <a className="text-xs font-bold text-primary hover:underline" href="#">Esqueceu a senha?</a>
              </div>
              <div className="relative">
                <input
                  className="w-full px-6 py-4 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline/50 transition-all"
                  placeholder="••••••••"
                  type="password"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline" type="button">
                  <span className="material-symbols-outlined text-sm">visibility</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2">
              <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" id="remember" type="checkbox" />
              <label className="text-sm text-on-surface-variant" htmlFor="remember">Lembrar de mim</label>
            </div>
            <button
              className="w-full py-4 bg-primary text-white font-headline font-bold rounded-lg shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95 duration-200"
              type="submit"
            >
              Entrar na Conta
            </button>
          </form>

          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="relative w-full flex items-center justify-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-surface-container-high"></div></div>
              <span className="relative px-4 bg-surface-container-lowest text-xs font-bold text-on-surface-variant uppercase tracking-widest">Ou continue com</span>
            </div>
            <div className="flex gap-4 w-full">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-surface-container-high rounded-lg hover:bg-surface-container-low transition-colors">
                <img
                  alt="Google"
                  className="w-5 h-5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlmJpMtx6p2Vh6OQDUwNhoLPV2qY2wkpNJufXDW5_c6-roKodNAyN_WV695143qXXkyrxFm3OfhXU6eMi3GiCrZ7_n1Rta0XweYWUX-TSD_4i59PK9r8vpna1UGtxkqXZAiKG65z17cd40tm1Sjbt65OAX3ycj4SrYBI4dN8D1wsyB5Xc7u_nihBFO5ETko4Knuse2_00p8VNiHUGhSuMvrkaGA8GuT66xdXXlNqJxeL5FBurXMoVDkeWm1JUPlhsEVkuzgPUze0Y"
                />
                <span className="text-sm font-semibold">Google</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-surface-container-high rounded-lg hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-on-surface" style={{ fontVariationSettings: "'FILL' 1" }}>ios</span>
                <span className="text-sm font-semibold">Apple</span>
              </button>
            </div>
            <p className="text-on-surface-variant text-sm">
              Ainda não tem conta? <Link className="text-primary font-bold hover:underline" to="/cadastro">Criar Conta Agora</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
