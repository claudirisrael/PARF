import React, { useState } from 'react';
import { QUESTIONS } from '../constants';
import { AnswerState } from '../types';
import { Plus, Minus, CheckCircle2, AlertCircle, ArrowDown } from 'lucide-react';

interface QuizScreenProps {
  onComplete: (answers: AnswerState) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ onComplete }) => {
  const [answers, setAnswers] = useState<AnswerState>({});

  const handleSelection = (blockId: number, optionId: string, type: 'most' | 'least') => {
    setAnswers((prev) => {
      const currentBlockAnswers = prev[blockId] || { most: null, least: null };
      let newMost = currentBlockAnswers.most;
      let newLeast = currentBlockAnswers.least;

      if (type === 'most') {
        // If clicking Most on an item that is already Least, clear Least
        if (newLeast === optionId) newLeast = null;
        // Set new Most (toggling off if clicking same)
        newMost = newMost === optionId ? null : optionId;
      } else {
        // If clicking Least on an item that is already Most, clear Most
        if (newMost === optionId) newMost = null;
        // Set new Least
        newLeast = newLeast === optionId ? null : optionId;
      }

      return {
        ...prev,
        [blockId]: { most: newMost, least: newLeast },
      };
    });
  };

  const totalQuestions = QUESTIONS.length;
  const answeredCount = Object.values(answers).filter(a => a.most && a.least).length;
  const isComplete = answeredCount === totalQuestions;
  const progressPercentage = (answeredCount / totalQuestions) * 100;

  const scrollToFirstIncomplete = () => {
    const firstIncomplete = QUESTIONS.find(q => {
        const ans = answers[q.id];
        return !ans || !ans.most || !ans.least;
    });
    
    if (firstIncomplete) {
        const element = document.getElementById(`question-${firstIncomplete.id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add a temporary highlight effect logic if needed, usually scroll is enough
        }
    }
  };

  const handleFinishClick = () => {
      if (isComplete) {
          onComplete(answers);
          window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
          scrollToFirstIncomplete();
      }
  };

  return (
    <div className="max-w-3xl mx-auto pb-32 animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Avaliação PARF</h2>
        <p className="text-slate-600">Role para baixo para responder todas as 32 questões.</p>
      </div>

      <div className="space-y-6">
        {QUESTIONS.map((block, index) => {
          const currentAnswer = answers[block.id] || { most: null, least: null };
          const isBlockComplete = currentAnswer.most && currentAnswer.least;

          return (
            <div 
                key={block.id} 
                id={`question-${block.id}`}
                className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 ${isBlockComplete ? 'border-green-200 shadow-green-50/50' : 'border-slate-200'}`}
            >
              <div className={`px-6 py-4 border-b flex justify-between items-center ${isBlockComplete ? 'bg-green-50/50 border-green-100' : 'bg-slate-50 border-slate-100'}`}>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  Questão {block.id}
                </h3>
                {isBlockComplete ? (
                    <span className="flex items-center text-green-600 text-sm font-medium">
                        <CheckCircle2 size={16} className="mr-1" /> Completa
                    </span>
                ) : (
                    <span className="text-slate-400 text-sm">Pendente</span>
                )}
              </div>

              <div className="divide-y divide-slate-100">
                {block.options.map((option) => {
                  const isMost = currentAnswer.most === option.id;
                  const isLeast = currentAnswer.least === option.id;

                  return (
                    <div
                      key={option.id}
                      className={`flex flex-col sm:flex-row items-center justify-between p-4 transition-colors duration-200 ${
                        isMost ? 'bg-green-50' : isLeast ? 'bg-red-50' : 'hover:bg-slate-50'
                      }`}
                    >
                      <p className={`flex-1 text-base font-medium mb-3 sm:mb-0 mr-4 ${
                        isMost ? 'text-green-800' : isLeast ? 'text-red-800' : 'text-slate-700'
                      }`}>
                        {option.text}
                      </p>

                      <div className="flex items-center space-x-3 shrink-0">
                        <button
                          onClick={() => handleSelection(block.id, option.id, 'most')}
                          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                            isMost
                              ? 'bg-green-500 border-green-500 text-white ring-green-300 shadow-sm'
                              : 'bg-white border-slate-200 text-slate-300 hover:border-green-400 hover:text-green-400'
                          }`}
                          aria-label="Selecionar como Mais"
                          title="Mais combina comigo (+)"
                        >
                            {isMost ? <CheckCircle2 size={20} /> : <Plus size={20} />}
                        </button>

                        <button
                          onClick={() => handleSelection(block.id, option.id, 'least')}
                          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                            isLeast
                              ? 'bg-red-500 border-red-500 text-white ring-red-300 shadow-sm'
                              : 'bg-white border-slate-200 text-slate-300 hover:border-red-400 hover:text-red-400'
                          }`}
                          aria-label="Selecionar como Menos"
                          title="Menos combina comigo (-)"
                        >
                            {isLeast ? <CheckCircle2 size={20} /> : <Minus size={20} />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 z-40">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-auto flex-1 mr-0 sm:mr-8">
                <div className="flex justify-between text-sm font-medium text-slate-600 mb-1">
                    <span>Progresso</span>
                    <span>{answeredCount} / {totalQuestions}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                    <div
                        className={`h-2.5 rounded-full transition-all duration-500 ease-out ${isComplete ? 'bg-green-500' : 'bg-indigo-600'}`}
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>
            
            <button
                onClick={handleFinishClick}
                className={`w-full sm:w-auto px-8 py-3 rounded-full font-bold text-white transition-all shadow-lg flex items-center justify-center whitespace-nowrap ${
                    isComplete 
                    ? 'bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-1' 
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
            >
                {isComplete ? (
                    <>
                        Ver Resultado
                        <CheckCircle2 className="ml-2 w-5 h-5" />
                    </>
                ) : (
                    <>
                        Continuar
                        <ArrowDown className="ml-2 w-5 h-5" />
                    </>
                )}
            </button>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;