import { PsiAbilityNames } from '../constants/PsiAbilityNames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store/Store';
import { PsiTiers } from '../store/slices/PsiTiers';
import { PsiTierCosts } from '../constants/PsiTierCosts';
import { PsiAbilityCosts } from '../constants/PsiAbilityCosts';

export function PsiGrid() {
  const tiers = useSelector((state: StoreState) => state.tiers);
  const difficulty = useSelector((state: StoreState) => state.difficulty);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'space-around',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '12px',
        margin: '0 12px',
      }}
    >
      {tiers.map((tier, i) => (
        <div
          key={i}
          style={{
            display: 'grid',
            alignItems: 'center',
            justifyContent: 'space-around',
            gridTemplateColumns: '8fr 2fr 1fr',
            gap: '4px',
          }}
        >
          <span>
            <h2>Tier {i + 1}</h2>
          </span>
          <span>
            <input
              type={'checkbox'}
              checked={tier.enabled}
              onChange={(e) =>
                dispatch(e.target.checked ? PsiTiers.actions.activateTier(i) : PsiTiers.actions.deactivateTier(i))
              }
            />
          </span>
          <span>{PsiTierCosts[difficulty][i]}</span>
          <span>Name</span>
          <span>Active</span>
          <span>Cost</span>
          {PsiAbilityNames[i].map((name) => (
            <React.Fragment key={name}>
              <span>{name}</span>
              <span>
                {' '}
                <input
                  type={'checkbox'}
                  checked={tier.abilities.includes(name)}
                  onChange={(e) =>
                    dispatch(
                      e.target.checked
                        ? PsiTiers.actions.activateAbility(name)
                        : PsiTiers.actions.deactivateAbility(name)
                    )
                  }
                />
              </span>
              <span> {PsiAbilityCosts[difficulty][i]}</span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}
