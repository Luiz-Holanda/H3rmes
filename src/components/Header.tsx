import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import logo from '../assets/logo.png';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Header: React.FC = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  const navLinks = [
    { name: 'Serviços', href: '/servicos' },
    { name: 'Preços', href: '/precos' },
    { name: 'Rastreamento', href: '/rastreamento' },
    { name: 'Suporte', href: '/suporte' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 w-full z-50 shadow-[0px_20px_40px_rgba(28,27,27,0.06)] border-b border-surface-container-low">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="H3rmes Logo" className="h-15 w-auto object-contain" />
          </Link>
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "transition-colors font-headline font-bold tracking-tight text-sm",
                  location.pathname === link.href
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-zinc-700 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {isDashboard ? (
            <>
              <div className="hidden md:flex bg-surface-container-low px-4 py-2 rounded-full items-center gap-2">
                <span className="material-symbols-outlined text-outline text-sm">search</span>
                <input
                  className="bg-transparent border-none focus:ring-0 text-sm w-40"
                  placeholder="Código de rastreio..."
                  type="text"
                />
              </div>
              <button className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm scale-95 active:scale-90 transition-transform duration-200">
                Olá, Ricardo
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-6 py-2 rounded-lg font-bold text-primary hover:bg-primary/5 transition-all duration-300 scale-95 active:scale-90"
              >
                Entrar
              </Link>
              <Link
                to="/cadastro"
                className="bg-primary-container text-white px-6 py-2 rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Criar Conta
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
