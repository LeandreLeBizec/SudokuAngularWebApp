
export const LEVELS = ['easy', 'medium', 'hard', 'very-hard', 'insane', 'inhuman'] as const;
export type LevelValue = typeof LEVELS[number];
