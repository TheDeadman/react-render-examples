import React, { useMemo } from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { createCardStyles, createCaptionStyles, createTitleStyles, infoTextStyles } from '../styles';

interface ExpensiveComponentGoodProps {
    multiplier: number;
}

function calculateExpensiveValue(multiplier: number): number {
    console.log('✅ GOOD: Calculating expensive value with useMemo - only when multiplier changes');
    return multiplier * 1000;
}

const ExpensiveComponentGood: React.FC<ExpensiveComponentGoodProps> = ({ multiplier }) => {
    // ✅ GOOD: This only recalculates when multiplier changes
    const expensiveValue = useMemo(() => {
        return calculateExpensiveValue(multiplier);
    }, [multiplier]);

    return (
        <Paper 
            sx={createCardStyles('#ba68c8')}
            className='styled-card'
        >
            <RenderCount componentName="ExpensiveComponentGood" />
            <Typography variant="h6" sx={createTitleStyles('#ba68c8')}>
                ✅ Memoized Calculation
            </Typography>
            <Typography variant="body2" sx={infoTextStyles}>
                🧮 useMemo prevents expensive recalculations
            </Typography>
            <Typography>Multiplier: {multiplier}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Typography variant="caption" sx={createCaptionStyles('#66bb6a')}>
                Check console - this only logs when multiplier changes.
            </Typography>
        </Paper>
    );
};

export default ExpensiveComponentGood;