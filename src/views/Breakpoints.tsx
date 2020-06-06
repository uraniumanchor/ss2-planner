import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store/Store';
import { Breakpoints as Slice } from '../store/slices/Breakpoints';

export function Breakpoints() {
  const breakpoints = useSelector((state: StoreState) => state.breakpoints);
  const dispatch = useDispatch();
  const [breakpointToAdd, setBreakpointToAdd] = useState(0);
  return (
    <>
      <h2>Breakpoints</h2>
      {breakpoints.map((b) => (
        <div key={b}>
          {b}
          <button onClick={() => dispatch(Slice.actions.remove(b))}>-</button>
        </div>
      ))}
      <input value={breakpointToAdd} onChange={(e) => setBreakpointToAdd(+e.target.value)} type='number' />
      <button onClick={() => dispatch(Slice.actions.add(breakpointToAdd))}>Add</button>
    </>
  );
}
