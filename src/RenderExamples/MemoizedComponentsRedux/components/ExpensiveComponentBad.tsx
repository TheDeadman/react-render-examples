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
        <Paper className={`${styles.card} ${styles.cardRed}`}>
            <RenderCount componentName="ExpensiveComponentBad" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleRed}`}>
                Non-Memoized Calculation
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🔄 Recalculates on every slice state change without a re-render (expensive)
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