// Generate Snippet
import { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { selectCount1, selectExpensiveValue, incrementCount1 } from '../memoizedComponents.slice';
import styles from 'MemoizedComponents.module.scss';
// Remove START
import RenderCount from '../../../overall/RenderCount';
export const explanation = "React.memo is unnecessary here because the component already uses useAppSelector to subscribe only to specific pieces of state. The parent does not re-render in this example. The component will re-render only when those selected values change.";
// Remove END

const MemoizedChild = memo(() => {
    const dispatch = useAppDispatch();
    const count1 = useAppSelector(selectCount1);
    const expensiveValue = useAppSelector(selectExpensiveValue);
    
    return (
        <Paper className={`${styles.card} ${styles.cardGreen}`}>
            <RenderCount componentName="MemoizedChildRedux" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleGreen}`}>
                Memoized Child Component (Redux)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ✅ React.memo + Redux action that doesn't need to be memoized.
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button
                onClick={() => dispatch(incrementCount1())}
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