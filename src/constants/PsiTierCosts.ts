import { Difficulty } from './Difficulty';

export const PsiTierCosts = {
  [Difficulty.EASY]: [8, 17, 25, 42, 63],
  [Difficulty.NORMAL]: [10, 20, 30, 50, 75],
  [Difficulty.HARD]: [13, 27, 41, 69, 104],
  [Difficulty.IMPOSSIBLE]: [17, 35, 53, 89, 134],
};
