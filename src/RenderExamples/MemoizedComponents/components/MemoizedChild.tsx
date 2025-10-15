import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import styles from 'MemoizedComponents.module.scss';

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