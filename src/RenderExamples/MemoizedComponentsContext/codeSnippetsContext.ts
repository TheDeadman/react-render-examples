// Code snippets for the MemoizedComponents Context example

export const codeSnippetsContext = {
  context: `// context.tsx - React Context for state management
import React, { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react';

interface MemoizedComponentsContextType {
    count1: number;
    multiplier: number;
    unrelatedState: string;
    expensiveValue: number;
    handleIncrement1Bad: () => void;
    handleIncrement2: () => void;
    setMultiplier: (value: number) => void;
    setUnrelatedState: (value: string) => void;
}

const MemoizedComponentsContext = createContext<MemoizedComponentsContextType | undefined>(undefined);

interface MemoizedComponentsProviderProps {
    children: ReactNode;
}

export const MemoizedComponentsProvider: React.FC<MemoizedComponentsProviderProps> = ({ children }) => {
    const [count1, setCount1] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [unrelatedState, setUnrelatedState] = useState('');

    // Without useCallback this creates a new function on every render
    const handleIncrement1Bad = () => setCount1(prev => prev + 1);
    
    // With useCallback the function reference stays stable
    const handleIncrement2 = useCallback(() => setCount1(prev => prev + 1), []);

    // Expensive computation that only depends on count1
    const expensiveValue = useMemo(() => {
        console.log('Computing expensive value (from Context)...');
        return count1 * 1000;
    }, [count1]);

    // Context value is a new object on each render
    const value = {
        count1,
        multiplier,
        unrelatedState,
        expensiveValue,
        handleIncrement1Bad,
        handleIncrement2,
        setMultiplier,
        setUnrelatedState,
    };

    return (
        <MemoizedComponentsContext.Provider value={value}>
            {children}
        </MemoizedComponentsContext.Provider>
    );
};

export const useMemoizedComponentsContext = () => {
    const context = useContext(MemoizedComponentsContext);
    if (context === undefined) {
        throw new Error('useMemoizedComponentsContext must be used within a MemoizedComponentsProvider');
    }
    return context;
};`,

  parentComponentContext: `// MemoizedComponentsContextExample.tsx - Parent component using Context
import React from 'react';
import { MemoizedComponentsProvider } from './context';
import RegularChildContext from './components/RegularChildContext';
import MemoizedChildContext from './components/MemoizedChildContext';
import MemoizedChildWithBadCallbackContext from './components/MemoizedChildWithBadCallbackContext';
import ExpensiveComponentBadContext from './components/ExpensiveComponentBadContext';
import ExpensiveComponentGoodContext from './components/ExpensiveComponentGoodContext';
import ParentControlsContext from './components/ParentControlsContext';

const MemoizedComponentsExampleContent: React.FC = () => {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div>PARENT COMPONENT</div>

            <div>
                <h2>Memoized Components Example (React Context)</h2>
                <p>
                    This version mirrors the props example but lifts state into React Context.
                    Notice how sharing state via context changes render behavior.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
                <div>
                    <ParentControlsContext />
                </div>

                <div>
                    <RegularChildContext />
                </div>

                <div>
                    <MemoizedChildWithBadCallbackContext />
                </div>

                <div>
                    <MemoizedChildContext />
                </div>

                <div>
                    <ExpensiveComponentBadContext />
                </div>

                <div>
                    <ExpensiveComponentGoodContext />
                </div>
            </div>
        </div>
    );
};

const MemoizedComponentsContextExample: React.FC = () => {
    return (
        <MemoizedComponentsProvider>
            <MemoizedComponentsExampleContent />
        </MemoizedComponentsProvider>
    );
};

export default MemoizedComponentsContextExample;`,

  regularChildContext: `// RegularChildContext.tsx - Non-memoized child using Context
import React from 'react';
import { useMemoizedComponentsContext } from '../context';

const RegularChildContext: React.FC = () => {
    const { count1, handleIncrement1Bad, expensiveValue } = useMemoizedComponentsContext();

    return (
        <div>
            <h3>Regular Child Component (Context)</h3>
            <p>🔄 Always re-renders (no React.memo)</p>
            <p>Value: {count1}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={handleIncrement1Bad}>
                Increment
            </button>
        </div>
    );
};

export default RegularChildContext;`,

  memoizedChildContext: `// MemoizedChildContext.tsx - Memoized child using Context
import React, { memo } from 'react';
import { useMemoizedComponentsContext } from '../context';

const MemoizedChildContext = memo(() => {
    const { count1, handleIncrement2, expensiveValue } = useMemoizedComponentsContext();

    return (
        <div>
            <h3>Memoized Child Component (Context)</h3>
            <p>⚠️ React.memo + Context = Still re-renders when any context value changes</p>
            <p>Value: {count1}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={handleIncrement2}>
                Increment
            </button>
        </div>
    );
});

MemoizedChildContext.displayName = 'MemoizedChildContext';

export default MemoizedChildContext;`,

  memoizedChildWithBadCallbackContext: `// MemoizedChildWithBadCallbackContext.tsx - Memoized child using a non-memoized function (Context)
import React, { memo } from 'react';
import { useMemoizedComponentsContext } from '../context';

const MemoizedChildWithBadCallbackContext = memo(() => {
    const { count1, handleIncrement1Bad, expensiveValue } = useMemoizedComponentsContext();

    return (
        <div>
            <h3>Memoized Child + Non-Memoized Function (Context)</h3>
            <p>⚠️ React.memo + Context + Non-Memoized Function = Always re-renders</p>
            <p>Value: {count1}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={handleIncrement1Bad}>
                Increment
            </button>
        </div>
    );
});

MemoizedChildWithBadCallbackContext.displayName = 'MemoizedChildWithBadCallbackContext';

export default MemoizedChildWithBadCallbackContext;`,

  expensiveComponentBadContext: `// ExpensiveComponentBadContext.tsx - Non-memoized expensive calculation
import React from 'react';
import { useMemoizedComponentsContext } from '../context';

const ExpensiveComponentBadContext: React.FC = () => {
    const { multiplier } = useMemoizedComponentsContext();

    // This recalculates on every render
    const expensiveValue = (() => {
        console.log('❌ BAD (Context): Recalculating expensive value on every render');
        return multiplier * 1000;
    })();

    return (
        <div>
            <h3>❌ Non-Memoized Calculation (Context)</h3>
            <p>🔄 Recalculates on every render (expensive)</p>
            <p>Multiplier: {multiplier}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <small>Check the console to see how often this logs when context updates</small>
        </div>
    );
};

export default ExpensiveComponentBadContext;`,

  expensiveComponentGoodContext: `// ExpensiveComponentGoodContext.tsx - Memoized expensive calculation
import React, { useMemo } from 'react';
import { useMemoizedComponentsContext } from '../context';

const ExpensiveComponentGoodContext: React.FC = () => {
    const { multiplier } = useMemoizedComponentsContext();

    // Only recalculates when multiplier changes
    const expensiveValue = useMemo(() => {
        console.log('✅ GOOD (Context): Calculating expensive value with useMemo - only when multiplier changes');
        return multiplier * 1000;
    }, [multiplier]);

    return (
        <div>
            <h3>✅ Memoized Expensive Component (Context)</h3>
            <p>🧮 useMemo prevents expensive recalculations</p>
            <p>Multiplier: {multiplier}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <small>Check the console to confirm that logging only occurs when multiplier changes</small>
        </div>
    );
};

export default ExpensiveComponentGoodContext;`
};

