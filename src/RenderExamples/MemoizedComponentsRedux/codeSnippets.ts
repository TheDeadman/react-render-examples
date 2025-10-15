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
                ❌ Non-Memoized Calculation
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
                ✅ Memoized Calculation
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🧮 useMemo prevents expensive recalculations
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
  regularChild: "This component re-renders every time ANY Redux state changes because it's NOT wrapped in React.memo() and subscribes to Redux store. Without memo, Redux components always re-render when their subscribed state changes.",
  
  memoizedChild: "This component is wrapped in React.memo() but still re-renders on ANY Redux state change. React.memo() with Redux only prevents re-renders if the component doesn't subscribe to the store, but since it uses useAppSelector, it will re-render whenever any subscribed state changes.",
  
  expensiveComponentBad: "This component demonstrates expensive calculations without useMemo in Redux. The expensive calculation runs on every render when ANY Redux state changes. Notice how it logs to the console every time you change unrelated state.",
  
  expensiveComponentGood: "This component uses useMemo() to memoize expensive calculations even with Redux. It only recalculates when the specific 'multiplier' dependency changes, not on every Redux state change. This shows useMemo still works within Redux components.",
  
  parentComponent: "The Redux parent component demonstrates how state management shifts from local state and props to Redux store subscriptions. Each child component uses useAppSelector/useAppDispatch instead of receiving props. This shows how Redux changes the rendering patterns compared to props-based state management.",

  memoizedChildWithBadCallback: "This Redux component shows that React.memo() has limited effectiveness with Redux. Even though it's memoized, it re-renders whenever ANY Redux state changes because it subscribes to the store via useAppSelector. Redux components have different optimization strategies compared to props-based components."
};