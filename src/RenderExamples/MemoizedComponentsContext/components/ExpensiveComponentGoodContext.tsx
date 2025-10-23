// Generate Snippet
import { useMemo } from 'react';
import { Paper, Typography } from '@mui/material';
import { useMemoizedComponentsContext } from '../context';
import styles from 'MemoizedComponents.module.scss';
// Remove START
import RenderCount from '../../../overall/RenderCount';

export const explanation = "useMemo() still works within components. Even though the component re-renders on every context change, the expensive calculation only runs when the multiplier dependency actually changes. This shows how to optimize expensive operations even in a context-heavy architecture.";
// Remove END

function calculateExpensiveValue(multiplier: number): number {
    console.log('✅ GOOD: Calculating expensive value with useMemo - only when multiplier changes');
    return multiplier * 1000;
}

const ExpensiveComponentGoodContext = () => {
    const { multiplier } = useMemoizedComponentsContext();
    
    // ✅ GOOD: This only recalculates when multiplier changes
    const expensiveValue = useMemo(() => {
        return calculateExpensiveValue(multiplier);
    }, [multiplier]);

    return (
        <Paper className={`${styles.card} ${styles.cardPurple}`}>
            <RenderCount componentName="ExpensiveComponentGoodContext" />
            <Typography variant="h6" className={`${styles.title} ${styles.titlePurple}`}>
                ✅ Memoized Expensive Component (Context)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ✅ useMemo prevents expensive recalculations
            </Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Typography variant="caption" className={`${styles.caption} ${styles.captionGreen}`}>
                Check the console to confirm that logging only occurs when multiplier changes
            </Typography>
        </Paper>
    );
};

export default ExpensiveComponentGoodContext;