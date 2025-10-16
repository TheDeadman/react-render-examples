import React, { useMemo } from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
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