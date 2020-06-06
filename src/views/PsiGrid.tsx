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
    <div>
      {tiers.map((tier, i) => (
        <div key={i}>
          <h2>Tier {i + 1}</h2>
          <div>
            <label>
              {tier.enabled ? (
                <button onClick={() => dispatch(PsiTiers.actions.deactivateTier(i))}>Disable</button>
              ) : (
                <button onClick={() => dispatch(PsiTiers.actions.activateTier(i))}>Enable</button>
              )}
              {PsiTierCosts[difficulty][i]}
            </label>
          </div>
          {PsiAbilityNames[i].map((name) => (
            <div key={name}>
              {name}
              <label>
                {tier.abilities.includes(name) ? (
                  <button onClick={() => dispatch(PsiTiers.actions.deactivateAbility(name))}>Disable</button>
                ) : (
                  <button disabled={!tier.enabled} onClick={() => dispatch(PsiTiers.actions.activateAbility(name))}>
                    Enable
                  </button>
                )}
                {PsiAbilityCosts[difficulty][i]}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
