import React from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useMemoizedComponentsContext } from '../context';

const ExpensiveComponentBadContext: React.FC = () => {
    const { multiplier } = useMemoizedComponentsContext();
    
    // ❌ BAD: This will recalculate on every render
    const expensiveValue = (() => {
        console.log('❌ BAD (Context): Recalculating expensive value on every render!');
        return multiplier * 1000;
    })();

    return (
        <Paper 
            sx={{ 
                p: 2, 
                m: 1, 
                border: '2px solid #f44336',
                borderRadius: 2,
                backgroundColor: '#1a1a1a',
                '&:hover': {
                    backgroundColor: '#2a2a2a'
                }
            }}
        >
            <RenderCount componentName="ExpensiveComponentBadContext" />
            <Typography variant="h6" sx={{ color: '#f44336', fontWeight: 'bold' }}>
                ❌ Non-Memoized Calculation (Context)
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                🔄 Recalculates on every render (expensive!)
            </Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Typography variant="caption" sx={{ color: '#f44336', fontStyle: 'italic' }}>
                Check console - this logs on every context change!
            </Typography>
        </Paper>
    );
};

export default ExpensiveComponentBadContext;