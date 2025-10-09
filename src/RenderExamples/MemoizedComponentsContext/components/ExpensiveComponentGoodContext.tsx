import React, { useMemo } from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useMemoizedComponentsContext } from '../context';

const ExpensiveComponentGoodContext: React.FC = () => {
    const { multiplier } = useMemoizedComponentsContext();
    
    // ✅ GOOD: This only recalculates when multiplier changes
    const expensiveValue = useMemo(() => {
        console.log('✅ GOOD (Context): Calculating expensive value with useMemo - only when multiplier changes!');
        return multiplier * 1000;
    }, [multiplier]);

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
            <RenderCount componentName="ExpensiveComponentGoodContext" />
            <Typography variant="h6" sx={{ color: '#66bb6a', fontWeight: 'bold' }}>
                ✅ Memoized Expensive Component (Context)
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

export default ExpensiveComponentGoodContext;