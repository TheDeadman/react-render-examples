// Generate Snippet
import { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import { useMemoizedComponentsContext } from '../context';
import styles from 'MemoizedComponents.module.scss';
// Remove START
import RenderCount from '../../../overall/RenderCount';

export const explanation = "This demonstrates the key limitation of React Context: even though this component is wrapped in React.memo(), it still re-renders on EVERY context change. This happens because the context provider creates a new value object on each render, breaking memoization.";
// Remove END

const MemoizedChildContext = memo(() => {
    const { count1, handleIncrement2, expensiveValue } = useMemoizedComponentsContext();

    return (
        <Paper className={`${styles.card} ${styles.cardOrange}`}>
            <RenderCount componentName="MemoizedChildContext" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleOrange}`}>
                Memoized Child Component (Context)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ⚠️ React.memo + Context + useCallback = Still re-renders when any context value changes
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={handleIncrement2} 
                variant="contained" 
                className={`${styles.button} ${styles.buttonOrange}`}
            >
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChildContext.displayName = 'MemoizedChildContext';

export default MemoizedChildContext;