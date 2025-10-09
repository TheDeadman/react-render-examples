import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { useMemoizedComponentsContext } from '../context';

const RegularChildContext: React.FC = () => {
    const { count1, handleIncrement1Bad, expensiveValue } = useMemoizedComponentsContext();

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
            <RenderCount componentName="RegularChildContext" />
            <Typography variant="h6" sx={{ color: '#f44336', fontWeight: 'bold' }}>
                Regular Child Component (Context)
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                🔄 Always re-renders (no React.memo)
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={handleIncrement1Bad} variant="contained" color="error" sx={{ mt: 1 }}>
                Increment
            </Button>
        </Paper>
    );
};

export default RegularChildContext;