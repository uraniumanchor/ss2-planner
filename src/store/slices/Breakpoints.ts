import { createSlice, PayloadAction } from '@reduxjs/toolkit';

function s(a: number, b: number) {
  return a - b;
}

export const Breakpoints = createSlice({
  name: 'Breakpoints',
  initialState: [] as number[],
  reducers: {
    add: (state, action: PayloadAction<number>) =>
      state.includes(action.payload)
        ? state
        : state.concat(action.payload).sort(s),
    remove: (state, action: PayloadAction<number>) =>
      state.filter((b) => b !== action.payload),
  },
});
