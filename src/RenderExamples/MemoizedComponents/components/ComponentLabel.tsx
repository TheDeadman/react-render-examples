import React from 'react';
import { Box, Typography } from '@mui/material';
import { createLabelStyles } from '../styles';

interface ComponentLabelProps {
    color: string;
    children: React.ReactNode;
}

const ComponentLabel: React.FC<ComponentLabelProps> = ({ color, children }) => {
    return (
        <Box sx={{ position: 'relative' }}>
            <Typography 
                variant="caption" 
                sx={createLabelStyles(color)}
            >
                CHILD COMPONENT
            </Typography>
            {children}
        </Box>
    );
};

export default ComponentLabel;