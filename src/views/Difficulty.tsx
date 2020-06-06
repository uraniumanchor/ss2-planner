import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store/Store';
import React from 'react';
import { Difficulty as Values } from '../constants/Difficulty';
import { Difficulty as Slice } from '../store/slices/Difficulty';

export function Difficulty() {
  const difficulty = useSelector((state: StoreState) => state.difficulty);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'grid', alignItems: 'center', justifyContent: 'space-around' }}>
      <h2 style={{ gridColumn: 1 }}>Difficulty</h2>
      <select
        style={{ gridColumn: 2 }}
        onChange={(e) => dispatch(Slice.actions.setDifficulty(e.target.value as Values))}
      >
        {' '}
        {Object.entries(Values).map(([k, v]) => (
          <option key={k} value={v} selected={difficulty === v}>
            {v}
          </option>
        ))}
      </select>
    </div>
  );
}
