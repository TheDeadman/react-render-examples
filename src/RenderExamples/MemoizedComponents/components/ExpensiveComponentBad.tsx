// Generate Snippet
import { Paper, Typography } from '@mui/material';
import styles from 'MemoizedComponents.module.scss';
// Remove START
import RenderCount from '../../../overall/RenderCount';
export const explanation = "This component demonstrates what happens WITHOUT useMemo in a calculated value. The expensive calculation runs on every render. Notice how it logs to the console every time you type in the 'Unrelated State' field.";
// Remove END

interface ExpensiveComponentBadProps {
    multiplier: number;
}

function calculateExpensiveValue(multiplier: number): number {
    console.log('❌ BAD: Recalculating expensive value on every render');
    return multiplier * 1000;
}

const ExpensiveComponentBad: React.FC<ExpensiveComponentBadProps> = ({ multiplier }) => {
    // ❌ BAD: This will recalculate on every render
    const expensiveValue = calculateExpensiveValue(multiplier);

    return (
        <Paper className={`${styles.card} ${styles.cardRed}`}>
            <RenderCount componentName="ExpensiveComponentBad" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleRed}`}>
                Non-Memoized Calculation
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🔄 Recalculates on every render (expensive)
            </Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Typography variant="caption" className={`${styles.caption} ${styles.captionRed}`}>
                Check the console to see how often this logs during parent renders
            </Typography>
        </Paper>
    );
};

export default ExpensiveComponentBad;