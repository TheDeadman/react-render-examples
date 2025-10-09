import React, { useMemo } from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';

interface ExpensiveComponentProps {
    multiplier: number;
}

const ExpensiveComponent: React.FC<ExpensiveComponentProps> = ({ multiplier }) => {
    // Without useMemo - this will recalculate on every render
    const expensiveValueBad = Array.from({ length: 1000 }, (_, i) => i * multiplier).reduce((a, b) => a + b, 0);
    
    // With useMemo - this will only recalculate when multiplier changes
    const expensiveValueGood = useMemo(() => {
        console.log('Calculating expensive value...');
        return Array.from({ length: 1000 }, (_, i) => i * multiplier).reduce((a, b) => a + b, 0);
    }, [multiplier]);

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
            <RenderCount componentName="ExpensiveComponent" />
            <Typography variant="h6" sx={{ color: '#ba68c8', fontWeight: 'bold' }}>
                Expensive Computation Component
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                🧮 useMemo prevents expensive recalculations
            </Typography>
            <Typography>Bad Value (recalculates every render): {expensiveValueBad}</Typography>
            <Typography>Good Value (memoized): {expensiveValueGood}</Typography>
        </Paper>
    );
};

export default ExpensiveComponent;