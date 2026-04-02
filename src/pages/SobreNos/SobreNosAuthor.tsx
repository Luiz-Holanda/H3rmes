import React from 'react';
import fotoFinal from '../../assets/foto-final.jpeg';

const SobreNosAuthor: React.FC = () => {
  return (
    <section className="py-24 px-8 bg-surface-container-highest/30">
      <div className="max-w-5xl mx-auto bg-surface rounded-[3rem] overflow-hidden shadow-xl flex flex-col md:flex-row">
        <div className="md:w-2/5 relative">
          <img 
            className="w-full h-full object-cover" 
            alt="Author portrait" 
            src={fotoFinal} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
        </div>
        <div className="md:w-3/5 p-12 flex flex-col justify-center">
          <h2 className="font-headline text-2xl font-bold mb-2">Quem desenvolveu este projeto</h2>
          <div className="w-12 h-1 bg-secondary mb-6"></div>
          <p className="text-on-surface-variant leading-relaxed mb-8">
            Este ecossistema digital foi meticulosamente arquitetado para demonstrar o poder da integração entre design moderno e engenharia de software de alta performance. Convido você a conhecer mais sobre as tecnologias e processos por trás deste e de outros projetos.
          </p>
          <div className="flex gap-4">
            <a 
              className="flex items-center gap-2 bg-on-background text-white px-6 py-3 rounded-full hover:opacity-90 transition-all" 
              href="https://github.com/Luiz-Holanda" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-xl">terminal</span>
              <span className="font-bold">GitHub</span>
            </a>
            <a 
              className="flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all" 
              href="https://www.linkedin.com/in/luiz-holanda-030bb0282" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-xl">share</span>
              <span className="font-bold">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosAuthor;