export const explanationsContext = {
  context: "React Context creates a provider that shares state across components without prop drilling. However, when ANY value in the context changes, ALL consumers re-render because the context value object is recreated. This breaks React.memo() optimizations and can cause performance issues in large applications.",
  
  parentComponentContext: "The Context parent component demonstrates how React Context shifts state management from local state and props to a centralized provider. The provider wraps all consumers and manages shared state. Unlike props-based examples, child components get data directly from context rather than through prop passing.",
  
  regularChildContext: "This component behaves the same as the props version - it re-renders on every context change because it's not wrapped in React.memo(). The difference is that it gets data from context instead of props.",
  
  memoizedChildContext: "This demonstrates the key limitation of React Context: even though this component is wrapped in React.memo(), it still re-renders on EVERY context change. This happens because the context provider creates a new value object on each render, breaking memoization.",
  
  memoizedChildWithBadCallbackContext: "This component shows that with Context, even the distinction between memoized and non-memoized functions becomes irrelevant for preventing re-renders. React.memo() is completely ineffective with Context because context consumers always re-render when the context value changes, regardless of optimization strategies.",
  
  expensiveComponentBadContext: "This component shows how expensive calculations can become even more problematic with Context. The calculation runs on every context change, not just when the relevant data changes. This is why you should be careful about what you put in context.",
  
  expensiveComponentGoodContext: "useMemo() still works within components. Even though the component re-renders on every context change, the expensive calculation only runs when the multiplier dependency actually changes. This shows how to optimize expensive operations even in a context-heavy architecture."
};