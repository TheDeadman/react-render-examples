import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';

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
            <RenderCount componentName="RegularChild" />
            <Typography variant="h6" sx={{ color: '#f44336', fontWeight: 'bold' }}>
                Regular Child Component
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                🔄 Always re-renders (no React.memo)
            </Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={onIncrement} variant="contained" color="error" sx={{ mt: 1 }}>
                Increment
            </Button>
        </Paper>
    );
};

export default RegularChild;