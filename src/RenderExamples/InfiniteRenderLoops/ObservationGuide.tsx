import React from 'react';
import { Box, Typography } from '@mui/material';

const ObservationGuide: React.FC = () => {
    return (
        <Box sx={{ mt: 4, p: 3, backgroundColor: '#1e1e1e', borderRadius: 1, border: '1px solid #333' }}>
            <Typography variant="h6" gutterBottom>
                What to Observe:
            </Typography>
            <Typography variant="body2" paragraph>
                • Click the "Increment" button - notice that the components re-render in an infinite loop.
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Infinite Loop Culprit Component:</strong> Responsible for updating the "Last Updated" timestamp every time the parent count changes. It uses a non-memoized function in a useEffect causing infinite renders.
            </Typography>
        </Box>
    );
};

export default ObservationGuide;