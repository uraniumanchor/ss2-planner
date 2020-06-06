import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store/Store';
import { JobTraits } from '../store/slices/JobTraits';
import { Jobs as Values } from '../constants/Jobs';
import React from 'react';
import { JobTraitGroups } from '../lib/JobTraitGroups';

export function Jobs() {
  const { job, traits } = useSelector((state: StoreState) => state.jobTraits);
  const difficulty = useSelector((state: StoreState) => state.difficulty);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gridTemplateColumns: '1fr 2fr',
        gap: 4,
      }}
    >
      <span>
        <h2>Job</h2>
      </span>
      <span>
        <select onChange={(e) => dispatch(JobTraits.actions.setJob(e.target.value as Values))} defaultValue={job}>
          {Object.entries(Values).map(([k, v]) => (
            <option key={k} value={v}>
              {v}
            </option>
          ))}
        </select>
      </span>
      <span>Year 0</span>
      <span>
        {traits[0]} ({JobTraitGroups[job][0][0].costMod(difficulty)})
      </span>
      {traits.slice(1).map((trait, i) => (
        <React.Fragment key={i}>
          <span>Year {i + 1}</span>
          <span>
            <select
              defaultValue={trait}
              onChange={(e) => dispatch(JobTraits.actions.setTrait({ year: i + 1, trait: e.target.value }))}
            >
              <option value=''>---</option>
              {JobTraitGroups[job][i + 1].map((choice) => (
                <option key={choice.label} value={choice.label}>
                  {choice.label} ({choice.costMod(difficulty)})
                </option>
              ))}
            </select>
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}
