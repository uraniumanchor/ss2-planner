import React from 'react';
import './App.css';
// import { Breakpoints } from './views/Breakpoints';
import { PsiGrid } from './views/PsiGrid';
import { Difficulty } from './views/Difficulty';
import { Total } from './views/Total';
import { Stats } from './views/Stats';
import { Weapons } from './views/Weapons';
import { Techs } from './views/Techs';
import { Jobs } from './views/Jobs';

function App() {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', margin: '0 12px' }}>
        <Total />
        <Difficulty />
        <Jobs />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', margin: '0 12px' }}>
        <Stats />
        <Weapons />
        <Techs />
      </div>
      <PsiGrid />
      {/*<Breakpoints />*/}
    </div>
  );
}

export default App;
