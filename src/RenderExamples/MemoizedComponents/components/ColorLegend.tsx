import React from 'react';
import { Box, Typography } from '@mui/material';
import { legendContainerStyles, legendItemStyles, legendSwatchStyles } from '../styles';

const ColorLegend: React.FC = () => {
    return (
        <Box sx={legendContainerStyles}>
            <Typography variant="subtitle2" sx={{ mr: 2, fontWeight: 'bold' }}>
                Component Types:
            </Typography>
            <Box sx={legendItemStyles}>
                <Box sx={legendSwatchStyles('#f44336')} />
                <Typography variant="caption">No Optimization</Typography>
            </Box>
            <Box sx={legendItemStyles}>
                <Box sx={legendSwatchStyles('#ffb74d')} />
                <Typography variant="caption">Partial Optimization</Typography>
            </Box>
            <Box sx={legendItemStyles}>
                <Box sx={legendSwatchStyles('#66bb6a')} />
                <Typography variant="caption">Full Optimization</Typography>
            </Box>
            <Box sx={legendItemStyles}>
                <Box sx={legendSwatchStyles('#ba68c8')} />
                <Typography variant="caption">useMemo Example</Typography>
            </Box>
        </Box>
    );
};

export default ColorLegend;