// Generate Snippet
import { Paper, Typography } from '@mui/material';
import { useAppSelector } from 'store/hooks';
import { selectExpensiveValue, selectMultiplier } from '../memoizedComponents.slice';
import styles from 'MemoizedComponents.module.scss';
// Remove START
import RenderCount from '../../../overall/RenderCount';
export const explanation = "This component uses a memoized selector so the expensive calculation only recomputes when the multiplier dependency changes. It avoids unnecessary recalculations even when other Redux state updates.";
// Remove END

const ExpensiveComponentGood = () => {
    const multiplier = useAppSelector(selectMultiplier);
    const expensiveValue = useAppSelector(selectExpensiveValue);

    return (
        <Paper className={`${styles.card} ${styles.cardPurple}`}>
            <RenderCount componentName="ExpensiveComponentGood" />
            <Typography variant="h6" className={`${styles.title} ${styles.titlePurple}`}>
                Memoized Calculation
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ✅ createSelector prevents expensive recalculations
            </Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Typography variant="caption" className={`${styles.caption} ${styles.captionGreen}`}>
                Check the console to confirm that logging only occurs when the multiplier changes
            </Typography>
        </Paper>
    );
};

export default ExpensiveComponentGood;