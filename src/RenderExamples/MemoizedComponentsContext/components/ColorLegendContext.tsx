import React from 'react';
import { Box, Typography } from '@mui/material';

const ColorLegendContext: React.FC = () => {
    return (
        <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 2, 
            p: 2, 
            backgroundColor: 'rgba(255,255,255,0.05)', 
            borderRadius: 1,
            mb: 2
        }}>
            <Typography variant="subtitle2" sx={{ mr: 2, fontWeight: 'bold' }}>
                Component Types (Context Version):
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box sx={{ width: 16, height: 16, backgroundColor: '#f44336', borderRadius: 1 }} />
                <Typography variant="caption">No Optimization</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box sx={{ width: 16, height: 16, backgroundColor: '#ffb74d', borderRadius: 1 }} />
                <Typography variant="caption">Context + React.memo (Still Re-renders)</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box sx={{ width: 16, height: 16, backgroundColor: '#66bb6a', borderRadius: 1 }} />
                <Typography variant="caption">Context + useMemo</Typography>
            </Box>
        </Box>
    );
};

export default ColorLegendContext;