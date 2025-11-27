export type ProfileType = 'P' | 'A' | 'R' | 'F';

export interface Option {
  id: string;
  text: string;
  profile: ProfileType;
}

export interface QuestionBlock {
  id: number;
  options: Option[];
}

export interface AnswerState {
  [questionId: number]: {
    most: string | null; // ID of the option selected as "Mais"
    least: string | null; // ID of the option selected as "Menos"
  };
}

export interface ScoreResult {
  P: number;
  A: number;
  R: number;
  F: number;
}

export const PROFILE_NAMES: Record<ProfileType, string> = {
  P: 'Performance',
  A: 'Agradador',
  R: 'Racional',
  F: 'Fugitivo'
};

export const PROFILE_COLORS: Record<ProfileType, string> = {
  P: '#ef4444', // Red-500
  A: '#22c55e', // Green-500
  R: '#3b82f6', // Blue-500
  F: '#eab308'  // Yellow-500
};

export const PROFILE_DESCRIPTIONS: Record<ProfileType, string> = {
  P: 'Focado em resultados, competitivo e busca constantemente a superação. Pode se tornar workaholic e impaciente.',
  A: 'Busca aceitação e harmonia. Tende a colocar as necessidades dos outros acima das suas, com dificuldade em dizer não.',
  R: 'Analítico, lógico e objetivo. Tende a reprimir emoções e pode parecer frio ou distante em situações sociais.',
  F: 'Evita conflitos, tarefas difíceis e desconforto emocional. Tende a procrastinar ou se distrair facilmente.'
};