import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { selectCount1, selectExpensiveValue, incrementCount1 } from '../memoizedComponents.slice';

const MemoizedChild = memo(() => {
    const dispatch = useAppDispatch();
    const count2 = useAppSelector(selectCount1);
    const expensiveValue = useAppSelector(selectExpensiveValue);
    
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
            <RenderCount componentName="MemoizedChildRedux" />
            <Typography variant="h6" sx={{ color: '#66bb6a', fontWeight: 'bold' }}>
                Memoized Child Component (Redux)
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                ⚠️ React.memo + Redux = Still re-renders on ANY state change!
            </Typography>
            <Typography>Value: {count2}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={() => dispatch(incrementCount1())} variant="contained" color="success" sx={{ mt: 1 }}>
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChild.displayName = 'MemoizedChild';

export default MemoizedChild;