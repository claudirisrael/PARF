import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { AnswerState } from './types';

type AppState = 'WELCOME' | 'QUIZ' | 'RESULT';

const App: React.FC = () => {
  const [screen, setScreen] = useState<AppState>('WELCOME');
  const [answers, setAnswers] = useState<AnswerState>({});

  const startQuiz = () => {
    setScreen('QUIZ');
  };

  const completeQuiz = (finalAnswers: AnswerState) => {
    setAnswers(finalAnswers);
    setScreen('RESULT');
  };

  const restartQuiz = () => {
    setAnswers({});
    setScreen('WELCOME');
  };

  return (
    <div className="min-h-screen bg-slate-50">
        {/* Header - Simple persistent sticky header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
                    <span className="text-xl font-bold text-slate-800 tracking-tight">PARF<span className="font-light text-slate-500 hidden sm:inline"> | Profile Assessment</span></span>
                </div>
            </div>
        </header>

      <main className="container mx-auto px-4 py-6">
        {screen === 'WELCOME' && <WelcomeScreen onStart={startQuiz} />}
        {screen === 'QUIZ' && <QuizScreen onComplete={completeQuiz} />}
        {screen === 'RESULT' && <ResultScreen answers={answers} onRestart={restartQuiz} />}
      </main>
      
      <footer className="text-center py-8 text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} PARF Assessment System.
      </footer>
    </div>
  );
};

export default App;