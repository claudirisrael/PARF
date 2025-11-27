import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { RefreshCcw, Award, Share2 } from 'lucide-react';
import { AnswerState, ProfileType, PROFILE_NAMES, PROFILE_DESCRIPTIONS, PROFILE_COLORS, ScoreResult } from '../types';
import { QUESTIONS } from '../constants';

interface ResultScreenProps {
  answers: AnswerState;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ answers, onRestart }) => {
  // Calculate Scores
  const calculateScores = (): ScoreResult => {
    const scores: ScoreResult = { P: 0, A: 0, R: 0, F: 0 };

    QUESTIONS.forEach((block) => {
      const answer = answers[block.id];
      if (answer) {
        if (answer.most) {
          const option = block.options.find((o) => o.id === answer.most);
          if (option) scores[option.profile] += 4;
        }
        if (answer.least) {
          const option = block.options.find((o) => o.id === answer.least);
          if (option) scores[option.profile] -= 2;
        }
      }
    });

    return scores;
  };

  const scores = calculateScores();
  
  // Prepare data for chart
  const data = (Object.keys(scores) as ProfileType[]).map((key) => ({
    name: PROFILE_NAMES[key],
    key: key,
    score: scores[key],
    fill: PROFILE_COLORS[key]
  }));

  // Find dominant profile
  const dominantProfileKey = (Object.keys(scores) as ProfileType[]).reduce((a, b) => 
    scores[a] > scores[b] ? a : b
  );

  const dominantProfileName = PROFILE_NAMES[dominantProfileKey];
  const dominantProfileDesc = PROFILE_DESCRIPTIONS[dominantProfileKey];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in pb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Seu Resultado</h2>
        <p className="text-slate-500">Baseado nas suas 32 respostas</p>
      </div>

      {/* Dominant Card */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 mb-12" style={{ borderColor: PROFILE_COLORS[dominantProfileKey] }}>
        <div className="p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-slate-50 rounded-full mb-6">
            <Award size={48} style={{ color: PROFILE_COLORS[dominantProfileKey] }} />
          </div>
          <h3 className="text-xl text-slate-500 uppercase tracking-widest font-semibold mb-2">Perfil Dominante</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{dominantProfileName}</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {dominantProfileDesc}
          </p>
        </div>
        <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex justify-center">
            <span className="text-2xl font-bold" style={{ color: PROFILE_COLORS[dominantProfileKey] }}>
                {scores[dominantProfileKey]} Pontos
            </span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Gráfico de Perfil</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="score" radius={[8, 8, 0, 0]} barSize={50}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-center">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Detalhamento</h3>
          <div className="space-y-6">
            {data.sort((a,b) => b.score - a.score).map((item) => (
              <div key={item.key} className="relative">
                <div className="flex justify-between items-end mb-1">
                  <span className="font-semibold text-slate-700">{item.name}</span>
                  <span className="font-bold" style={{ color: item.fill }}>{item.score} pts</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-3 rounded-full" 
                    style={{ width: `${Math.max(0, Math.min(100, (item.score / 128) * 100))}%`, backgroundColor: item.fill }} // Normalized roughly for visual
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={onRestart}
          className="flex items-center px-6 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-900 transition-colors shadow-lg"
        >
          <RefreshCcw className="w-5 h-5 mr-2" />
          Refazer Teste
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm"
        >
          <Share2 className="w-5 h-5 mr-2" />
          Imprimir / Salvar PDF
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;