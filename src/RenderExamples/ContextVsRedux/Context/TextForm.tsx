import { TextField, Box } from "@mui/material";
import RenderCount from "../../../overall/RenderCount";
import { useAppContextOne } from "./ContextOne";
import { useAppContextThree } from "./ContextThree";
import { useAppContextTwo } from "./ContextTwo";

// interface SearchFormProps {
//     searchTerm: string;
//     setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
//     handleSearch: () => void;
//     isLoading: boolean;
// }
const TextForm = () => {
    const {textVal, setTextVal} = useAppContextOne();
    const {textValTwo, setTextValTwo} = useAppContextTwo();
    const {textValThree, setTextValThree} = useAppContextThree();
    return (
        <Box 
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
        >
            <RenderCount componentName='TextForm' />
            <TextField
                label="Context One Val"
                variant="outlined"
                value={textVal}
                onChange={(e) => setTextVal(e.target.value)}
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
            />
            <TextField
                label="Context Two Val"
                variant="outlined"
                value={textValTwo}
                onChange={(e) => setTextValTwo(e.target.value)}
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
            />
            <TextField
                label="Context Three Val"
                variant="outlined"
                value={textValThree}
                onChange={(e) => setTextValThree(e.target.value)}
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
            />
        </Box>
    )
}

export default TextForm;