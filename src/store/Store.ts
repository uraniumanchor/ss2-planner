import { createStore, combineReducers } from 'redux';
import { Breakpoints } from './slices/Breakpoints';
import { PsiTiers } from './slices/PsiTiers';
import { Difficulty } from './slices/Difficulty';
import { Stats } from './slices/Stats';
import { Weapons } from './slices/Weapons';
import { Techs } from './slices/Techs';

const reducer = combineReducers({
  breakpoints: Breakpoints.reducer,
  tiers: PsiTiers.reducer,
  difficulty: Difficulty.reducer,
  stats: Stats.reducer,
  weapons: Weapons.reducer,
  techs: Techs.reducer,
});

export const store = createStore(reducer);

export type StoreState = ReturnType<typeof store.getState>;
