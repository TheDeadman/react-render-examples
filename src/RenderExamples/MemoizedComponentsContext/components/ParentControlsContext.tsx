import React from 'react';
import { Paper, Typography, TextField, Box } from '@mui/material';
import { useMemoizedComponentsContext } from '../context';
import styles from 'MemoizedComponents.module.scss';

const ParentControlsContext: React.FC = () => {
    const { 
        unrelatedState, 
        setUnrelatedState, 
        multiplier, 
        setMultiplier, 
        count1
    } = useMemoizedComponentsContext();

    return (
        <Paper className={`${styles.card} ${styles.cardBlue} ${styles.cardParent}`}>
            <Typography variant="h6" gutterBottom className={`${styles.title} ${styles.titleBlue}`}>
                🎛️ Context State Controls
            </Typography>
            <Box className={styles.parentControls}>
                <TextField
                    label="Unrelated State (triggers ALL context consumers)"
                    value={unrelatedState}
                    onChange={(e) => setUnrelatedState(e.target.value)}
                    fullWidth
                    className={styles.textFieldBlue}
                />
                <TextField
                    label="Multiplier"
                    type="number"
                    value={multiplier}
                    onChange={(e) => setMultiplier(Number(e.target.value))}
                    fullWidth
                    className={styles.textFieldBlue}
                />
                <Typography className={styles.infoText}><strong>Count 1:</strong> {count1}</Typography>
            </Box>
        </Paper>
    );
};

export default ParentControlsContext;