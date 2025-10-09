import React from 'react';
import { Paper, Typography, TextField, Box } from '@mui/material';

interface ParentControlsProps {
    unrelatedState: string;
    onUnrelatedStateChange: (value: string) => void;
    multiplier: number;
    onMultiplierChange: (value: number) => void;
    count1: number;
    count2: number;
}

const ParentControls: React.FC<ParentControlsProps> = ({
    unrelatedState,
    onUnrelatedStateChange,
    multiplier,
    onMultiplierChange,
    count1,
    count2
}) => {
    return (
        <Paper 
            sx={{ 
                p: 2, 
                border: '2px solid #42a5f5',
                borderRadius: 2,
                backgroundColor: '#1e1e1e'
            }}
        >
            <Typography variant="h6" gutterBottom sx={{ color: '#42a5f5', fontWeight: 'bold' }}>
                🎛️ Parent State Controls
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    label="Unrelated State (triggers all renders)"
                    value={unrelatedState}
                    onChange={(e) => onUnrelatedStateChange(e.target.value)}
                    fullWidth
                    sx={{ 
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: '#2a2a2a',
                            '& fieldset': {
                                borderColor: '#555'
                            },
                            '&:hover fieldset': {
                                borderColor: '#42a5f5'
                            }
                        }
                    }}
                />
                <TextField
                    label="Multiplier"
                    type="number"
                    value={multiplier}
                    onChange={(e) => onMultiplierChange(Number(e.target.value))}
                    fullWidth
                    sx={{ 
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: '#2a2a2a',
                            '& fieldset': {
                                borderColor: '#555'
                            },
                            '&:hover fieldset': {
                                borderColor: '#42a5f5'
                            }
                        }
                    }}
                />
                <Typography><strong>Count 1:</strong> {count1}</Typography>
                <Typography><strong>Count 2:</strong> {count2}</Typography>
            </Box>
        </Paper>
    );
};

export default ParentControls;