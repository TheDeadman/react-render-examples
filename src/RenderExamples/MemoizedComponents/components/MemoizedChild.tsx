import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';

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
        <Paper 
            sx={{ 
                p: 2, 
                m: 1, 
                border: '2px solid #66bb6a',
                borderRadius: 2,
                backgroundColor: '#1a1a1a',
                '&:hover': {
                    backgroundColor: '#2a2a2a'
                }
            }}
        >
            <RenderCount componentName="MemoizedChild" />
            <Typography variant="h6" sx={{ color: '#66bb6a', fontWeight: 'bold' }}>
                Memoized Child Component
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                ✅ React.memo + useCallback = Optimized
            </Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={onIncrement} variant="contained" color="success" sx={{ mt: 1 }}>
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChild.displayName = 'MemoizedChild';

export default MemoizedChild;