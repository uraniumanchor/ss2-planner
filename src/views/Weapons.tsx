import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store/Store';
import React from 'react';
import { Weapons as Values } from '../constants/Weapons';
import { Weapons as Slice } from '../store/slices/Weapons';
import { WeaponCosts } from '../constants/WeaponCosts';

export function WeaponLine({
  weapon,
  value,
}: {
  weapon: Values;
  value: number;
}) {
  const dispatch = useDispatch();
  const difficulty = useSelector((state: StoreState) => state.difficulty);
  return (
    <>
      <span style={{ gridColumn: 1 }}>{weapon}</span>
      <span style={{ gridColumn: 2 }}>
        <input
          value={value}
          min={0}
          max={6}
          type="number"
          onChange={(e) =>
            dispatch(
              Slice.actions.setWeapon({ weapon, value: +e.target.value })
            )
          }
        />
      </span>
      <span style={{ gridColumn: 3 }}>
        {value !== 6 ? WeaponCosts[difficulty][value] : 'max'}
      </span>
    </>
  );
}

export function Weapons() {
  const weapons = useSelector((state: StoreState) => state.weapons);
  return (
    <div style={{ display: 'grid' }}>
      <h2>Weapons</h2>
      <span style={{ gridColumn: 1 }}>Skill</span>
      <span style={{ gridColumn: 2 }}>Level</span>
      <span style={{ gridColumn: 3 }}>Cost</span>
      <WeaponLine weapon={Values.STANDARD} value={weapons[Values.STANDARD]} />
      <WeaponLine weapon={Values.ENERGY} value={weapons[Values.ENERGY]} />
      <WeaponLine weapon={Values.HEAVY} value={weapons[Values.HEAVY]} />
      <WeaponLine weapon={Values.EXOTIC} value={weapons[Values.EXOTIC]} />
    </div>
  );
}
