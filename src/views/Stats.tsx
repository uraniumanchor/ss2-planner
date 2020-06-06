import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store/Store';
import React from 'react';
import { Stats as Values } from '../constants/Stats';
import { Stats as Slice } from '../store/slices/Stats';
import { StatCosts } from '../constants/StatCosts';

export function StatLine({ stat, value }: { stat: Values; value: number }) {
  const dispatch = useDispatch();
  const difficulty = useSelector((state: StoreState) => state.difficulty);
  return (
    <>
      <span>{stat}</span>
      <span>
        <input
          value={value}
          min={1}
          max={6}
          type='number'
          onChange={(e) => dispatch(Slice.actions.setStat({ stat, value: +e.target.value }))}
        />
      </span>
      <span>{value !== 6 ? StatCosts[difficulty][value - 1] : 'max'}</span>
    </>
  );
}

export function Stats() {
  const stats = useSelector((state: StoreState) => state.stats);
  return (
    <div
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'space-around',
        gridTemplateColumns: '4fr 2fr 1fr',
        gap: 4,
      }}
    >
      <h2 style={{ gridColumn: '1 / 4' }}>Stats</h2>
      <span>Skill</span>
      <span>Level</span>
      <span>Cost</span>
      <StatLine stat={Values.STRENGTH} value={stats[Values.STRENGTH]} />
      <StatLine stat={Values.ENDURANCE} value={stats[Values.ENDURANCE]} />
      <StatLine stat={Values.PSIONICS} value={stats[Values.PSIONICS]} />
      <StatLine stat={Values.AGILITY} value={stats[Values.AGILITY]} />
      <StatLine stat={Values.CYBER} value={stats[Values.CYBER]} />
    </div>
  );
}
