import React from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
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
        <Paper className={`${styles.card} ${styles.cardRed}`}>
            <RenderCount componentName="ExpensiveComponentBadContext" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleRed}`}>
                ❌ Non-Memoized Calculation (Context)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🔄 Recalculates on every render (expensive)
            </Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Typography variant="caption" className={`${styles.caption} ${styles.captionRed}`}>
                Check the console to see how often this logs when context updates
            </Typography>
        </Paper>
    );
};

export default ExpensiveComponentBadContext;