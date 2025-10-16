import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { selectCount1, selectExpensiveValue, incrementCount1 } from '../memoizedComponents.slice';
import styles from 'MemoizedComponents.module.scss';

const MemoizedChildWithBadCallback = memo(() => {
    const dispatch = useAppDispatch();
    const count1 = useAppSelector(selectCount1);
    const expensiveValue = useAppSelector(selectExpensiveValue);
    
    const handleIncrement = () => dispatch(incrementCount1());
    
    return (
        <Paper className={`${styles.card} ${styles.cardOrange}`}>
            <RenderCount componentName="MemoizedChildWithBadCallbackRedux" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleOrange}`}>
                Memoized Child + Non-Memoized Function (Redux)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ✅ React.memo + Redux action that doesn't need to be memoized.
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={handleIncrement} 
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