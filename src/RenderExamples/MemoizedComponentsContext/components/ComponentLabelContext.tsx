import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface ComponentLabelProps {
    color: string;
    children: ReactNode;
}

const ComponentLabelContext: React.FC<ComponentLabelProps> = ({ color, children }) => {
    return (
        <Box sx={{ position: 'relative' }}>
            <Typography 
                variant="caption" 
                sx={{ 
                    position: 'absolute',
                    top: -10,
                    left: 10,
                    backgroundColor: color,
                    color: 'white',
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    zIndex: 1
                }}
            >
                CHILD COMPONENT
            </Typography>
            {children}
        </Box>
    );
};

export default ComponentLabelContext;