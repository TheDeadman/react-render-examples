import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { createButtonStyles, createCardStyles, createTitleStyles, infoTextStyles } from '../styles';

interface MemoizedChildProps {
    value: number;
    onIncrement: () => void;
    expensiveValue: number;
}

const MemoizedChild = memo<MemoizedChildProps>(({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper 
            sx={createCardStyles('#66bb6a')}
        >
            <RenderCount componentName="MemoizedChild" />
            <Typography variant="h6" sx={createTitleStyles('#66bb6a')}>
                Memoized Child Component
            </Typography>
            <Typography variant="body2" sx={infoTextStyles}>
                ✅ React.memo + useCallback = Optimized
            </Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={onIncrement} 
                variant="contained" 
                sx={createButtonStyles('#66bb6a', '#4caf50')}
            >
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChild.displayName = 'MemoizedChild';

export default MemoizedChild;