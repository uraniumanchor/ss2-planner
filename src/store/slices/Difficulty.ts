import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Difficulty as Values } from '../../constants/Difficulty';

export const Difficulty = createSlice({
  name: 'Difficulty',
  initialState: Values.NORMAL,
  reducers: {
    setDifficulty: (state, { payload }: PayloadAction<Values>) => payload,
  },
});
