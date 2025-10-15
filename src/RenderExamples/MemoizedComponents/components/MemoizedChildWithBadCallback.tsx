import React, { memo } from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { createButtonStyles, createCardStyles, createTitleStyles, infoTextStyles } from '../styles';

interface MemoizedChildWithBadCallbackProps {
    value: number;
    onIncrement: () => void;
    expensiveValue: number;
}

const MemoizedChildWithBadCallback = memo<MemoizedChildWithBadCallbackProps>(({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper 
            sx={createCardStyles('#ffb74d')}
        >
            <RenderCount componentName="MemoizedChildWithBadCallback" />
            <Typography variant="h6" sx={createTitleStyles('#ffb74d')}>
                Memoized Child + Non-Memoized Function
            </Typography>
            <Typography variant="body2" sx={infoTextStyles}>
                ⚠️ React.memo but new function props = Still re-renders
            </Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={onIncrement} 
                variant="contained" 
                sx={createButtonStyles('#ffb74d', '#ffa726')}
            >
                Increment
            </Button>
        </Paper>
    );
});

MemoizedChildWithBadCallback.displayName = 'MemoizedChildWithBadCallback';

export default MemoizedChildWithBadCallback;