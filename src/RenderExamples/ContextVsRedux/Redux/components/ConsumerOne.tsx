// Generate Snippet
import { Box, Typography } from "@mui/material";

// Remove START
import RenderCount from "overall/RenderCount";
import { useAppSelector } from "store/hooks";
import { selectTextValOne } from "../one.slice";

export const explanation = "Consumer One";
// Remove END

const SliceOneConsumer = () => {
    const textVal = useAppSelector(selectTextValOne);
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
                Redux One Consumer
            </Typography>
            <Typography>Value: {textVal}</Typography>
        </Box>
    )
}

export default SliceOneConsumer;