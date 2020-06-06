import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../store/Store';
import { PsiTierCosts } from '../constants/PsiTierCosts';
import { PsiAbilityCosts } from '../constants/PsiAbilityCosts';
import { StatCosts } from '../constants/StatCosts';
import { WeaponCosts } from '../constants/WeaponCosts';
import { TechCosts } from '../constants/TechCosts';
import { JobTraitGroups } from '../lib/JobTraitGroups';

export function Total() {
  const difficulty = useSelector((state: StoreState) => state.difficulty);
  const stats = useSelector((state: StoreState) => state.stats);
  const weapons = useSelector((state: StoreState) => state.weapons);
  const tiers = useSelector((state: StoreState) => state.tiers);
  const techs = useSelector((state: StoreState) => state.techs);
  const jobTraits = useSelector((state: StoreState) => state.jobTraits);
  const discount = useMemo(
    () =>
      jobTraits.traits.reduce((total, traitLabel, i) => {
        if (traitLabel) {
          const trait = JobTraitGroups[jobTraits.job][i].find((trait) => trait.label === traitLabel);
          if (trait) {
            total -= trait.costMod(difficulty);
          } else {
            console.warn(`sanity check: trait "${traitLabel}" did not exist for ${jobTraits.job} in year ${i}`);
          }
        }
        return total;
      }, 0),
    [jobTraits, difficulty]
  );
  const psiCosts = useMemo(
    () =>
      tiers.reduce(
        (total, tier, i) =>
          total +
          (tier.enabled ? PsiTierCosts[difficulty][i] : 0) +
          tier.abilities.length * PsiAbilityCosts[difficulty][i],
        0
      ),
    [tiers, difficulty]
  );
  const statCosts = useMemo(
    () =>
      Object.values(stats).reduce(
        (total, stat) => total + StatCosts[difficulty].slice(0, stat - 1).reduce((t, c) => t + c, 0),
        0
      ),
    [stats, difficulty]
  );
  const weaponCosts = useMemo(
    () =>
      Object.values(weapons).reduce(
        (total, weapon) => total + WeaponCosts[difficulty].slice(0, weapon).reduce((t, c) => t + c, 0),
        0
      ),
    [weapons, difficulty]
  );
  const techCosts = useMemo(
    () =>
      Object.values(techs).reduce(
        (total, tech) => total + TechCosts[difficulty].slice(0, tech).reduce((t, c) => t + c, 0),
        0
      ),
    [techs, difficulty]
  );
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
        <h2>Total</h2>
      </span>
      <span>{discount + psiCosts + statCosts + weaponCosts + techCosts}</span>
    </div>
  );
}
