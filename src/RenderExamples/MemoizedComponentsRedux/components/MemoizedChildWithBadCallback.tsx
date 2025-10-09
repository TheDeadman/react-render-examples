import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { selectCount1, selectExpensiveValue, incrementCount1 } from '../memoizedComponents.slice';

const MemoizedChildWithBadCallback = memo(() => {
    const dispatch = useAppDispatch();
    const count1 = useAppSelector(selectCount1);
    const expensiveValue = useAppSelector(selectExpensiveValue);
    
    // This demonstrates the "bad" pattern - creating a new function on every render
    const handleIncrement = () => dispatch(incrementCount1());
    
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
            <RenderCount componentName="MemoizedChildWithBadCallbackRedux" />
            <Typography variant="h6" sx={{ color: '#ffb74d', fontWeight: 'bold' }}>
                Memoized Child + Non-Memoized Function (Redux)
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                ⚠️ React.memo + Redux + Non-memoized function = Still re-renders!
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={handleIncrement} 
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