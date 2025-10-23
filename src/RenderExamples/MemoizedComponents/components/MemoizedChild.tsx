// Generate Snippet
import { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import styles from 'MemoizedComponents.module.scss';
// Remove START
import RenderCount from '../../../overall/RenderCount';

export const explanation = "This component is wrapped in React.memo() AND receives a memoized callback (useCallback). It only re-renders when its props actually change. Both conditions are necessary - React.memo() for shallow prop comparison + useCallback() for stable function references.";
// Remove END

interface MemoizedChildProps {
    value: number;
    onIncrement: () => void;
    expensiveValue: number;
}

const MemoizedChild = memo<MemoizedChildProps>(({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper className={`${styles.card} ${styles.cardGreen}`}>
            <RenderCount componentName="MemoizedChild" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleGreen}`}>
                Memoized Child Component
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ✅ React.memo + useCallback = Optimized
            </Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={onIncrement} 
                variant="contained" 
                className={`${styles.button} ${styles.buttonGreen}`}
            >
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChild.displayName = 'MemoizedChild';

export default MemoizedChild;