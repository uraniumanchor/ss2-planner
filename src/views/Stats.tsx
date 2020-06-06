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
      <span style={{ gridColumn: 1 }}>{stat}</span>
      <span style={{ gridColumn: 2 }}>
        <input
          value={value}
          min={1}
          max={6}
          type="number"
          onChange={(e) =>
            dispatch(Slice.actions.setStat({ stat, value: +e.target.value }))
          }
        />
      </span>
      <span style={{ gridColumn: 3 }}>
        {value !== 6 ? StatCosts[difficulty][value - 1] : 'max'}
      </span>
    </>
  );
}

export function Stats() {
  const stats = useSelector((state: StoreState) => state.stats);
  return (
    <div style={{ display: 'grid' }}>
      <h2>Stats</h2>
      <span style={{ gridColumn: 1 }}>Skill</span>
      <span style={{ gridColumn: 2 }}>Level</span>
      <span style={{ gridColumn: 3 }}>Cost</span>
      <StatLine stat={Values.STRENGTH} value={stats[Values.STRENGTH]} />
      <StatLine stat={Values.ENDURANCE} value={stats[Values.ENDURANCE]} />
      <StatLine stat={Values.PSIONICS} value={stats[Values.PSIONICS]} />
      <StatLine stat={Values.AGILITY} value={stats[Values.AGILITY]} />
      <StatLine stat={Values.CYBER} value={stats[Values.CYBER]} />
    </div>
  );
}
