// Code snippets for the MemoizedComponents example

export const codeSnippets = {
  regularChild: `// RegularChild.tsx - Non-memoized child component using Redux
import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { selectCount1, selectExpensiveValue, incrementCount1 } from '../memoizedComponents.slice';

const RegularChild: React.FC = () => {
    const dispatch = useAppDispatch();
    const count1 = useAppSelector(selectCount1);
    const expensiveValue = useAppSelector(selectExpensiveValue);
    
    return (
        <div>
            <h3>
                Regular Child Component (Redux)
            </h3>
            <p>🔄 Always re-renders on ANY Redux state change</p>
            <p>Value: {count1}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={() => dispatch(incrementCount1())}>
                Increment
            </button>
        </div>
    );
};

export default RegularChild;

// This component will re-render every time ANY Redux state changes
// because it subscribes to the store via useAppSelector`,

  reduxSlice: `// memoizedComponents.slice.ts - Redux Toolkit slice
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MemoizedComponentsState {
    count1: number;
    multiplier: number;
    unrelatedState: string;
}

const initialState: MemoizedComponentsState = {
    count1: 0,
    multiplier: 1,
    unrelatedState: '',
};

const memoizedComponentsSlice = createSlice({
    name: 'memoizedComponents',
    initialState,
    reducers: {
        incrementCount1: (state) => {
            state.count1 += 1;
        },
        setMultiplier: (state, action: PayloadAction<number>) => {
            state.multiplier = action.payload;
        },
        setUnrelatedState: (state, action: PayloadAction<string>) => {
            state.unrelatedState = action.payload;
        },
    },
});

export const { incrementCount1, setMultiplier, setUnrelatedState } = memoizedComponentsSlice.actions;

// Selectors for accessing state
export const selectCount1 = (state) => state.memoizedComponents.count1;
export const selectMultiplier = (state) => state.memoizedComponents.multiplier;
export const selectUnrelatedState = (state) => state.memoizedComponents.unrelatedState;

export const selectExpensiveValue = (state) => {
    console.log('Computing expensive value (from Redux)...');
    return state.memoizedComponents.multiplier * 1000;
}

export default memoizedComponentsSlice.reducer;`,

  memoizedChild: `// MemoizedChild.tsx - Memoized child component using Redux
import React, { memo } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { selectCount1, selectExpensiveValue, incrementCount1 } from '../memoizedComponents.slice';

const MemoizedChild = memo(() => {
    const dispatch = useAppDispatch();
    const count1 = useAppSelector(selectCount1);
    const expensiveValue = useAppSelector(selectExpensiveValue);
    
    return (
        <div>
            <h3>
                Memoized Child Component (Redux)
            </h3>
            <p>⚠️ React.memo + Redux rerenders when the subscribed state updates</p>
            <p>Value: {count1}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={() => dispatch(incrementCount1())}>
                Increment
            </button>
        </div>
    );
});

MemoizedChild.displayName = 'MemoizedChild';
export default MemoizedChild;

// React.memo() has limited effectiveness with Redux because
// useAppSelector causes re-renders on any subscribed state change`,

  expensiveComponentBad: `// ExpensiveComponentBad.tsx - Expensive calculation WITHOUT useMemo (Redux)
import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { selectMultiplier } from '../memoizedComponents.slice';

function calculateExpensiveValue(multiplier: number): number {
    console.log('❌ BAD: Recalculating expensive value on every render');
    return multiplier * 1000;
}

const ExpensiveComponentBad: React.FC = () => {
    const multiplier = useAppSelector(selectMultiplier);
    
    // ❌ BAD: This will recalculate on every render
    const expensiveValue = calculateExpensiveValue(multiplier);

    return (
        <div>
            <h3>
                ❌ Non-Memoized Calculation (Redux)
            </h3>
            <p>🔄 Recalculates on every render (expensive)</p>
            <p>Multiplier: {multiplier}</p>
            <p>Expensive Value: {expensiveValue}</p>
        </div>
    );
};

export default ExpensiveComponentBad;

// This component recalculates the expensive value on EVERY render
// Even when unrelated state changes. Check the console logs.`,

  expensiveComponentGood: `// ExpensiveComponentGood.tsx - Uses memoized selector in Redux
import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { selectExpensiveValue, selectMultiplier } from '../memoizedComponents.slice';

const ExpensiveComponentGood: React.FC = () => {
    const multiplier = useAppSelector(selectMultiplier);
    const expensiveValue = useAppSelector(selectExpensiveValue); // Memoized in selector
    
    return (
        <div>
            <h3>
                ✅ Memoized Calculation (Redux)
            </h3>
            <p>🧮 Calculation memoized in Redux selector</p>
            <p>Multiplier: {multiplier}</p>
            <p>Expensive Value: {expensiveValue}</p>
        </div>
    );
};

export default ExpensiveComponentGood;

// Redux selector (selectExpensiveValue) memoizes the expensive calculation
// Only recalculates when the multiplier state actually changes`,

  parentComponent: `// MemoizedComponentsExample.tsx - Redux Parent component
import React from 'react';
import RegularChild from './components/RegularChild';
import MemoizedChild from './components/MemoizedChild';
import MemoizedChildWithBadCallback from './components/MemoizedChildWithBadCallback';
import ExpensiveComponentBad from './components/ExpensiveComponentBad';
import ExpensiveComponentGood from './components/ExpensiveComponentGood';
import ParentControls from './components/ParentControls';

const MemoizedComponentsExample: React.FC = () => {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2>
                Memoized Components Example (Redux)
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
                {/* Parent controls for managing Redux state */}
                <ParentControls />
                
                {/* Redux child components - no props needed, use Redux hooks */}
                <RegularChild />
                <MemoizedChildWithBadCallback />
                <MemoizedChild />
                
                {/* Expensive computation examples with Redux */}
                <ExpensiveComponentBad />
                <ExpensiveComponentGood />
            </div>
        </div>
    );
};

export default MemoizedComponentsExample;

// Redux eliminates the need for prop drilling but memoization patterns still apply
// Components still re-render when their selected Redux state changes`,

  memoizedChildWithBadCallback: `// MemoizedChildWithBadCallback.tsx - Redux version with non-memoized function
import React, { memo } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { selectCount1, selectExpensiveValue, incrementCount1 } from '../memoizedComponents.slice';

const MemoizedChildWithBadCallback = memo(() => {
    const dispatch = useAppDispatch();
    const count1 = useAppSelector(selectCount1);
    const expensiveValue = useAppSelector(selectExpensiveValue);
    
    // This demonstrates the "bad" pattern - creating a new function on every render
    const handleIncrement = () => dispatch(incrementCount1());
    
    return (
        <div>
            <h3>
                Memoized Child + Non-Memoized Function (Redux)
            </h3>
            <p>⚠️ React.memo + Redux with a non memoized function still rerenders</p>
            <p>Value: {count1}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={handleIncrement}>
                Increment
            </button>
        </div>
    );
});

MemoizedChildWithBadCallback.displayName = 'MemoizedChildWithBadCallback';
export default MemoizedChildWithBadCallback;

// Even with React.memo(), this component re-renders because Redux state changes
// Plus creating new function references on every render prevents memoization benefits`
};

