// Generate Snippet
import { Box, Typography } from "@mui/material";
import { useAppContextOne } from "../ContextOne";

// Remove START
import RenderCount from "overall/RenderCount";

export const explanation = "Consumer One";
// Remove END

const ContextOneConsumer = () => {
    const { textVal } = useAppContextOne();
    return (
        <Box 
            // Remove START
            sx={{ 
                p: 2, 
                m: 1, 
                border: '2px solid #ff6f00',
                borderRadius: 2,
                backgroundColor: '#1a1a1a',
                '&:hover': {
                    backgroundColor: '#2a2a2a'
                }
            }}
            // Remove END
        >
            {/* Remove START */}
            <RenderCount componentName="ConsumerOne" />
            {/* Remove END */}
            <Typography
                // Remove START
            variant="body2" sx={{ color: '#ff6f00', fontWeight: 'bold' }}
                // Remove END
            >
                Context One Consumer
            </Typography>
            <Typography>Value: {textVal}</Typography>
        </Box>
    )
}

export default ContextOneConsumer;