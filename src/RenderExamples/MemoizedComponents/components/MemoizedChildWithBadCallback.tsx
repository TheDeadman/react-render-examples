// Generate Snippet
import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
// Remove START
import RenderCount from '../../../overall/RenderCount';
// Remove END
import styles from 'MemoizedComponents.module.scss';

export const explanation = "Even though this component is wrapped in React.memo(), it still re-renders every time because it receives a new function reference (handleIncrement1Bad) on each render. React.memo() does shallow comparison - if any prop changes (including function references), it re-renders. This demonstrates why useCallback() and useMemo() are essential when using React.memo().";

interface MemoizedChildWithBadCallbackProps {
    value: number;
    onIncrement: () => void;
    expensiveValue: number;
}

const MemoizedChildWithBadCallback = memo<MemoizedChildWithBadCallbackProps>(({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper className={`${styles.card} ${styles.cardOrange}`}>
            <RenderCount componentName="MemoizedChildWithBadCallback" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleOrange}`}>
                Memoized Child + Non-Memoized Function
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ⚠️ React.memo but new function props = Still re-renders
            </Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={onIncrement} 
                variant="contained" 
                className={`${styles.button} ${styles.buttonOrange}`}
            >
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChildWithBadCallback.displayName = 'MemoizedChildWithBadCallback';

export default MemoizedChildWithBadCallback;