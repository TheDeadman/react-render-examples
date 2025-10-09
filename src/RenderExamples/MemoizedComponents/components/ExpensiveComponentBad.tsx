import React from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';

interface ExpensiveComponentBadProps {
    multiplier: number;
}

function calculateExpensiveValue(multiplier: number): number {
    console.log('❌ BAD: Recalculating expensive value on every render!');
    return Array.from({ length: 10000 }, (_, i) => i * multiplier).reduce((a, b) => a + b, 0);
}

const ExpensiveComponentBad: React.FC<ExpensiveComponentBadProps> = ({ multiplier }) => {
    // ❌ BAD: This will recalculate on every render
    const expensiveValue = calculateExpensiveValue(multiplier);

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
            <RenderCount componentName="ExpensiveComponentBad" />
            <Typography variant="h6" sx={{ color: '#f44336', fontWeight: 'bold' }}>
                ❌ Non-Memoized Calculation
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                🔄 Recalculates on every render (expensive!)
            </Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Typography variant="caption" sx={{ color: '#f44336', fontStyle: 'italic' }}>
                Check console - this logs on every parent re-render!
            </Typography>
        </Paper>
    );
};

export default ExpensiveComponentBad;