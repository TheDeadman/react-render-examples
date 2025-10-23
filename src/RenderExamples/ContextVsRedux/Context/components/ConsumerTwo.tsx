// Generate Snippet
import { Box, Typography } from "@mui/material";
import { useAppContextTwo } from "../ContextTwo";

// Remove START
import RenderCount from "overall/RenderCount";

export const explanation = "Consumer Two";
// Remove END

const ContextTwoConsumer = () => {
    const { textValTwo, lastUpdated } = useAppContextTwo();
    return (
        <Box 
            // Remove START
            sx={{ 
                p: 2, 
                m: 1, 
                border: '2px solid #9c27b0',
                borderRadius: 2,
                backgroundColor: '#1a1a1a',
                '&:hover': {
                    backgroundColor: '#2a2a2a'
                }
            }}
            // Remove END
        >
            {/* Remove START */}
            <RenderCount componentName="ConsumerTwo" />
            {/* Remove END */}
            <Typography
                // Remove START
            variant="body2" sx={{ color: '#9c27b0', fontWeight: 'bold' }}
                // Remove END
            >
                Context Two Consumer
            </Typography>
            <Typography>Value: {textValTwo}</Typography>
            <Typography>Updated: {lastUpdated}</Typography>
        </Box>
    )
}

export default ContextTwoConsumer;