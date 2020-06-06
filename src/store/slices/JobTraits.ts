import { Jobs } from '../../constants/Jobs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JobTraitGroups } from '../../lib/JobTraitGroups';

type JobTraitsState = {
  job: Jobs;
  traits: string[];
};

const InitialState: JobTraitsState = {
  job: Jobs.MARINE,
  traits: [JobTraitGroups[Jobs.MARINE][0][0].label, '', '', ''],
};

export const JobTraits = createSlice({
  name: 'JobTraits',
  initialState: InitialState,
  reducers: {
    setJob: (state, { payload }: PayloadAction<Jobs>) => {
      state.job = payload;
      state.traits = [JobTraitGroups[payload][0][0].label, '', '', ''];
    },
    setTrait: (state, { payload: { year, trait } }: PayloadAction<{ year: number; trait: string }>) => {
      state.traits[year] = trait;
    },
  },
});
