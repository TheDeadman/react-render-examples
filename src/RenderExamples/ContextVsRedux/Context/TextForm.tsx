// Generate Snippet
import { TextField, Box } from "@mui/material";
import RenderCount from "../../../overall/RenderCount";
import { useAppContextOne } from "./ContextOne";
import { useAppContextThree } from "./ContextThree";
import { useAppContextTwo } from "./ContextTwo";

export const explanation = "Placeholder";

const TextForm = () => {
    const { textVal, setTextVal } = useAppContextOne();
    const { textValTwo, setTextValTwo } = useAppContextTwo();
    const { textValThree, setTextValThree } = useAppContextThree();
    return (
        <Box
            // Remove START
            sx={{
                border: '2px solid #9c27b0',
                margin: 1,
                padding: 2,
                backgroundColor: 'rgba(156, 39, 176, 0.05)',
                borderRadius: 1,
                '&:hover': {
                    backgroundColor: 'rgba(156, 39, 176, 0.1)',
                }
            }}
            // Remove END
        >
            {/* Remove START */}
            <RenderCount componentName='TextForm' />
            {/* Remove END */}
            <TextField
                label="Context One Val"
                variant="outlined"
                value={textVal}
                onChange={(e) => setTextVal(e.target.value)}
                // Remove START

                fullWidth
                sx={{
                    marginBottom: 2,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#9c27b0',
                        },
                        '&:hover fieldset': {
                            borderColor: '#9c27b0',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#9c27b0',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#9c27b0',
                        '&.Mui-focused': {
                            color: '#9c27b0',
                        },
                    },
                }}
            // Remove END
            />
            <TextField
                label="Context Two Val"
                variant="outlined"
                value={textValTwo}
                onChange={(e) => setTextValTwo(e.target.value)}
                // Remove START

                fullWidth
                sx={{
                    marginBottom: 2,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#9c27b0',
                        },
                        '&:hover fieldset': {
                            borderColor: '#9c27b0',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#9c27b0',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#9c27b0',
                        '&.Mui-focused': {
                            color: '#9c27b0',
                        },
                    },
                }}
            // Remove END
            />
            <TextField
                label="Context Three Val"
                variant="outlined"
                value={textValThree}
                onChange={(e) => setTextValThree(e.target.value)}
                // Remove START
                fullWidth
                sx={{
                    marginBottom: 2,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#9c27b0',
                        },
                        '&:hover fieldset': {
                            borderColor: '#9c27b0',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#9c27b0',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#9c27b0',
                        '&.Mui-focused': {
                            color: '#9c27b0',
                        },
                    },
                }}
            // Remove END
            />
        </Box>
    )
}

export default TextForm;