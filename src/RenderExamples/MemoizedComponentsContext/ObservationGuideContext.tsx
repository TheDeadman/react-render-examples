import React from 'react';
import { Box, Typography } from '@mui/material';

const ObservationGuideContext: React.FC = () => {
    return (
        <Box sx={{ mt: 4, p: 3, backgroundColor: '#1e1e1e', borderRadius: 1, border: '1px solid #333' }}>
            <Typography variant="h6" gutterBottom>
                What to Observe (Context Version):
            </Typography>
            <Typography variant="body2" paragraph>
                • Type in "Unrelated State" field - notice how ALL context consumers re-render
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Regular Child (Context):</strong> Always re-renders (no React.memo)
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Memoized Children (Context):</strong> React.memo doesn't help. All context consumers re-render when ANY context value changes
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Key Issue:</strong> Context creates a new object reference on every render, breaking React.memo optimization. Even if you try to wrap the return value of a context in useMemo, it won't help in the vast majority of cases.
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>useMemo still works:</strong> Expensive calculations can still be optimized within components
            </Typography>
        </Box>
    );
};

export default ObservationGuideContext;