import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store/Store';
import React from 'react';
import { Difficulty as Values } from '../constants/Difficulty';
import { Difficulty as Slice } from '../store/slices/Difficulty';

export function Difficulty() {
  const difficulty = useSelector((state: StoreState) => state.difficulty);
  const dispatch = useDispatch();

  return (
    <div>
      {difficulty}
      {Object.entries(Values).map(([k, v]) => (
        <button key={k} onClick={() => dispatch(Slice.actions.setDifficulty(v))}>
          {v}
        </button>
      ))}
    </div>
  );
}
