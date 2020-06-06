import { Techs as Values } from '../../constants/Techs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const Techs = createSlice({
  name: 'Techs',
  initialState: {
    [Values.HACKING]: 0,
    [Values.REPAIR]: 0,
    [Values.MODIFY]: 0,
    [Values.MAINTENANCE]: 0,
    [Values.RESEARCH]: 0,
  },
  reducers: {
    setTech: (state, { payload: { tech, value } }: PayloadAction<{ tech: Values; value: number }>) => {
      state[tech] = Math.floor(Math.max(0, Math.min(6, value)));
    },
  },
});
