import React, { useMemo } from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { createCardStyles, createTitleStyles, infoTextStyles } from '../styles';

interface ExpensiveComponentProps {
    multiplier: number;
}

const ExpensiveComponent: React.FC<ExpensiveComponentProps> = ({ multiplier }) => {
    // Without useMemo - this will recalculate on every render
    const expensiveValueBad = multiplier * 1000;
    
    // With useMemo - this will only recalculate when multiplier changes
    const expensiveValueGood = useMemo(() => {
        console.log('Calculating expensive value...');
        return multiplier * 1000;
    }, [multiplier]);

    return (
        <Paper 
            sx={createCardStyles('#ba68c8')}
        >
            <RenderCount componentName="ExpensiveComponent" />
            <Typography variant="h6" sx={createTitleStyles('#ba68c8')}>
                Expensive Computation Component
            </Typography>
            <Typography variant="body2" sx={infoTextStyles}>
                🧮 useMemo prevents expensive recalculations
            </Typography>
            <Typography>Bad Value (recalculates every render): {expensiveValueBad}</Typography>
            <Typography>Good Value (memoized): {expensiveValueGood}</Typography>
        </Paper>
    );
};

export default ExpensiveComponent;