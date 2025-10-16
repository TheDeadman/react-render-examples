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
import RenderCount from '../../../overall/RenderCount';
import { useAppSelector } from 'store/hooks';
import { selectExpensiveValueBad, selectMultiplier } from '../memoizedComponents.slice';
import styles from 'MemoizedComponents.module.scss';

const ExpensiveComponentBad = () => {
    const multiplier = useAppSelector(selectMultiplier);
    
    // ❌ BAD: This will recalculate everytime part of the slice state changes even though this component does not re-render.
    const expensiveValue = useAppSelector(selectExpensiveValueBad);

    return (
        <Paper className={\`\${styles.card} \${styles.cardRed}\`}>
            <RenderCount componentName="ExpensiveComponentBad" />
            <Typography variant="h6" className={\`\${styles.title} \${styles.titleRed}\`}>
                Non-Memoized Calculation
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🔄 Recalculates on every slice state change without a re-render (expensive)
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

  expensiveComponentGood: `import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useAppSelector } from 'store/hooks';
import { selectExpensiveValue, selectMultiplier } from '../memoizedComponents.slice';
import styles from 'MemoizedComponents.module.scss';

const ExpensiveComponentGood = () => {
    const multiplier = useAppSelector(selectMultiplier);
    const expensiveValue = useAppSelector(selectExpensiveValue);

    return (
        <Paper className={\`\${styles.card} \${styles.cardPurple}\`}>
            <RenderCount componentName="ExpensiveComponentGood" />
            <Typography variant="h6" className={\`\${styles.title} \${styles.titlePurple}\`}>
                Memoized Calculation
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ✅ createSelector prevents expensive recalculations
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

    slice: `import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

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

export const selectCount1 = (state: RootState) => state.memoizedComponents.count1;
export const selectMultiplier = (state: RootState) => state.memoizedComponents.multiplier;
export const selectUnrelatedState = (state: RootState) => state.memoizedComponents.unrelatedState;

export const selectExpensiveValueBad = (state: RootState) => {
    console.log('❌Computing expensive value (from Redux)...');
    return state.memoizedComponents.multiplier * 1000;
}

export const selectExpensiveValue = createSelector([
    selectMultiplier
], (multiplier) => {
    console.log('✅ Computing expensive value (from Redux)...');
    return multiplier * 1000;
});

export default memoizedComponentsSlice.reducer;`
};

export const explanations = {
    regularChild: "This component only re-renders when the subscribed state changes. The parent never re-renders in this example, so memoization is not needed here.",
  
    memoizedChild: "React.memo is unnecessary here because the component already uses useAppSelector to subscribe only to specific pieces of state. The parent does not re-render in this example. The component will re-render only when those selected values change.",
  
    expensiveComponentBad: "This component shows how an expensive calculation selector without memoization by \"createSelector\" reruns every time a piece of the slice statechanges. Watch the console log to see the recalculation whenever multiplier updates.",
  
    expensiveComponentGood: "This component uses a memoized selector so the expensive calculation only recomputes when the multiplier dependency changes. It avoids unnecessary recalculations even when other Redux state updates.",
  
    parentComponent: "The Redux parent component demonstrates lifting state into the store while child components subscribe only to the values they need. Each child uses useAppSelector or useAppDispatch instead of receiving props, highlighting selective rendering based on subscribed slices of state.",

    memoizedChildWithBadCallback: "This is essentially the same as the Memoized Child Component. Because we can import our dispatch function and action function directly where needed, we don't need to pass it down as a prop. These functions also don't need to be memoized because they have stable references.",

    slice: "This redux slice abstracts the state management logic out of the components. The components can subscribe to the state that they use and be unaffected by other pieces of state. Note that calculated selectors will run on every state change for the slice but the components using them will only re-render if the result is different. This can be prevented by using createSelector to only run the calculation again if any of the 'input selectors' returns a different result."
};