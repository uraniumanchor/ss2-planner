import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store/Store';
import React from 'react';
import { Difficulty as Values } from '../constants/Difficulty';
import { Difficulty as Slice } from '../store/slices/Difficulty';

export function Difficulty() {
  const difficulty = useSelector((state: StoreState) => state.difficulty);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'space-around',
        gridTemplateColumns: '2fr 1fr',
        gap: 4,
      }}
    >
      <span>
        <h2>Difficulty</h2>
      </span>
      <span>
        <select
          onChange={(e) => dispatch(Slice.actions.setDifficulty(e.target.value as Values))}
          defaultValue={difficulty}
        >
          {Object.entries(Values).map(([k, v]) => (
            <option key={k} value={v}>
              {v}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
}
