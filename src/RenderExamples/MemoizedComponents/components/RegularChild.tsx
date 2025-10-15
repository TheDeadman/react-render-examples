import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { createButtonStyles, createCardStyles, createTitleStyles, infoTextStyles } from '../styles';

interface RegularChildProps {
    value: number;
    onIncrement: () => void;
    expensiveValue: number;
}

const RegularChild: React.FC<RegularChildProps> = ({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper 
            sx={createCardStyles('#f44336')}
        >
            <RenderCount componentName="RegularChild" />
            <Typography variant="h6" sx={createTitleStyles('#f44336')}>
                Regular Child Component
            </Typography>
            <Typography variant="body2" sx={infoTextStyles}>
                🔄 Always re-renders (no React.memo)
            </Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={onIncrement} 
                variant="contained" 
                sx={createButtonStyles('#f44336', '#d32f2f')}
            >
                Increment
            </Button>
        </Paper>
    );
};

export default RegularChild;