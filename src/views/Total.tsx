import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../store/Store';
import { PsiTierCosts } from '../constants/PsiTierCosts';
import { PsiAbilityCosts } from '../constants/PsiAbilityCosts';
import { StatCosts } from '../constants/StatCosts';
import { WeaponCosts } from '../constants/WeaponCosts';
import { TechCosts } from '../constants/TechCosts';

export function Total() {
  const difficulty = useSelector((state: StoreState) => state.difficulty);
  const stats = useSelector((state: StoreState) => state.stats);
  const weapons = useSelector((state: StoreState) => state.weapons);
  const tiers = useSelector((state: StoreState) => state.tiers);
  const techs = useSelector((state: StoreState) => state.techs);
  const total = useMemo(() => {
    return (
      tiers.reduce(
        (total, tier, i) =>
          total +
          (tier.enabled ? PsiTierCosts[difficulty][i] : 0) +
          tier.abilities.length * PsiAbilityCosts[difficulty][i],
        0
      ) +
      Object.values(stats).reduce((total, stat) => {
        return total + StatCosts[difficulty].slice(0, stat - 1).reduce((t, c) => t + c, 0);
      }, 0) +
      Object.values(weapons).reduce((total, weapon) => {
        return total + WeaponCosts[difficulty].slice(0, weapon).reduce((t, c) => t + c, 0);
      }, 0) +
      Object.values(techs).reduce((total, tech) => {
        return total + TechCosts[difficulty].slice(0, tech).reduce((t, c) => t + c, 0);
      }, 0)
    );
  }, [tiers, difficulty, stats, weapons, techs]);
  return <div>{total}</div>;
}
