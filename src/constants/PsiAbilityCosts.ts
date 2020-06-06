import { Difficulty } from './Difficulty';

export const PsiAbilityCosts = {
  [Difficulty.EASY]: [2, 4, 6, 10, 17],
  [Difficulty.NORMAL]: [3, 5, 8, 12, 20],
  [Difficulty.HARD]: [4, 6, 11, 16, 27],
  [Difficulty.IMPOSSIBLE]: [5, 8, 14, 21, 35],
};
