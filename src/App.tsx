import React from 'react';
import './App.css';
import { Breakpoints } from './views/Breakpoints';
import { PsiGrid } from './views/PsiGrid';
import { Difficulty } from './views/Difficulty';
import { Total } from './views/Total';
import { Stats } from './views/Stats';
import { Weapons } from './views/Weapons';
import { Techs } from './views/Techs';

function App() {
  return (
    <div>
      <Total />
      <Difficulty />
      <Stats />
      <Weapons />
      <Techs />
      <PsiGrid />
      <Breakpoints />
    </div>
  );
}

export default App;
