import React from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { createCardStyles, createCaptionStyles, createTitleStyles, infoTextStyles } from '../styles';

interface ExpensiveComponentBadProps {
    multiplier: number;
}

function calculateExpensiveValue(multiplier: number): number {
    console.log('❌ BAD: Recalculating expensive value on every render');
    return multiplier * 1000;
}

const ExpensiveComponentBad: React.FC<ExpensiveComponentBadProps> = ({ multiplier }) => {
    // ❌ BAD: This will recalculate on every render
    const expensiveValue = calculateExpensiveValue(multiplier);

    return (
        <Paper 
            sx={createCardStyles('#f44336')}
        >
            <RenderCount componentName="ExpensiveComponentBad" />
            <Typography variant="h6" sx={createTitleStyles('#f44336')}>
                ❌ Non-Memoized Calculation
            </Typography>
            <Typography variant="body2" sx={infoTextStyles}>
                🔄 Recalculates on every render (expensive)
            </Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Typography variant="caption" sx={createCaptionStyles('#f44336')}>
                Check the console to see how often this logs during parent renders
            </Typography>
        </Paper>
    );
};

export default ExpensiveComponentBad;