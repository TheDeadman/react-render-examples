import React from 'react';
import { Paper, Typography, TextField, Box } from '@mui/material';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { selectMultiplier, selectUnrelatedState, setUnrelatedState, setMultiplier, selectCount1, selectCount2 } from '../memoizedComponents.slice';

const ParentControlsContext: React.FC = () => {
    const dispatch = useAppDispatch();
    const unrelatedState = useAppSelector(selectUnrelatedState);
    const multiplier = useAppSelector(selectMultiplier);
    const count1 = useAppSelector(selectCount1);
    const count2 = useAppSelector(selectCount2);

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
                🎛️ Context State Controls
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    label="Unrelated State (triggers ALL context consumers)"
                    value={unrelatedState}
                    onChange={(e) => dispatch(setUnrelatedState(e.target.value))}
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
                    onChange={(e) => dispatch(setMultiplier(Number(e.target.value)))}
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

export default ParentControlsContext;