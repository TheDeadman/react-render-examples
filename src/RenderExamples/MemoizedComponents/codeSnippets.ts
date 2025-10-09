// Code snippets for the MemoizedComponents example

export const codeSnippets = {
  regularChild: `// RegularChild.tsx - Non-memoized child component
import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';

interface RegularChildProps {
    value: number;
    onIncrement: () => void;
    expensiveValue: number;
}

const RegularChild: React.FC<RegularChildProps> = ({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper>
            <RenderCount componentName="RegularChild" />
            <Typography variant="h6">
                Regular Child Component
            </Typography>
            <Typography>🔄 Always re-renders (no React.memo)</Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={onIncrement} variant="contained">
                Increment
            </Button>
        </Paper>
    );
};

export default RegularChild;

// This component will re-render every time the parent re-renders
// because it's NOT wrapped in React.memo()`,

  memoizedChild: `// MemoizedChild.tsx - Memoized child component
import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';

interface MemoizedChildProps {
    value: number;
    onIncrement: () => void;
    expensiveValue: number;
}

const MemoizedChild = memo<MemoizedChildProps>(({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper>
            <RenderCount componentName="MemoizedChild" />
            <Typography variant="h6">
                Memoized Child Component
            </Typography>
            <Typography>✅ React.memo + useCallback = Optimized</Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={onIncrement} variant="contained">
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChild.displayName = 'MemoizedChild';
export default MemoizedChild;

// React.memo() prevents re-renders when props haven't changed.
// Combined with useCallback in parent = optimal performance`,

  expensiveComponentBad: `// ExpensiveComponentBad.tsx - Shows expensive calculation WITHOUT useMemo
import React from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';

interface ExpensiveComponentBadProps {
    multiplier: number;
}

function calculateExpensiveValue(multiplier: number): number {
    console.log('❌ BAD: Recalculating expensive value on every render!');
    return multiplier * 1000;
}

const ExpensiveComponentBad: React.FC<ExpensiveComponentBadProps> = ({ multiplier }) => {
    // ❌ BAD: This will recalculate on every render
    const expensiveValue = calculateExpensiveValue(multiplier);

    return (
        <Paper>
            <RenderCount componentName="ExpensiveComponentBad" />
            <Typography variant="h6">
                ❌ Non-Memoized Expensive Component
            </Typography>
            <Typography>🔄 Recalculates on every render (expensive!)</Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
        </Paper>
    );
};

export default ExpensiveComponentBad;

// This component recalculates the expensive value on EVERY render
// Even when unrelated state changes! Check the console logs.`,

  expensiveComponentGood: `// ExpensiveComponentGood.tsx - Shows expensive calculation WITH useMemo
import React, { useMemo } from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';

interface ExpensiveComponentGoodProps {
    multiplier: number;
}

function calculateExpensiveValue(multiplier: number): number {
    console.log('✅ GOOD: Calculating expensive value with useMemo - only when multiplier changes!');
    return multiplier * 1000;
}

const ExpensiveComponentGood: React.FC<ExpensiveComponentGoodProps> = ({ multiplier }) => {
    // ✅ GOOD: This only recalculates when multiplier changes
    const expensiveValue = useMemo(() => {
        return calculateExpensiveValue(multiplier);
    }, [multiplier]);

    return (
        <Paper>
            <RenderCount componentName="ExpensiveComponentGood" />
            <Typography variant="h6">
                ✅ Memoized Expensive Component
            </Typography>
            <Typography>🧮 useMemo prevents expensive recalculations</Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
        </Paper>
    );
};

export default ExpensiveComponentGood;

// useMemo() memoizes the result and only recalculates when dependencies change.
// Change the multiplier vs unrelated state to see the difference!`,

  parentComponent: `// MemoizedComponentsExample.tsx - Parent component with hooks
import React, { useState, useMemo, useCallback } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import RenderCount from '../../overall/RenderCount';

const MemoizedComponentsExample: React.FC = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [unrelatedState, setUnrelatedState] = useState('');

    // ❌ BAD: Creates a new function on every render
    const handleIncrement1Bad = () => setCount1(prev => prev + 1);
    
    // ✅ GOOD: Function is memoized and stays the same
    const handleIncrement2 = useCallback(() => setCount2(prev => prev + 1), []);

    // ✅ GOOD: Expensive computation that only runs when count1 changes
    const expensiveValue = useMemo(() => {
        console.log('Computing expensive value...');
        return count1 * 1000;
    }, [count1]);

    return (
        <Container>
            {/* Regular child - will always re-render */}
            <RegularChild 
                value={count1} 
                onIncrement={handleIncrement1Bad}  // New function every render!
                expensiveValue={expensiveValue} 
            />
            
            {/* Memoized child with bad callback - still re-renders! */}
            <MemoizedChildWithBadCallback 
                value={count1} 
                onIncrement={handleIncrement1Bad}  // Same non-memoized function!
                expensiveValue={expensiveValue} 
            />
            
            {/* Optimized child - only re-renders when props actually change */}
            <MemoizedChild 
                value={count2} 
                onIncrement={handleIncrement2}     // Memoized function reference
                expensiveValue={expensiveValue} 
            />
        </Container>
    );
};

// useCallback() + useMemo() + React.memo() = Optimal rendering performance
// The key is that ALL THREE must work together!`,

  memoizedChildWithBadCallback: `// MemoizedChildWithBadCallback.tsx - Shows why React.memo alone isn't enough
import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';

interface MemoizedChildWithBadCallbackProps {
    value: number;
    onIncrement: () => void;
    expensiveValue: number;
}

const MemoizedChildWithBadCallback = memo<MemoizedChildWithBadCallbackProps>(({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper>
            <RenderCount componentName="MemoizedChildWithBadCallback" />
            <Typography variant="h6">
                Memoized Child + Non-Memoized Function
            </Typography>
            <Typography>⚠️ React.memo without useCallback = Still re-renders!</Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={onIncrement} variant="contained">
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChildWithBadCallback.displayName = 'MemoizedChildWithBadCallback';
export default MemoizedChildWithBadCallback;

// Usage in parent (this causes the problem):
<MemoizedChildWithBadCallback 
    value={count1} 
    onIncrement={handleIncrement1Bad}  // ❌ New function every render!
    expensiveValue={expensiveValue} 
/>

// Even with React.memo(), this component re-renders every time because
// the onIncrement prop is a new function reference each render.
// React.memo() does shallow comparison - new function = re-render!`
};

