import { Box, Typography } from '@mui/material';

const ObservationGuide = () => {
    return (
        <Box sx={{ mt: 4, p: 3, backgroundColor: '#1e1e1e', borderRadius: 1, border: '1px solid #333' }}>
            <Typography variant="h6" gutterBottom>
                What to Observe:
            </Typography>
            <Typography variant="body2" paragraph>
                • Type in "Unrelated State" field - notice which components re-render even though NO child components are actually using this value.
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Regular Child:</strong> Always re-renders. It has no React.memo so parent re-renders always cause it to re-render.
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Memoized Child + Non-Memoized Function:</strong> Has React.memo but it will never work because it receives a new function reference each render.
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Memoized Child + useCallback Function:</strong> The same as above but works properly because it receives a memoized function that was created with useCallback. Only re-renders when count1 or expensiveValue actually changes.
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Non-Memoized Expensive Component:</strong> Recalculates on every render - check console logs
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Memoized Expensive Component:</strong> Only recalculates when multiplier changes - check console logs
            </Typography>
        </Box>
    );
};

export default ObservationGuide;