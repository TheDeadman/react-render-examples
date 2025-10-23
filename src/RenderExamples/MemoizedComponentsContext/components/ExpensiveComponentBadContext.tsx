// Generate Snippet
import { Paper, Typography } from '@mui/material';
import { useMemoizedComponentsContext } from '../context';
import styles from 'MemoizedComponents.module.scss';
// Remove START
import RenderCount from '../../../overall/RenderCount';

export const explanation = "This component shows how expensive calculations can become even more problematic with Context. The calculation runs on every context change, not just when the relevant data changes. This is why you should be careful about what you put in context.";
// Remove END

function calculateExpensiveValue(multiplier: number): number {
    console.log('❌ BAD: Recalculating expensive value on every render');
    return multiplier * 1000;
}

const ExpensiveComponentBadContext = () => {
    const { multiplier } = useMemoizedComponentsContext();
    
    // ❌ BAD: This will recalculate on every render
    const expensiveValue = calculateExpensiveValue(multiplier);

    return (
        <Paper className={`${styles.card} ${styles.cardRed}`}>
            <RenderCount componentName="ExpensiveComponentBadContext" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleRed}`}>
                Non-Memoized Calculation (Context)
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