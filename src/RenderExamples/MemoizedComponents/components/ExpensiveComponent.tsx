import React, { useMemo } from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import styles from 'MemoizedComponents.module.scss';

interface ExpensiveComponentProps {
    multiplier: number;
}

const ExpensiveComponent: React.FC<ExpensiveComponentProps> = ({ multiplier }) => {
    // Without useMemo - this will recalculate on every render
    const expensiveValueBad = multiplier * 1000;
    
    // With useMemo - this will only recalculate when multiplier changes
    const expensiveValueGood = useMemo(() => {
        console.log('Calculating expensive value...');
        return multiplier * 1000;
    }, [multiplier]);

    return (
        <Paper className={`${styles.card} ${styles.cardPurple}`}>
            <RenderCount componentName="ExpensiveComponent" />
            <Typography variant="h6" className={`${styles.title} ${styles.titlePurple}`}>
                Expensive Computation Component
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🧮 useMemo prevents expensive recalculations
            </Typography>
            <Typography>Bad Value (recalculates every render): {expensiveValueBad}</Typography>
            <Typography>Good Value (memoized): {expensiveValueGood}</Typography>
        </Paper>
    );
};

export default ExpensiveComponent;