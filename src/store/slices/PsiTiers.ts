import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PsiTierCosts } from '../../constants/PsiTierCosts';
import { Difficulty } from '../../constants/Difficulty';
import { PsiAbilityNames } from '../../constants/PsiAbilityNames';

interface Tier {
  enabled: boolean;
  abilities: string[];
}

export const PsiTiers = createSlice({
  name: 'PsiTiers',
  initialState: new Array<Tier>(PsiTierCosts[Difficulty.EASY].length).fill({
    enabled: false,
    abilities: [],
  }) as Tier[],
  reducers: {
    activateTier: (state, { payload }: PayloadAction<number>) => {
      state[payload].enabled = true;
    },
    deactivateTier: (state, { payload }: PayloadAction<number>) => {
      state[payload].enabled = false;
      state[payload].abilities = [];
    },
    activateAbility: (state, { payload }: PayloadAction<string>) => {
      const tier = PsiAbilityNames.findIndex((tier) => tier.includes(payload));
      if (tier === -1) {
        throw new Error(`could not find ability named "${payload}`);
      }
      if (!state[tier].abilities.includes(payload)) {
        state[tier].abilities.push(payload);
      }
    },
    deactivateAbility: (state, { payload }: PayloadAction<string>) => {
      const tier = PsiAbilityNames.findIndex((tier) => tier.includes(payload));
      if (tier === -1) {
        throw new Error(`could not find ability named "${payload}`);
      }
      state[tier].abilities = state[tier].abilities.filter((a) => a !== payload);
    },
  },
});
