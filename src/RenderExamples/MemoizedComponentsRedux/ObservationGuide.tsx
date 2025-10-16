import React from 'react';
import { Box, Typography } from '@mui/material';

const ObservationGuide: React.FC = () => {
    return (
        <Box sx={{ mt: 4, p: 3, backgroundColor: '#1e1e1e', borderRadius: 1, border: '1px solid #333' }}>
            <Typography variant="h6" gutterBottom>
                What to Observe (Redux Version):
            </Typography>
            <Typography variant="body2" paragraph>
                • Type in "Unrelated State" field - notice NO child components re-render. Redux only re-renders components when their subscribed state changes. 
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Regular Child (Redux):</strong> Re-renders when count1 or multiplier changes (subscribed via selectCount1 and selectExpensiveValue). This component would re-render if the parent re-rendered.
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Memoized Child + Non-Memoized Function (Redux):</strong> React.memo works with Redux. Redux action functions do not get recreated each render and will never be the cause of a re-render. Only re-renders when count1 or multiplier changes, not on unrelated state
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Memoized Child (Redux):</strong> React.memo works perfectly. Only re-renders when subscribed state (count1 or multiplier) actually changes
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Expensive Components (Red & Purple):</strong> Only re-render when multiplier changes since they only subscribe to selectMultiplier
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>Key Redux Insight:</strong> Components only re-render when state they subscribe to via useAppSelector changes - not all state changes
            </Typography>
            <Typography variant="body2" paragraph>
                • <strong>The difference:</strong> ExpensiveComponentBad recalculates on every render, ExpensiveComponentGood uses useMemo to prevent unnecessary calculations
            </Typography>
            <Typography variant="body2">
                • <strong>Redux + React.memo:</strong> Works great together. Redux's selective subscriptions + React.memo provide efficient re-rendering
            </Typography>
        </Box>
    );
};

export default ObservationGuide;