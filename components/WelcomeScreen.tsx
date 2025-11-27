import React from 'react';
import { ArrowRight, BrainCircuit } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center animate-fade-in">
      <div className="bg-white p-4 rounded-full shadow-lg mb-8">
        <BrainCircuit size={64} className="text-indigo-600" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
        Teste PARF
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">
        Descubra seu Perfil Sabotador
      </h2>
      <p className="max-w-2xl text-slate-600 text-lg mb-8 leading-relaxed">
        Este teste de avaliação consiste em <strong>32 blocos</strong> de questões.
        Em cada bloco, você deve escolher obrigatoriamente:
        <br />
        <span className="block mt-4 mb-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 font-bold text-sm mr-2">
            MAIS (+)
          </span>
          A alternativa que <strong>mais</strong> combina com você.
        </span>
        <span className="block mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800 font-bold text-sm mr-2">
            MENOS (-)
          </span>
          A alternativa que <strong>menos</strong> tem a ver com você.
        </span>
        Seja honesto para obter um resultado preciso.
      </p>

      <button
        onClick={onStart}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
      >
        Começar Avaliação
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default WelcomeScreen;