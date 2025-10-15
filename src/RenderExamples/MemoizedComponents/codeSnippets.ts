// Code snippets for the MemoizedComponents example

export const codeSnippets = {
  regularChild: `import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import styles from 'MemoizedComponents.module.scss';

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
        <Paper className={\`\${styles.card} \${styles.cardRed}\`}>
            <Typography variant="h6" className={\`\${styles.title} \${styles.titleRed}\`}>
                Regular Child Component
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🔄 Always re-renders (no React.memo)
            </Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={onIncrement} 
                variant="contained" 
                className={\`\${styles.button} \${styles.buttonRed}\`}
            >
                Increment
            </Button>
        </Paper>
    );
};

export default RegularChild;`,

  memoizedChild: `import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import styles from 'MemoizedComponents.module.scss';

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
        <Paper className={\`\${styles.card} \${styles.cardGreen}\`}>
            <RenderCount componentName="MemoizedChild" />
            <Typography variant="h6" className={\`\${styles.title} \${styles.titleGreen}\`}>
                Memoized Child Component
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ✅ React.memo + useCallback = Optimized
            </Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={onIncrement} 
                variant="contained" 
                className={\`\${styles.button} \${styles.buttonGreen}\`}
            >
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChild.displayName = 'MemoizedChild';

export default MemoizedChild;`,

  expensiveComponentBad: `import React from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import styles from 'MemoizedComponents.module.scss';

interface ExpensiveComponentBadProps {
    multiplier: number;
}

function calculateExpensiveValue(multiplier: number): number {
    console.log('❌ BAD: Recalculating expensive value on every render');
    return multiplier * 1000;
}

const ExpensiveComponentBad: React.FC<ExpensiveComponentBadProps> = ({ multiplier }) => {
    // ❌ BAD: This will recalculate on every render
    const expensiveValue = calculateExpensiveValue(multiplier);

    return (
        <Paper className={\`\${styles.card} \${styles.cardRed}\`}>
            <RenderCount componentName="ExpensiveComponentBad" />
            <Typography variant="h6" className={\`\${styles.title} \${styles.titleRed}\`}>
                ❌ Non-Memoized Calculation
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🔄 Recalculates on every render (expensive)
            </Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Typography variant="caption" className={\`\${styles.caption} \${styles.captionRed}\`}>
                Check the console to see how often this logs during parent renders
            </Typography>
        </Paper>
    );
};

export default ExpensiveComponentBad;`,

  expensiveComponentGood: `import React, { useMemo } from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import styles from 'MemoizedComponents.module.scss';

interface ExpensiveComponentGoodProps {
    multiplier: number;
}

function calculateExpensiveValue(multiplier: number): number {
    console.log('✅ GOOD: Calculating expensive value with useMemo - only when multiplier changes');
    return multiplier * 1000;
}

const ExpensiveComponentGood: React.FC<ExpensiveComponentGoodProps> = ({ multiplier }) => {
    // ✅ GOOD: This only recalculates when multiplier changes
    const expensiveValue = useMemo(() => {
        return calculateExpensiveValue(multiplier);
    }, [multiplier]);

    return (
        <Paper className={\`\${styles.card} \${styles.cardPurple}\`}>
            <RenderCount componentName="ExpensiveComponentGood" />
            <Typography variant="h6" className={\`\${styles.title} \${styles.titlePurple}\`}>
                ✅ Memoized Calculation
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

export default ExpensiveComponentGood;`,

    parentComponent: `import React, { useState, useMemo, useCallback } from 'react';
import { Container } from '@mui/material';
import RegularChild from './components/RegularChild';
import MemoizedChild from './components/MemoizedChild';
import MemoizedChildWithBadCallback from './components/MemoizedChildWithBadCallback';
import ExpensiveComponentBad from './components/ExpensiveComponentBad';
import ExpensiveComponentGood from './components/ExpensiveComponentGood';
import ParentControls from './components/ParentControls';

const MemoizedComponentsExample = () => {
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
        <Container maxWidth="lg">
            <ParentControls
                unrelatedState={unrelatedState}
                onUnrelatedStateChange={setUnrelatedState}
                multiplier={multiplier}
                onMultiplierChange={setMultiplier}
                count1={count1}
            />

            <RegularChild 
                value={count1} 
                onIncrement={handleIncrement1Bad} 
                expensiveValue={expensiveValue} 
            />

            <MemoizedChildWithBadCallback 
                value={count1} 
                onIncrement={handleIncrement1Bad}  // Same non-memoized function
                expensiveValue={expensiveValue} 
            />

            <MemoizedChild 
                value={count1} 
                onIncrement={handleIncrement2} 
                expensiveValue={expensiveValue} 
            />

            <ExpensiveComponentBad multiplier={multiplier} />

            <ExpensiveComponentGood multiplier={multiplier} />
        </Container>
    );
};

export default MemoizedComponentsExample;`,

  memoizedChildWithBadCallback: `import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import styles from 'MemoizedComponents.module.scss';

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
        <Paper className={\`\${styles.card} \${styles.cardOrange}\`}>
            <RenderCount componentName="MemoizedChildWithBadCallback" />
            <Typography variant="h6" className={\`\${styles.title} \${styles.titleOrange}\`}>
                Memoized Child + Non-Memoized Function
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ⚠️ React.memo but new function props = Still re-renders
            </Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={onIncrement} 
                variant="contained" 
                className={\`\${styles.button} \${styles.buttonOrange}\`}
            >
                Increment
            </Button>
        </Paper>
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