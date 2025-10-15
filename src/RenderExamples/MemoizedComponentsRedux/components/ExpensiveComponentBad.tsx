import React from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
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
        <Paper className={`${styles.card} ${styles.cardRed}`}>
            <RenderCount componentName="ExpensiveComponentBad" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleRed}`}>
                ❌ Non-Memoized Calculation
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🔄 Recalculates on every render (expensive)
            </Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Typography variant="caption" className={`${styles.caption} ${styles.captionRed}`}>
                Check the console to see how often this logs when the parent re-renders
            </Typography>
        </Paper>
    );
};

export default ExpensiveComponentBad;