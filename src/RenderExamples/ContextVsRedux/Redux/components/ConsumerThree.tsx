// Generate Snippet
import { Box, Typography } from "@mui/material";

// Remove START
import RenderCount from "overall/RenderCount";
import { useAppSelector } from "store/hooks";
import { selectTextValThree } from "../three.slice";

export const explanation = "Consumer Three";
// Remove END

const SliceThreeConsumer = () => {
    const textVal = useAppSelector(selectTextValThree);
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
            <RenderCount componentName="ConsumerThree" />
            {/* Remove END */}
            <Typography
                // Remove START
            variant="body2" sx={{ color: '#ff6f00', fontWeight: 'bold' }}
            // Remove END
            >
                Redux Three Consumer
            </Typography>
            <Typography>Value: {textVal}</Typography>
        </Box>
    )
}

export default SliceThreeConsumer;