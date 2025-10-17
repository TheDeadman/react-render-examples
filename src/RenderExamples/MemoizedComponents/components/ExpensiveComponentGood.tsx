// Generate Snippet
import React, { useMemo } from 'react';
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
        <Paper className={`${styles.card} ${styles.cardPurple}`}>
            <RenderCount componentName="ExpensiveComponentGood" />
            <Typography variant="h6" className={`${styles.title} ${styles.titlePurple}`}>
                Memoized Calculation
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

export default ExpensiveComponentGood;