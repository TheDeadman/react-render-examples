// Code snippets for the MemoizedComponents example

export const codeSnippets = {
  regularChild: `// RegularChild.tsx - Non-memoized child component
import React from 'react';

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
        <div>
            <h3>Regular Child Component</h3>
            <p>🔄 Always re-renders (no React.memo)</p>
            <p>Value: {value}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={onIncrement}>
                Increment
            </button>
        </div>
    );
};

export default RegularChild;`,

  memoizedChild: `// MemoizedChild.tsx - Memoized child component
import React, { memo } from 'react';

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
        <div>
            <h3>Memoized Child Component</h3>
            <p>✅ React.memo + useCallback = Optimized</p>
            <p>Value: {value}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={onIncrement}>
                Increment
            </button>
        </div>
    );
});

MemoizedChild.displayName = 'MemoizedChild';

export default MemoizedChild;`,

  expensiveComponentBad: `// ExpensiveComponentBad.tsx - Shows expensive calculation WITHOUT useMemo
import React from 'react';

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
        <div>
            <h3>❌ Non-Memoized Calculation</h3>
            <p>🔄 Recalculates on every render (expensive!)</p>
            <p>Multiplier: {multiplier}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <small>Check console - this logs on every parent re-render!</small>
        </div>
    );
};

export default ExpensiveComponentBad;`,

  expensiveComponentGood: `// ExpensiveComponentGood.tsx - Shows expensive calculation WITH useMemo
import React, { useMemo } from 'react';

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
        <div>
            <h3>✅ Memoized Calculation</h3>
            <p>🧮 useMemo prevents expensive recalculations</p>
            <p>Multiplier: {multiplier}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <small>Check console - this only logs when multiplier changes!</small>
        </div>
    );
};

export default ExpensiveComponentGood;`,

  parentComponent: `// MemoizedComponentsExample.tsx - Parent component with hooks
import React, { useState, useMemo, useCallback } from 'react';
import RegularChild from './components/RegularChild';
import MemoizedChild from './components/MemoizedChild';
import MemoizedChildWithBadCallback from './components/MemoizedChildWithBadCallback';
import ExpensiveComponentBad from './components/ExpensiveComponentBad';
import ExpensiveComponentGood from './components/ExpensiveComponentGood';
import ParentControls from './components/ParentControls';

const MemoizedComponentsExample: React.FC = () => {
    const [count1, setCount1] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [unrelatedState, setUnrelatedState] = useState('');

    // Without useCallback - this creates a new function on every render
    const handleIncrement1Bad = () => setCount1(prev => prev + 1);
    
    // With useCallback - this function is memoized
    const handleIncrement2 = useCallback(() => setCount1(prev => prev + 1), []);

    // Expensive computation that only depends on count1
    const expensiveValue = useMemo(() => {
        console.log('Computing expensive value...');
        return count1 * 1000;
    }, [count1]);

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div>
                <div>
                    PARENT COMPONENT
                </div>
                
                <div>
                    <h2>
                        Memoized Components Example
                    </h2>
                    <p>
                        This example demonstrates React.memo, useMemo, and useCallback optimizations.
                        Watch the render counters to see which components re-render when state changes.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
                    <div>
                        <ParentControls
                            unrelatedState={unrelatedState}
                            onUnrelatedStateChange={setUnrelatedState}
                            multiplier={multiplier}
                            onMultiplierChange={setMultiplier}
                            count1={count1}
                        />
                    </div>

                <div>
                    <RegularChild 
                        value={count1} 
                        onIncrement={handleIncrement1Bad} 
                        expensiveValue={expensiveValue} 
                    />
                </div>

                <div>
                    <MemoizedChildWithBadCallback 
                        value={count1} 
                        onIncrement={handleIncrement1Bad}
                        expensiveValue={expensiveValue} 
                    />
                </div>

                <div>
                    <MemoizedChild 
                        value={count1} 
                        onIncrement={handleIncrement2} 
                        expensiveValue={expensiveValue} 
                    />
                </div>

                <div>
                    <ExpensiveComponentBad multiplier={multiplier} />
                </div>

                <div>
                    <ExpensiveComponentGood multiplier={multiplier} />
                </div>
            </div>
            </div>
        </div>
    );
};

export default MemoizedComponentsExample;`,

  memoizedChildWithBadCallback: `// MemoizedChildWithBadCallback.tsx - Shows why React.memo alone isn't enough
import React, { memo } from 'react';

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
        <div>
            <h3>
                Memoized Child + Non-Memoized Function
            </h3>
            <p>
                ⚠️ React.memo but new function props = Still re-renders
            </p>
            <p>Value: {value}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={onIncrement}>
                Increment
            </button>
        </div>
    );
});

MemoizedChildWithBadCallback.displayName = 'MemoizedChildWithBadCallback';

export default MemoizedChildWithBadCallback;`
};

export const explanations = {
  regularChild: "This component re-renders every time the parent re-renders because it's NOT wrapped in React.memo(). Without memo, React always re-renders child components when the parent re-renders, regardless of whether props have changed.",
  
  memoizedChild: "This component is wrapped in React.memo() AND receives a memoized callback (useCallback). It only re-renders when its props actually change. Both conditions are necessary - React.memo() for shallow prop comparison + useCallback() for stable function references.",
  
  expensiveComponentBad: "This component demonstrates what happens WITHOUT useMemo in a calculated value. The expensive calculation runs on every render. Notice how it logs to the console every time you type in the 'Unrelated State' field.",
  
  expensiveComponentGood: "This component uses useMemo() to memoize the expensive calculation. It only recalculates when the 'multiplier' dependency actually changes, not on every render. Type in 'Unrelated State' vs changing the multiplier to see the difference in console logs.",
  
  parentComponent: "The parent component shows the complete optimization strategy: useCallback() prevents function recreation, useMemo() prevents expensive recalculations, and the child components use React.memo(). The key insight: ALL THREE hooks must work together - useCallback is only beneficial when passing functions to memoized components.",

  memoizedChildWithBadCallback: "Even though this component is wrapped in React.memo(), it still re-renders every time because it receives a new function reference (handleIncrement1Bad) on each render. React.memo() does shallow comparison - if any prop changes (including function references), it re-renders. This demonstrates why useCallback() and useMemo() are essential when using React.memo()."
};