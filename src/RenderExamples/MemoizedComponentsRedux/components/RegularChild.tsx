// Generate Snippet
import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { selectCount1, selectExpensiveValue, incrementCount1 } from '../memoizedComponents.slice';
import styles from 'MemoizedComponents.module.scss';
// Remove START
import RenderCount from '../../../overall/RenderCount';
export const explanation = "This component only re-renders when the subscribed state changes. The parent never re-renders in this example, so memoization is not needed here.";
// Remove END

const RegularChild: React.FC = () => {
    const dispatch = useAppDispatch();
    const count1 = useAppSelector(selectCount1);
    const expensiveValue = useAppSelector(selectExpensiveValue);

    return (
        <Paper
            // Remove START
            className={`${styles.card} ${styles.cardRed}`}
        // Remove END
        >
            <RenderCount componentName="RegularChildRedux" />
            <Typography
                // Remove START
                variant="h6" className={`${styles.title} ${styles.titleRed}`}
            // Remove END
            >
                Regular Child Component (Redux)
            </Typography>
            <Typography
                // Remove START
                variant="body2" className={styles.infoText}
            // Remove END
            >
                🔄 Always re-renders (no React.memo)
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button
                onClick={() => dispatch(incrementCount1())}
                // Remove START

                variant="contained"
                className={`${styles.button} ${styles.buttonRed}`}
            // Remove END
            >
                Increment
            </Button>
        </Paper>
    );
};

export default RegularChild;