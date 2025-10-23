// Generate Snippet
import { Box, Typography } from "@mui/material";
import { useAppContextThree } from "../ContextThree";

// Remove START
import RenderCount from "overall/RenderCount";

export const explanation = "Consumer Three";
// Remove END

const ContextThreeConsumer = () => {
    const { textValThree, lastUpdated } = useAppContextThree();
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
            <RenderCount componentName="ConsumerThree" />
            {/* Remove END */}
            <Typography
                // Remove START
            variant="body2" sx={{ color: '#9c27b0', fontWeight: 'bold' }}
                // Remove END
            >
                Context Three Consumer
            </Typography>
            <Typography>Value: {textValThree}</Typography>
            <Typography>Updated: {lastUpdated}</Typography>
        </Box>
    )
}

export default ContextThreeConsumer;