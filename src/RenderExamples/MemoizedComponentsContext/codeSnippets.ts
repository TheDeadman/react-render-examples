// Code snippets for the MemoizedComponents Context example

export const codeSnippetsContext = {
    context: `import React, { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react';

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

    // Without useCallback - this creates a new function on every render
    const handleIncrement1Bad = () => setCount1(prev => prev + 1);
    
    // With useCallback - this function is memoized
    const handleIncrement2 = useCallback(() => setCount1(prev => prev + 1), []);

    // Expensive computation that only depends on count1
    const expensiveValue = useMemo(() => {
        console.log('Computing expensive value (from Context)...');
        return count1 * 1000;
    }, [count1]);

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

  parentComponentContext: `import React from 'react';
import { Container } from '@mui/material';
import { MemoizedComponentsProvider } from './context';
import RegularChildContext from './components/RegularChildContext';
import MemoizedChildContext from './components/MemoizedChildContext';
import MemoizedChildWithBadCallbackContext from './components/MemoizedChildWithBadCallbackContext';
import ExpensiveComponentBadContext from './components/ExpensiveComponentBadContext';
import ExpensiveComponentGoodContext from './components/ExpensiveComponentGoodContext';
import ParentControlsContext from './components/ParentControlsContext';

const MemoizedComponentsExampleContent: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <ParentControlsContext />
            <RegularChildContext />
            <MemoizedChildWithBadCallbackContext />
            <MemoizedChildContext />
            <ExpensiveComponentBadContext />
            <ExpensiveComponentGoodContext />
        </Container>
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

  regularChildContext: `import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import { useMemoizedComponentsContext } from '../context';
import styles from 'MemoizedComponents.module.scss';

const RegularChildContext: React.FC = () => {
    const { count1, handleIncrement1Bad, expensiveValue } = useMemoizedComponentsContext();

    return (
        <Paper className={\`\${styles.card} \${styles.cardRed}\`}>
            <Typography variant="h6" className={\`\${styles.title} \${styles.titleRed}\`}>
                Regular Child Component (Context)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🔄 Always re-renders (no React.memo)
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={handleIncrement1Bad} 
                variant="contained" 
                className={\`\${styles.button} \${styles.buttonRed}\`}
            >
                Increment
            </Button>
        </Paper>
    );
};

export default RegularChildContext;`,

  memoizedChildContext: `import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import { useMemoizedComponentsContext } from '../context';
import styles from 'MemoizedComponents.module.scss';

const MemoizedChildContext = memo(() => {
    const { count1, handleIncrement2, expensiveValue } = useMemoizedComponentsContext();

    return (
        <Paper className={\`\${styles.card} \${styles.cardOrange}\`}>
            <Typography variant="h6" className={\`\${styles.title} \${styles.titleOrange}\`}>
                Memoized Child Component (Context)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ⚠️ React.memo + Context = Still re-renders when any context value changes
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={handleIncrement2} 
                variant="contained" 
                className={\`\${styles.button} \${styles.buttonOrange}\`}
            >
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChildContext.displayName = 'MemoizedChildContext';

export default MemoizedChildContext;`,

  memoizedChildWithBadCallbackContext: `import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import { useMemoizedComponentsContext } from '../context';
import styles from 'MemoizedComponents.module.scss';

const MemoizedChildWithBadCallbackContext = memo(() => {
    const { count1, handleIncrement1Bad, expensiveValue } = useMemoizedComponentsContext();

    return (
        <Paper className={\`\${styles.card} \${styles.cardOrange}\`}>
            <Typography variant="h6" className={\`\${styles.title} \${styles.titleOrange}\`}>
                Memoized Child + Non-Memoized Function (Context)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ⚠️ React.memo + Context + Non-Memoized Function = Always re-renders
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={handleIncrement1Bad} 
                variant="contained" 
                className={\`\${styles.button} \${styles.buttonOrange}\`}
            >
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChildWithBadCallbackContext.displayName = 'MemoizedChildWithBadCallbackContext';

export default MemoizedChildWithBadCallbackContext;`,

  expensiveComponentBadContext: `import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useMemoizedComponentsContext } from '../context';
import styles from 'MemoizedComponents.module.scss';

const ExpensiveComponentBadContext: React.FC = () => {
    const { multiplier } = useMemoizedComponentsContext();
    
    // ❌ BAD: This will recalculate on every render
    const expensiveValue = (() => {
        console.log('❌ BAD (Context): Recalculating expensive value on every render');
        return multiplier * 1000;
    })();

    return (
        <Paper className={\`\${styles.card} \${styles.cardRed}\`}>
            <Typography variant="h6" className={\`\${styles.title} \${styles.titleRed}\`}>
                ❌ Non-Memoized Calculation (Context)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🔄 Recalculates on every render (expensive)
            </Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Typography variant="caption" className={\`\${styles.caption} \${styles.captionRed}\`}>
                Check the console to see how often this logs when context updates
            </Typography>
        </Paper>
    );
};

export default ExpensiveComponentBadContext;`,

  expensiveComponentGoodContext: `import React, { useMemo } from 'react';
import { Paper, Typography } from '@mui/material';
import { useMemoizedComponentsContext } from '../context';
import styles from 'MemoizedComponents.module.scss';

const ExpensiveComponentGoodContext: React.FC = () => {
    const { multiplier } = useMemoizedComponentsContext();
    
    // ✅ GOOD: This only recalculates when multiplier changes
    const expensiveValue = useMemo(() => {
        console.log('✅ GOOD (Context): Calculating expensive value with useMemo - only when multiplier changes');
        return multiplier * 1000;
    }, [multiplier]);

    return (
        <Paper className={\`\${styles.card} \${styles.cardPurple}\`}>
            <Typography variant="h6" className={\`\${styles.title} \${styles.titlePurple}\`}>
                ✅ Memoized Expensive Component (Context)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🧮 useMemo prevents expensive recalculations
            </Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Typography variant="caption" className={\`\${styles.caption} \${styles.captionGreen}\`}>
                Check the console to confirm that logging only occurs when multiplier changes
            </Typography>
        </Paper>
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