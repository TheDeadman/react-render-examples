import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { selectCount1, selectExpensiveValue, incrementCount1 } from '../memoizedComponents.slice';
import styles from 'MemoizedComponents.module.scss';

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
                ⚠️ React.memo + Redux rerenders when the subscribed state updates
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