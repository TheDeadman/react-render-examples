import { Box, Typography } from '@mui/material';

const ObservationGuide = () => {
    return (
        <Box sx={{ mt: 4, p: 3, backgroundColor: '#1e1e1e', borderRadius: 1, border: '1px solid #333' }}>
            <Typography variant="h6" gutterBottom>
                What to Observe:
            </Typography>
            
            <Typography variant="body2" paragraph>
                • The only state that is changing in this example is the index of the opened item.
            </Typography>
                        <Typography variant="body2" paragraph>
                • The state lives outside of the react components in a redux store.
            </Typography>
            <Typography variant="body2" paragraph>
                • Notice how only the list items that are expanding or collapsing re-render. This is because each list item is connected to the redux store and only selects its own expansion state.
            </Typography>
        </Box>
    );
};

export default ObservationGuide;