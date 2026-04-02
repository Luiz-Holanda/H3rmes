import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full border-t border-neutral-100 mt-20 transition-all">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto gap-8">
        <div className="col-span-1 md:max-w-xs">
          <Link to="/sobre" className="mb-4 block">
            <img src={logo} alt="H3rmes Logo" className="h-10 w-auto object-contain" />
          </Link>
          <p className="text-zinc-500 dark:text-zinc-400 font-['Inter'] text-sm leading-relaxed mb-6">
            Redefinindo os limites da logística brasileira com tecnologia de ponta e obsessão pelo cliente.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-lg bg-neutral-200 flex items-center justify-center text-neutral-600 hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-lg">share</span>
            </div>
            <div className="w-8 h-8 rounded-lg bg-neutral-200 flex items-center justify-center text-neutral-600 hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-lg">public</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-bold text-neutral-800 mb-4 text-sm font-headline">Empresa</h4>
            <ul className="space-y-3 font-['Inter'] text-sm">
              <li><Link className="text-zinc-500 dark:text-zinc-400 hover:text-[#e61e50] transition-colors" to="/vagas">Trabalhe Conosco</Link></li>
              <li><Link className="text-zinc-500 dark:text-zinc-400 hover:text-[#e61e50] transition-colors" to="/sobre">Sobre Nós</Link></li>
              <li><Link className="text-zinc-500 dark:text-zinc-400 hover:text-[#e61e50] transition-colors" to="/sustentabilidade">Sustentabilidade</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-neutral-800 mb-4 text-sm font-headline">Suporte</h4>
            <ul className="space-y-3 font-['Inter'] text-sm">
              <li><Link className="text-zinc-500 dark:text-zinc-400 hover:text-[#aa3701] transition-colors" to="/contato">Contato</Link></li>
              <li><Link className="text-zinc-500 dark:text-zinc-400 hover:text-[#aa3701] transition-colors" to="/faq">FAQ</Link></li>
              <li><Link className="text-zinc-500 dark:text-zinc-400 hover:text-[#aa3701] transition-colors" to="/ouvidoria">Ouvidoria</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-neutral-800 mb-4 text-sm font-headline">Legal</h4>
            <ul className="space-y-3 font-['Inter'] text-sm">
              <li><Link className="text-zinc-500 dark:text-zinc-400 hover:text-[#aa3701] transition-colors" to="/privacidade">Privacidade</Link></li>
              <li><Link className="text-zinc-500 dark:text-zinc-400 hover:text-[#aa3701] transition-colors" to="/termos">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-6 border-t border-neutral-300/30">
        <p className="font-['Inter'] text-sm text-zinc-500 text-center">© 2024 H3rmes Logística. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
