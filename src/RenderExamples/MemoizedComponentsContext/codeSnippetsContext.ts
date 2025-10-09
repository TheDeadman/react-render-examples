// Code snippets for the MemoizedComponents Context example

export const codeSnippetsContext = {
  context: `// context.tsx - React Context for state management
import React, { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react';

interface MemoizedComponentsContextType {
    count1: number;
    count2: number;
    multiplier: number;
    unrelatedState: string;
    expensiveValue: number;
    handleIncrement1Bad: () => void;
    handleIncrement2: () => void;
    setMultiplier: (value: number) => void;
    setUnrelatedState: (value: string) => void;
}

const MemoizedComponentsContext = createContext<MemoizedComponentsContextType | undefined>(undefined);

export const MemoizedComponentsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [unrelatedState, setUnrelatedState] = useState('');

    // ❌ BAD: Creates a new function on every render
    const handleIncrement1Bad = () => setCount1(prev => prev + 1);
    
    // ✅ GOOD: Function is memoized
    const handleIncrement2 = useCallback(() => setCount2(prev => prev + 1), []);

    // ✅ GOOD: Expensive computation memoized
    const expensiveValue = useMemo(() => {
        console.log('Computing expensive value (from Context)...');
        return count1 * 1000;
    }, [count1]);

    // ❌ PROBLEM: This object is recreated on every render!
    const value = {
        count1, count2, multiplier, unrelatedState, expensiveValue,
        handleIncrement1Bad, handleIncrement2, setMultiplier, setUnrelatedState,
    };

    return (
        <MemoizedComponentsContext.Provider value={value}>
            {children}
        </MemoizedComponentsContext.Provider>
    );
};

// Context API creates new object references on every render,
// which breaks React.memo() optimizations for consumers!`,

  regularChildContext: `// RegularChildContext.tsx - Non-memoized child using Context
import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useMemoizedComponentsContext } from '../context';

const RegularChildContext: React.FC = () => {
    const { count1, handleIncrement1Bad, expensiveValue } = useMemoizedComponentsContext();

    return (
        <Paper>
            <RenderCount componentName="RegularChildContext" />
            <Typography variant="h6">
                Regular Child Component (Context)
            </Typography>
            <Typography>🔄 Always re-renders (no React.memo)</Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={handleIncrement1Bad} variant="contained">
                Increment
            </Button>
        </Paper>
    );
};

export default RegularChildContext;

// This component re-renders on every context change
// because it's not memoized and uses context`,

  memoizedChildContext: `// MemoizedChildContext.tsx - Memoized child using Context  
import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useMemoizedComponentsContext } from '../context';

const MemoizedChildContext = memo(() => {
    const { count2, handleIncrement2, expensiveValue } = useMemoizedComponentsContext();

    return (
        <Paper>
            <RenderCount componentName="MemoizedChildContext" />
            <Typography variant="h6">
                Memoized Child Component (Context)
            </Typography>
            <Typography>⚠️ React.memo + Context = Still re-renders on ANY context change!</Typography>
            <Typography>Value: {count2}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={handleIncrement2} variant="contained">
                Increment
            </Button>
        </Paper>
    );
});

export default MemoizedChildContext;

// React.memo() doesn't help with Context because the context value 
// object is recreated on every render, breaking memoization!`,

  expensiveComponentBadContext: `// ExpensiveComponentBadContext.tsx - Non-memoized expensive calculation
import React from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useMemoizedComponentsContext } from '../context';

const ExpensiveComponentBadContext: React.FC = () => {
    const { multiplier } = useMemoizedComponentsContext();
    
    // ❌ BAD: This will recalculate on every render
    const expensiveValue = (() => {
        console.log('❌ BAD (Context): Recalculating expensive value on every render!');
        return multiplier * 1000;
    })();

    return (
        <Paper>
            <RenderCount componentName="ExpensiveComponentBadContext" />
            <Typography variant="h6">
                ❌ Non-Memoized Calculation (Context)
            </Typography>
            <Typography>🔄 Recalculates on every render (expensive!)</Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
        </Paper>
    );
};

export default ExpensiveComponentBadContext;

// This recalculates on EVERY context change, even unrelated ones!`,

  expensiveComponentGoodContext: `// ExpensiveComponentGoodContext.tsx - Memoized expensive calculation
import React, { useMemo } from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useMemoizedComponentsContext } from '../context';

const ExpensiveComponentGoodContext: React.FC = () => {
    const { multiplier } = useMemoizedComponentsContext();
    
    // ✅ GOOD: This only recalculates when multiplier changes
    const expensiveValue = useMemo(() => {
        console.log('✅ GOOD (Context): Calculating expensive value with useMemo!');
        return multiplier * 1000;
    }, [multiplier]);

    return (
        <Paper>
            <RenderCount componentName="ExpensiveComponentGoodContext" />
            <Typography variant="h6">
                ✅ Memoized Expensive Component (Context)
            </Typography>
            <Typography>🧮 useMemo prevents expensive recalculations</Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
        </Paper>
    );
};

export default ExpensiveComponentGoodContext;

// useMemo() still works within components, even with Context!
// Only recalculates when the dependency (multiplier) actually changes`
};

export const explanationsContext = {
  context: "React Context creates a provider that shares state across components without prop drilling. However, when ANY value in the context changes, ALL consumers re-render because the context value object is recreated. This breaks React.memo() optimizations and can cause performance issues in large applications.",
  
  regularChildContext: "This component behaves the same as the props version - it re-renders on every context change because it's not wrapped in React.memo(). The difference is that it gets data from context instead of props.",
  
  memoizedChildContext: "This demonstrates the key limitation of React Context: even though this component is wrapped in React.memo(), it still re-renders on EVERY context change. This happens because the context provider creates a new value object on each render, breaking memoization.",
  
  expensiveComponentBadContext: "This component shows how expensive calculations can become even more problematic with Context. The calculation runs on every context change, not just when the relevant data changes. This is why you should be careful about what you put in context.",
  
  expensiveComponentGoodContext: "The good news is that useMemo() still works within components! Even though the component re-renders on every context change, the expensive calculation only runs when the multiplier dependency actually changes. This shows how to optimize expensive operations even in a context-heavy architecture."
};