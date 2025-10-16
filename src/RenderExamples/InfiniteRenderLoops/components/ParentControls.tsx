import React from 'react';
import { Paper, Typography, Button, Box } from '@mui/material';
import styles from 'MemoizedComponents.module.scss';
import { useInfiniteLoopContext } from '../context';

const ParentControls = () => {
    const { handleIncrement } = useInfiniteLoopContext();
    return (
        <Paper className={`${styles.card} ${styles.cardBlue} ${styles.cardParent}`}>
            <Typography variant="h6" gutterBottom className={`${styles.title} ${styles.titleBlue}`}>
                🎛️ Parent State Controls
            </Typography>
            <Box className={styles.parentControls}>
                <Button 
                    onClick={handleIncrement} 
                    variant="contained" 
                    className={`${styles.button} ${styles.buttonGreen}`}
                >
                    Increment
                </Button>
            </Box>
        </Paper>
    );
};

export default ParentControls;