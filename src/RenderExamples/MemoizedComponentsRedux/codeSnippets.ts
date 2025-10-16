// Code snippets for the MemoizedComponents example

export const codeSnippets = {
  regularChild: `import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { selectCount1, selectExpensiveValue, incrementCount1 } from '../memoizedComponents.slice';
import styles from 'MemoizedComponents.module.scss';

const RegularChild: React.FC = () => {
    const dispatch = useAppDispatch();
    const count1 = useAppSelector(selectCount1);
    const expensiveValue = useAppSelector(selectExpensiveValue);

    return (
        <Paper className={\`\${styles.card} \${styles.cardRed}\`}>
            <Typography variant="h6" className={\`\${styles.title} \${styles.titleRed}\`}>
                Regular Child Component (Redux)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🔄 Always re-renders (no React.memo)
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button
                onClick={() => dispatch(incrementCount1())}
                variant="contained"
                className={\`\${styles.button} \${styles.buttonRed}\`}
            >
                Increment
            </Button>
        </Paper>
    );
};

export default RegularChild;`,

  reduxSlice: `import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export const {
    incrementCount1,
    setMultiplier,
    setUnrelatedState
} = memoizedComponentsSlice.actions;

export const selectCount1 = (state: { memoizedComponents: MemoizedComponentsState }) => state.memoizedComponents.count1;
export const selectMultiplier = (state: { memoizedComponents: MemoizedComponentsState }) => state.memoizedComponents.multiplier;
export const selectUnrelatedState = (state: { memoizedComponents: MemoizedComponentsState }) => state.memoizedComponents.unrelatedState;

export const selectExpensiveValue = (state: { memoizedComponents: MemoizedComponentsState }) => {
    console.log('Computing expensive value (from Redux)...');
    return state.memoizedComponents.multiplier * 1000;
};

export default memoizedComponentsSlice.reducer;`,

  memoizedChild: `import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { selectCount1, selectExpensiveValue, incrementCount1 } from '../memoizedComponents.slice';
import styles from 'MemoizedComponents.module.scss';

const MemoizedChild = memo(() => {
    const dispatch = useAppDispatch();
    const count1 = useAppSelector(selectCount1);
    const expensiveValue = useAppSelector(selectExpensiveValue);

    return (
        <Paper className={\`\${styles.card} \${styles.cardGreen}\`}>
            <Typography variant="h6" className={\`\${styles.title} \${styles.titleGreen}\`}>
                Memoized Child Component (Redux)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ⚠️ React.memo + Redux rerenders when the subscribed state updates
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button
                onClick={() => dispatch(incrementCount1())}
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
import { useAppSelector } from 'store/hooks';
import { selectMultiplier } from '../memoizedComponents.slice';
import styles from 'MemoizedComponents.module.scss';

function calculateExpensiveValue(multiplier: number): number {
    console.log('❌ BAD: Recalculating expensive value on every render');
    return multiplier * 1000;
}

const ExpensiveComponentBad = () => {
    const multiplier = useAppSelector(selectMultiplier);

    // ❌ BAD: This will recalculate on every render
    const expensiveValue = calculateExpensiveValue(multiplier);

    return (
        <Paper className={\`\${styles.card} \${styles.cardRed}\`}>
            <Typography variant="h6" className={\`\${styles.title} \${styles.titleRed}\`}>
                Non-Memoized Calculation
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🔄 Recalculates on every render (expensive)
            </Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Typography variant="caption" className={\`\${styles.caption} \${styles.captionRed}\`}>
                Check the console to see how often this logs when the parent re-renders
            </Typography>
        </Paper>
    );
};

export default ExpensiveComponentBad;`,

  expensiveComponentGood: `import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useAppSelector } from 'store/hooks';
import { selectExpensiveValue, selectMultiplier } from '../memoizedComponents.slice';
import styles from 'MemoizedComponents.module.scss';

const ExpensiveComponentGood = () => {
    const multiplier = useAppSelector(selectMultiplier);
    const expensiveValue = useAppSelector(selectExpensiveValue);

    return (
        <Paper className={\`\${styles.card} \${styles.cardPurple}\`}>
            <Typography variant="h6" className={\`\${styles.title} \${styles.titlePurple}\`}>
                Memoized Calculation
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ✅ useMemo prevents expensive recalculations
            </Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Typography variant="caption" className={\`\${styles.caption} \${styles.captionGreen}\`}>
                Check the console to confirm that logging only occurs when the multiplier changes
            </Typography>
        </Paper>
    );
};

export default ExpensiveComponentGood;`,

  parentComponent: `import React from 'react';
import { Container } from '@mui/material';
import RegularChild from './components/RegularChild';
import MemoizedChild from './components/MemoizedChild';
import MemoizedChildWithBadCallback from './components/MemoizedChildWithBadCallback';
import ExpensiveComponentBad from './components/ExpensiveComponentBad';
import ExpensiveComponentGood from './components/ExpensiveComponentGood';
import ParentControls from './components/ParentControls';

const MemoizedComponentsExample: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <ParentControls />
            <RegularChild />
            <MemoizedChildWithBadCallback />
            <MemoizedChild />
            <ExpensiveComponentBad />
            <ExpensiveComponentGood />
        </Container>
    );
};

export default MemoizedComponentsExample;`,

  memoizedChildWithBadCallback: `import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { selectCount1, selectExpensiveValue, incrementCount1 } from '../memoizedComponents.slice';
import styles from 'MemoizedComponents.module.scss';

const MemoizedChildWithBadCallback = memo(() => {
    const dispatch = useAppDispatch();
    const count1 = useAppSelector(selectCount1);
    const expensiveValue = useAppSelector(selectExpensiveValue);

    const handleIncrement = () => dispatch(incrementCount1());

    return (
        <Paper className={\`\${styles.card} \${styles.cardOrange}\`}>
            <Typography variant="h6" className={\`\${styles.title} \${styles.titleOrange}\`}>
                Memoized Child + Non-Memoized Function (Redux)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ⚠️ React.memo + Redux with a non memoized function still rerenders
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button
                onClick={handleIncrement}
                variant="contained"
                className={\`\${styles.button} \${styles.buttonOrange}\`}
            >
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChildWithBadCallback.displayName = 'MemoizedChildWithBadCallback';

export default MemoizedChildWithBadCallback;`,
};

export const explanations = {
    regularChild: "This component re-renders whenever the Redux values it selects change because it is not wrapped in React.memo(). If count1 or the derived expensive value updates, this component updates as well.",
  
    memoizedChild: "React.memo() cannot skip renders when the component still subscribes to changing Redux state. This component re-renders each time the values returned from useAppSelector change, even though the component is memoized.",
  
    expensiveComponentBad: "This component shows how an expensive calculation without memoization reruns every time its subscribed multiplier value changes. Watch the console log to see the recalculation whenever multiplier updates.",
  
    expensiveComponentGood: "This component uses a memoized selector so the expensive calculation only recomputes when the multiplier dependency changes. It avoids unnecessary recalculations even when other Redux state updates.",
  
    parentComponent: "The Redux parent component demonstrates lifting state into the store while child components subscribe only to the values they need. Each child uses useAppSelector or useAppDispatch instead of receiving props, highlighting selective rendering based on subscribed slices of state.",

    memoizedChildWithBadCallback: "Even though this component is wrapped in React.memo(), it still re-renders when its selected Redux values change. Creating a new callback on each render also defeats memoization, so it updates whenever count1 or the derived expensive value changes."
};