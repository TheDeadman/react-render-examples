import React from 'react';
import { Paper, Typography, TextField, Box } from '@mui/material';
import { createCardStyles, createTextFieldStyles, createTitleStyles, infoTextStyles } from '../styles';

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
        <Paper 
            sx={createCardStyles('#42a5f5', {
                m: 0,
                backgroundColor: '#1e1e1e',
                '&:hover': {
                    backgroundColor: '#1e1e1e'
                }
            })}
        >
            <Typography variant="h6" gutterBottom sx={createTitleStyles('#42a5f5')}>
                🎛️ Parent State Controls
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    label="Unrelated State (triggers all renders)"
                    value={unrelatedState}
                    onChange={(e) => onUnrelatedStateChange(e.target.value)}
                    fullWidth
                    sx={createTextFieldStyles('#42a5f5')}
                />
                <TextField
                    label="Multiplier"
                    type="number"
                    value={multiplier}
                    onChange={(e) => onMultiplierChange(Number(e.target.value))}
                    fullWidth
                    sx={createTextFieldStyles('#42a5f5')}
                />
                <Typography sx={infoTextStyles}><strong>Count 1:</strong> {count1}</Typography>
            </Box>
        </Paper>
    );
};

export default ParentControls;