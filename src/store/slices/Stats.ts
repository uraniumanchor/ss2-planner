import { Stats as Values } from '../../constants/Stats';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const Stats = createSlice({
  name: 'Stats',
  initialState: {
    [Values.STRENGTH]: 1,
    [Values.ENDURANCE]: 1,
    [Values.PSIONICS]: 1,
    [Values.AGILITY]: 1,
    [Values.CYBER]: 1,
  },
  reducers: {
    setStat: (
      state,
      {
        payload: { stat, value },
      }: PayloadAction<{ stat: Values; value: number }>
    ) => {
      state[stat] = Math.floor(Math.max(1, Math.min(6, value)));
    },
  },
});
