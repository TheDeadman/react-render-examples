import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useMemoizedComponentsContext } from '../context';
import styles from 'MemoizedComponents.module.scss';

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