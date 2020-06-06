import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store/Store';
import React from 'react';
import { Techs as Values } from '../constants/Techs';
import { Techs as Slice } from '../store/slices/Techs';
import { TechCosts } from '../constants/TechCosts';

export function TechLine({ tech, value }: { tech: Values; value: number }) {
  const dispatch = useDispatch();
  const difficulty = useSelector((state: StoreState) => state.difficulty);
  return (
    <>
      <span>{tech}</span>
      <span>
        <input
          value={value}
          min={0}
          max={6}
          type='number'
          onChange={(e) => dispatch(Slice.actions.setTech({ tech: tech, value: +e.target.value }))}
        />
      </span>
      <span>{value !== 6 ? TechCosts[difficulty][value] : 'max'}</span>
    </>
  );
}

export function Techs() {
  const techs = useSelector((state: StoreState) => state.techs);
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
      <h2 style={{ gridColumn: '1 / 4' }}>Techs</h2>
      <span>Skill</span>
      <span>Level</span>
      <span>Cost</span>
      <TechLine tech={Values.HACKING} value={techs[Values.HACKING]} />
      <TechLine tech={Values.REPAIR} value={techs[Values.REPAIR]} />
      <TechLine tech={Values.MODIFY} value={techs[Values.MODIFY]} />
      <TechLine tech={Values.MAINTENANCE} value={techs[Values.MAINTENANCE]} />
      <TechLine tech={Values.RESEARCH} value={techs[Values.RESEARCH]} />
    </div>
  );
}
