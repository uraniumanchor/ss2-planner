import { Difficulty } from './Difficulty';

export const StatCosts = {
  [Difficulty.EASY]: [2, 6, 12, 25, 42],
  [Difficulty.NORMAL]: [3, 8, 15, 30, 50],
  [Difficulty.HARD]: [4, 11, 20, 41, 69],
  [Difficulty.IMPOSSIBLE]: [5, 14, 26, 53, 89],
};