export const explanations = {
  regularChild: "This component re-renders every time the parent re-renders because it's NOT wrapped in React.memo(). Without memo, React always re-renders child components when the parent re-renders, regardless of whether props have changed.",
  
  memoizedChild: "This component is wrapped in React.memo() AND receives a memoized callback (useCallback). It only re-renders when its props actually change. Both conditions are necessary - React.memo() for shallow prop comparison + useCallback() for stable function references.",
  
  expensiveComponentBad: "This component demonstrates what happens WITHOUT useMemo in a calculated value. The expensive calculation runs on every render. Notice how it logs to the console every time you type in the 'Unrelated State' field.",
  
  expensiveComponentGood: "This component uses useMemo() to memoize the expensive calculation. It only recalculates when the 'multiplier' dependency actually changes, not on every render. Type in 'Unrelated State' vs changing the multiplier to see the difference in console logs.",
  
  parentComponent: "The parent component shows the complete optimization strategy: useCallback() prevents function recreation, useMemo() prevents expensive recalculations, and the child components use React.memo(). The key insight: ALL THREE hooks must work together - useCallback is only beneficial when passing functions to memoized components.",

  memoizedChildWithBadCallback: "Even though this component is wrapped in React.memo(), it still re-renders every time because it receives a new function reference (handleIncrement1Bad) on each render. React.memo() does shallow comparison - if any prop changes (including function references), it re-renders. This demonstrates why useCallback() and useMemo() are essential when using React.memo()."
};