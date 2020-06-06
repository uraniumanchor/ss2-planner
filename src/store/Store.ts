import { createStore, combineReducers } from 'redux';
import { Breakpoints } from './slices/Breakpoints';
import { PsiTiers } from './slices/PsiTiers';
import { Difficulty } from './slices/Difficulty';
import { Stats } from './slices/Stats';
import { Weapons } from './slices/Weapons';
import { Techs } from './slices/Techs';
import { JobTraits } from './slices/JobTraits';
import { JobTraitGroups } from '../lib/JobTraitGroups';

const reducer = combineReducers({
  breakpoints: Breakpoints.reducer,
  tiers: PsiTiers.reducer,
  difficulty: Difficulty.reducer,
  stats: Stats.reducer,
  weapons: Weapons.reducer,
  techs: Techs.reducer,
  jobTraits: JobTraits.reducer,
});

const jobModifiers: typeof reducer = (state, action) => {
  state = reducer(state, action);
  state = state.jobTraits.traits.reduce((state, traitLabel, i) => {
    if (traitLabel) {
      const trait = JobTraitGroups[state.jobTraits.job][i].find((trait) => trait.label === traitLabel);
      if (trait) {
        state = trait.stateMod(state);
      } else {
        console.warn(`sanity check: trait "${traitLabel}" did not exist for ${state.jobTraits.job} in year ${i}`);
      }
    }
    return state;
  }, state);
  return state;
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: StoreState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

export const store = createStore(jobModifiers, loadState());

store.subscribe(() => {
  saveState(store.getState());
});

export type StoreState = ReturnType<typeof store.getState>;
