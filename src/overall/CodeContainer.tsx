import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

type CodeContainerProps = {
    children: ReactNode;
}

const CodeContainer = ({ children }: CodeContainerProps) => {
    return (
        <Box 
            sx={{ 
                display: 'flex',
                gap: 2,
                p: 2,
                backgroundColor: '#1e1e1e',
                minHeight: '100vh'
            }}
        >
            {children}
        </Box>
    );
};

export default CodeContainer;
