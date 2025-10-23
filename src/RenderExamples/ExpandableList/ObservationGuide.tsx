import React from 'react';
import { Box, Typography } from '@mui/material';

const ObservationGuide: React.FC = () => {
    return (
        <Box sx={{ mt: 4, p: 3, backgroundColor: '#1e1e1e', borderRadius: 1, border: '1px solid #333' }}>
            <Typography variant="h6" gutterBottom>
                What to Observe:
            </Typography>
            
            <Typography variant="body2" paragraph>
                • The only state that is changing in this example is the index of the opened item.
            </Typography>
            <Typography variant="body2" paragraph>
                • Notice how all items re-render even though we are only changing the properties of one or two items. The prop being changed is simply a boolean value being swapped between true / false on specific items.
            </Typography>
        </Box>
    );
};



export default ObservationGuide;