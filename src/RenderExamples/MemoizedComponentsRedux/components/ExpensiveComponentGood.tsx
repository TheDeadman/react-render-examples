import React, { useMemo } from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useAppSelector } from 'store/hooks';
import { selectExpensiveValue, selectMultiplier } from '../memoizedComponents.slice';

const ExpensiveComponentGood = () => {
    const multiplier = useAppSelector(selectMultiplier);
    const expensiveValue = useAppSelector(selectExpensiveValue);

    return (
        <Paper 
            sx={{ 
                p: 2, 
                m: 1, 
                border: '2px solid #ba68c8',
                borderRadius: 2,
                backgroundColor: '#1a1a1a',
                '&:hover': {
                    backgroundColor: '#2a2a2a'
                }
            }}
        >
            <RenderCount componentName="ExpensiveComponentGood" />
            <Typography variant="h6" sx={{ color: '#ba68c8', fontWeight: 'bold' }}>
                ✅ Memoized Calculation
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                🧮 useMemo prevents expensive recalculations
            </Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Typography variant="caption" sx={{ color: '#66bb6a', fontStyle: 'italic' }}>
                Check console - this only logs when multiplier changes!
            </Typography>
        </Paper>
    );
};

export default ExpensiveComponentGood;