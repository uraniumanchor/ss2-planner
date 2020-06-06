import { Weapons as Values } from '../../constants/Weapons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const Weapons = createSlice({
  name: 'Weapons',
  initialState: {
    [Values.STANDARD]: 0,
    [Values.ENERGY]: 0,
    [Values.HEAVY]: 0,
    [Values.EXOTIC]: 0,
  },
  reducers: {
    setWeapon: (
      state,
      {
        payload: { weapon, value },
      }: PayloadAction<{ weapon: Values; value: number }>
    ) => {
      state[weapon] = Math.floor(Math.max(0, Math.min(6, value)));
    },
  },
});