export const explanations = {
  regularChild: "This component re-renders every time ANY Redux state changes because it's NOT wrapped in React.memo() and subscribes to Redux store. Without memo, Redux components always re-render when their subscribed state changes.",
  
  memoizedChild: "This component is wrapped in React.memo() but still re-renders on ANY Redux state change. React.memo() with Redux only prevents re-renders if the component doesn't subscribe to the store, but since it uses useAppSelector, it will re-render whenever any subscribed state changes.",
  
  expensiveComponentBad: "This component demonstrates expensive calculations without useMemo in Redux. The expensive calculation runs on every render when ANY Redux state changes. Notice how it logs to the console every time you change unrelated state.",
  
  expensiveComponentGood: "This component uses useMemo() to memoize expensive calculations even with Redux. It only recalculates when the specific 'multiplier' dependency changes, not on every Redux state change. This shows useMemo still works within Redux components.",
  
  parentComponent: "The Redux parent component demonstrates how state management shifts from local state and props to Redux store subscriptions. Each child component uses useAppSelector/useAppDispatch instead of receiving props. This shows how Redux changes the rendering patterns compared to props-based state management.",

  memoizedChildWithBadCallback: "This Redux component shows that React.memo() has limited effectiveness with Redux. Even though it's memoized, it re-renders whenever ANY Redux state changes because it subscribes to the store via useAppSelector. Redux components have different optimization strategies compared to props-based components."
};