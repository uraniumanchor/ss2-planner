import { Jobs } from '../constants/Jobs';
import produce from 'immer';
import { Weapons } from '../constants/Weapons';
import { WeaponCosts } from '../constants/WeaponCosts';
import { Stats } from '../constants/Stats';
import { StatCosts } from '../constants/StatCosts';
import { Techs } from '../constants/Techs';
import { TechCosts } from '../constants/TechCosts';
import { PsiTierCosts } from '../constants/PsiTierCosts';
import { PsiAbilityCosts } from '../constants/PsiAbilityCosts';
import { StoreState } from '../store/Store';
import { Difficulty } from '../constants/Difficulty';

interface JobTrait {
  label: string;
  stateMod: (state: StoreState) => StoreState;
  costMod: (difficulty: Difficulty) => number;
}

type JobTraitGroup = {
  [key in Jobs]: JobTrait[][];
};

function addAbility(abilities: string[], ability: string) {
  if (!abilities.includes(ability)) {
    abilities.push(ability);
  }
}

export const JobTraitGroups: JobTraitGroup = {
  [Jobs.MARINE]: [
    [
      {
        label: '+1 Standard Weapons',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.weapons[Weapons.STANDARD] = Math.max(draftState.weapons[Weapons.STANDARD], 1);
          }),
        costMod: (difficulty) => WeaponCosts[difficulty][0],
      },
    ],
    [
      {
        label: '+2 Strength',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.STRENGTH] = Math.max(draftState.stats[Stats.STRENGTH], 3);
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] + StatCosts[difficulty][1],
      },
      {
        label: '+2 Endurance',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.ENDURANCE] = Math.max(draftState.stats[Stats.ENDURANCE], 3);
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] + StatCosts[difficulty][1],
      },
      {
        label: '+2 Agility',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.AGILITY] = Math.max(draftState.stats[Stats.AGILITY], 3);
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] + StatCosts[difficulty][1],
      },
    ],
    [
      {
        label: '+1 Cybernetic Affinity, +1 Energy Weapons',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.CYBER] = Math.max(draftState.stats[Stats.CYBER], 2);
            draftState.weapons[Weapons.ENERGY] = Math.max(draftState.weapons[Weapons.ENERGY], 1);
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] + WeaponCosts[difficulty][0],
      },
      {
        label: '+1 Cybernetic Affinity, +1 Heavy Weapons',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.CYBER] = Math.max(draftState.stats[Stats.CYBER], 2);
            draftState.weapons[Weapons.HEAVY] = Math.max(draftState.weapons[Weapons.HEAVY], 1);
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] + WeaponCosts[difficulty][0],
      },
      {
        label: '+2 Standard Weapons',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.weapons[Weapons.STANDARD] = Math.max(draftState.weapons[Weapons.STANDARD], 3);
          }),
        costMod: (difficulty) => WeaponCosts[difficulty][1] + WeaponCosts[difficulty][2],
      },
    ],
    [
      {
        label: '+1 Maintenance',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.techs[Techs.MAINTENANCE] = Math.max(draftState.techs[Techs.MAINTENANCE], 1);
          }),
        costMod: (difficulty) => TechCosts[difficulty][0],
      },
      {
        label: '+1 Modify',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.techs[Techs.MODIFY] = Math.max(draftState.techs[Techs.MODIFY], 1);
          }),
        costMod: (difficulty) => TechCosts[difficulty][0],
      },
      {
        label: '+1 Repair',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.techs[Techs.REPAIR] = Math.max(draftState.techs[Techs.REPAIR], 1);
          }),
        costMod: (difficulty) => TechCosts[difficulty][0],
      },
    ],
  ],
  [Jobs.NAVY]: [
    [
      {
        label: '+1 Standard Weapons',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.weapons[Weapons.STANDARD] = Math.max(draftState.weapons[Weapons.STANDARD], 1);
          }),
        costMod: (difficulty) => WeaponCosts[difficulty][0],
      },
    ],
    [
      {
        label: '+1 Hacking, +1 Strength',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.STRENGTH] = Math.max(draftState.stats[Stats.STRENGTH], 2);
            draftState.techs[Techs.HACKING] = Math.max(draftState.techs[Techs.HACKING], 1);
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] + TechCosts[difficulty][0],
      },
      {
        label: '+1 Repair, +1 Strength',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.STRENGTH] = Math.max(draftState.stats[Stats.STRENGTH], 2);
            draftState.techs[Techs.REPAIR] = Math.max(draftState.techs[Techs.REPAIR], 1);
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] + TechCosts[difficulty][0],
      },
      {
        label: '+1 Modify, +1 Strength',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.STRENGTH] = Math.max(draftState.stats[Stats.STRENGTH], 2);
            draftState.techs[Techs.MODIFY] = Math.max(draftState.techs[Techs.MODIFY], 1);
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] + TechCosts[difficulty][0],
      },
    ],
    [
      {
        label: '+2 Cybernetic Affinity',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.CYBER] = Math.max(draftState.stats[Stats.CYBER], 3);
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] + StatCosts[difficulty][1],
      },
      {
        label: '+1 Maintenance',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.techs[Techs.MAINTENANCE] = Math.max(draftState.techs[Techs.MAINTENANCE], 1);
          }),
        costMod: (difficulty) => TechCosts[difficulty][0],
      },
      {
        label: '+2 Standard Weapons',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.weapons[Weapons.STANDARD] = Math.max(draftState.weapons[Weapons.STANDARD], 3);
          }),
        costMod: (difficulty) => WeaponCosts[difficulty][1] + WeaponCosts[difficulty][2],
      },
    ],
    [
      {
        label: '+1 Research',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.techs[Techs.RESEARCH] = Math.max(draftState.techs[Techs.RESEARCH], 1);
          }),
        costMod: (difficulty) => TechCosts[difficulty][0],
      },
      {
        label: '+2 Endurance',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.ENDURANCE] = Math.max(draftState.stats[Stats.ENDURANCE], 3);
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] + StatCosts[difficulty][1],
      },
      {
        label: '+2 Agility',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.AGILITY] = Math.max(draftState.stats[Stats.AGILITY], 3);
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] + StatCosts[difficulty][1],
      },
    ],
  ],
  [Jobs.OSA]: [
    [
      {
        label: 'Tier One Psionic Disciplines',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.tiers[0].enabled = true;
          }),
        costMod: (difficulty) => PsiTierCosts[difficulty][0],
      },
    ],
    [
      {
        label: 'Tier Two Psionic Disciplines, Projected Cryokinesis, Psychogenic Cyber Affinity',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.tiers[1].enabled = true;
            addAbility(draftState.tiers[0].abilities, 'Projected Cryokinesis');
            addAbility(draftState.tiers[0].abilities, 'Psychogenic Cyber Affinity');
          }),
        costMod: (difficulty) => PsiTierCosts[difficulty][1] + PsiAbilityCosts[difficulty][0] * 2,
      },
      {
        label: 'Tier Two Psionic Disciplines, Projected Cryokinesis, Kinetic Redirection',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.tiers[1].enabled = true;
            addAbility(draftState.tiers[0].abilities, 'Projected Cryokinesis');
            addAbility(draftState.tiers[0].abilities, 'Kinetic Redirection');
          }),
        costMod: (difficulty) => PsiTierCosts[difficulty][1] + PsiAbilityCosts[difficulty][0] * 2,
      },
      {
        label: 'Tier Two Psionic Disciplines, Projected Cryokinesis, Psycho-Reflective Screen',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.tiers[1].enabled = true;
            addAbility(draftState.tiers[0].abilities, 'Projected Cryokinesis');
            addAbility(draftState.tiers[0].abilities, 'Psycho-Reflective Screen');
          }),
        costMod: (difficulty) => PsiTierCosts[difficulty][1] + PsiAbilityCosts[difficulty][0] * 2,
      },
    ],
    [
      {
        label: '+2 Psionic Ability',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.PSIONICS] = Math.max(draftState.stats[Stats.PSIONICS], 3);
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] + StatCosts[difficulty][1],
      },
      {
        label: '+1 Research',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.techs[Techs.RESEARCH] = Math.max(draftState.techs[Techs.RESEARCH], 1);
          }),
        costMod: (difficulty) => TechCosts[difficulty][0],
      },
      {
        label: '+2 Endurance',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.ENDURANCE] = Math.max(draftState.stats[Stats.ENDURANCE], 3);
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] + StatCosts[difficulty][1],
      },
    ],
    [
      {
        label: '+1 Strength, +1 Agility, +1 Cybernetic Affinity, Psychogenic Agility',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.STRENGTH] = Math.max(draftState.stats[Stats.STRENGTH], 2);
            draftState.stats[Stats.AGILITY] = Math.max(draftState.stats[Stats.AGILITY], 2);
            draftState.stats[Stats.CYBER] = Math.max(draftState.stats[Stats.CYBER], 2);
            addAbility(draftState.tiers[0].abilities, 'Psychogenic Agility');
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] * 3 + PsiAbilityCosts[difficulty][0],
      },
      {
        label: '+1 Strength, +1 Agility, +1 Cybernetic Affinity, Neuro-Reflex Dampening',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.STRENGTH] = Math.max(draftState.stats[Stats.STRENGTH], 2);
            draftState.stats[Stats.AGILITY] = Math.max(draftState.stats[Stats.AGILITY], 2);
            draftState.stats[Stats.CYBER] = Math.max(draftState.stats[Stats.CYBER], 2);
            addAbility(draftState.tiers[0].abilities, 'Neuro-Reflex Dampening');
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] * 3 + PsiAbilityCosts[difficulty][0],
      },
      {
        label: '+1 Strength, +1 Agility, +1 Cybernetic Affinity, Remote Electron Tampering',
        stateMod: (state) =>
          produce(state, (draftState) => {
            draftState.stats[Stats.STRENGTH] = Math.max(draftState.stats[Stats.STRENGTH], 2);
            draftState.stats[Stats.AGILITY] = Math.max(draftState.stats[Stats.AGILITY], 2);
            draftState.stats[Stats.CYBER] = Math.max(draftState.stats[Stats.CYBER], 2);
            addAbility(draftState.tiers[0].abilities, 'Remote Electron Tampering');
          }),
        costMod: (difficulty) => StatCosts[difficulty][0] * 3 + PsiAbilityCosts[difficulty][0],
      },
    ],
  ],
};
