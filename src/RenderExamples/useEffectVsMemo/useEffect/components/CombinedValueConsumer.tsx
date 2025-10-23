// Generate Snippet
import { useAppContextThree } from "../ContextThree";
import { Box, Typography } from "@mui/material";
// Remove START
import RenderCount from "overall/RenderCount";

export const explanation = "Placeholder";
// Remove END

const CombinedValueConsumer = () => {
    const { combinedTextValThree } = useAppContextThree();

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
                useEffect Combined Value Consumer
            </Typography>
            <Typography>Value: {combinedTextValThree}</Typography>
        </Box>
    )
}

export default CombinedValueConsumer;