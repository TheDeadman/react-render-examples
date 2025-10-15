import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useMemoizedComponentsContext } from '../context';
import styles from 'MemoizedComponents.module.scss';

const RegularChildContext: React.FC = () => {
    const { count1, handleIncrement1Bad, expensiveValue } = useMemoizedComponentsContext();

    return (
        <Paper className={`${styles.card} ${styles.cardRed}`}>
            <RenderCount componentName="RegularChildContext" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleRed}`}>
                Regular Child Component (Context)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🔄 Always re-renders (no React.memo)
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={handleIncrement1Bad} 
                variant="contained" 
                className={`${styles.button} ${styles.buttonRed}`}
            >
                Increment
            </Button>
        </Paper>
    );
};

export default RegularChildContext;