// Generate Snippet
import { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import { useMemoizedComponentsContext } from '../context';
import styles from 'MemoizedComponents.module.scss';
// Remove START
import RenderCount from '../../../overall/RenderCount';

export const explanation = "This component shows that with Context, even the distinction between memoized and non-memoized functions becomes irrelevant for preventing re-renders. React.memo() is completely ineffective with Context because context consumers always re-render when the context value changes, regardless of optimization strategies.";
// Remove END

const MemoizedChildWithBadCallbackContext = memo(() => {
    const { count1, handleIncrement1Bad, expensiveValue } = useMemoizedComponentsContext();

    return (
        <Paper className={`${styles.card} ${styles.cardOrange}`}>
            <RenderCount componentName="MemoizedChildWithBadCallbackContext" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleOrange}`}>
                Memoized Child + Non-Memoized Function (Context)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ⚠️ React.memo + Context + Non-Memoized Function = Always re-renders
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={handleIncrement1Bad} 
                variant="contained" 
                className={`${styles.button} ${styles.buttonOrange}`}
            >
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChildWithBadCallbackContext.displayName = 'MemoizedChildWithBadCallbackContext';

export default MemoizedChildWithBadCallbackContext;