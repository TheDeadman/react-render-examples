import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useMemoizedComponentsContext } from '../context';

const MemoizedChildWithBadCallbackContext = memo(() => {
    const { count1, handleIncrement1Bad, expensiveValue } = useMemoizedComponentsContext();

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
            <RenderCount componentName="MemoizedChildWithBadCallbackContext" />
            <Typography variant="h6" sx={{ color: '#ffb74d', fontWeight: 'bold' }}>
                Memoized Child + Non-Memoized Function (Context)
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                ⚠️ React.memo + Context + Non-Memoized Function = Always re-renders!
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={handleIncrement1Bad} variant="contained" color="warning" sx={{ mt: 1 }}>
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChildWithBadCallbackContext.displayName = 'MemoizedChildWithBadCallbackContext';

export default MemoizedChildWithBadCallbackContext;