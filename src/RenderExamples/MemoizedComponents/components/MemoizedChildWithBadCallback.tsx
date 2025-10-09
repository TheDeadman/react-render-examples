import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';

interface MemoizedChildWithBadCallbackProps {
    value: number;
    onIncrement: () => void;
    expensiveValue: number;
}

const MemoizedChildWithBadCallback = memo<MemoizedChildWithBadCallbackProps>(({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper 
            sx={{ 
                p: 2, 
                m: 1, 
                border: '2px solid #ffb74d',
                borderRadius: 2,
                backgroundColor: '#1a1a1a',
                '&:hover': {
                    backgroundColor: '#2a2a2a'
                }
            }}
        >
            <RenderCount componentName="MemoizedChildWithBadCallback" />
            <Typography variant="h6" sx={{ color: '#ffb74d', fontWeight: 'bold' }}>
                Memoized Child + Non-Memoized Function
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                ⚠️ React.memo but new function props = Still re-renders
            </Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={onIncrement} 
                variant="contained" 
                sx={{ 
                    mt: 1, 
                    backgroundColor: '#ffb74d', 
                    '&:hover': { backgroundColor: '#ffa726' } 
                }}
            >
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChildWithBadCallback.displayName = 'MemoizedChildWithBadCallback';

export default MemoizedChildWithBadCallback;