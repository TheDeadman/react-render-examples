// Generate Snippet
import React from 'react';
import { Paper, Typography, TextField, Box } from '@mui/material';
import styles from 'MemoizedComponents.module.scss';

export const explanation = "Parent component controls state that affects child components. Changing 'Unrelated State' triggers all child renders, while changing 'Multiplier' affects only those depending on it.";

interface ParentControlsProps {
    unrelatedState: string;
    onUnrelatedStateChange: (value: string) => void;
    multiplier: number;
    onMultiplierChange: (value: number) => void;
    count1: number;
}

const ParentControls: React.FC<ParentControlsProps> = ({
    unrelatedState,
    onUnrelatedStateChange,
    multiplier,
    onMultiplierChange,
    count1
}) => {
    return (
        <Paper className={`${styles.card} ${styles.cardBlue} ${styles.cardParent}`}>
            <Typography variant="h6" gutterBottom className={`${styles.title} ${styles.titleBlue}`}>
                🎛️ Parent State Controls
            </Typography>
            <Box className={styles.parentControls}>
                <TextField
                    label="Unrelated State (triggers all renders)"
                    value={unrelatedState}
                    onChange={(e) => onUnrelatedStateChange(e.target.value)}
                    fullWidth
                    className={styles.textFieldBlue}
                />
                <TextField
                    label="Multiplier"
                    type="number"
                    value={multiplier}
                    onChange={(e) => onMultiplierChange(Number(e.target.value))}
                    fullWidth
                    className={styles.textFieldBlue}
                />
                <Typography className={styles.infoText}><strong>Count 1:</strong> {count1}</Typography>
            </Box>
        </Paper>
    );
};

export default ParentControls;