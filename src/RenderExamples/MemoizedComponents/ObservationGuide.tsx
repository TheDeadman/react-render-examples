import React from 'react';
import { Box, Typography } from '@mui/material';

const ObservationGuide: React.FC = () => {
    return (
        <Box sx={{ mt: 4, p: 3, backgroundColor: '#1e1e1e', borderRadius: 1, border: '1px solid #333' }}>
            <Typography variant="h6" gutterBottom>
                What to Observe:
            </Typography>
            <Typography variant="body2" paragraph>
                • Type in "Unrelated State" field - notice which components re-render
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Regular Child:</strong> Always re-renders (no React.memo)
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Memoized Child + Non-Memoized Function:</strong> Still re-renders every time because it receives a new function reference, even though it's wrapped in React.memo!
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Memoized Child (with useCallback):</strong> Only re-renders when count2 or expensiveValue actually changes
            </Typography>
            <Typography variant="body2" paragraph>
                • ExpensiveComponent shows the difference between memoized and non-memoized calculations
            </Typography>
            <Typography variant="body2">
                • Check the browser console to see when expensive calculations occur
            </Typography>
        </Box>
    );
};

export default ObservationGuide;