import { TextField, Box } from "@mui/material";
import RenderCount from "overall/RenderCount";
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
                border: '2px solid #ff6f00', 
                margin: 1, 
                padding: 2,
                backgroundColor: 'rgba(255, 111, 0, 0.05)',
                borderRadius: 1,
                '&:hover': {
                    backgroundColor: 'rgba(255, 111, 0, 0.1)',
                }
            }}
        >
            <RenderCount componentName='TextForm' />
            <TextField
                label="useMemo One Val"
                variant="outlined"
                value={textVal}
                onChange={(e) => setTextVal(e.target.value)}
                fullWidth
                sx={{ 
                    marginBottom: 2,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#ff6f00',
                        },
                        '&:hover fieldset': {
                            borderColor: '#ff6f00',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#ff6f00',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#ff6f00',
                        '&.Mui-focused': {
                            color: '#ff6f00',
                        },
                    },
                }}
            />
            <TextField
                label="useMemo Two Val"
                variant="outlined"
                value={textValTwo}
                onChange={(e) => setTextValTwo(e.target.value)}
                fullWidth
                sx={{ 
                    marginBottom: 2,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#ff6f00',
                        },
                        '&:hover fieldset': {
                            borderColor: '#ff6f00',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#ff6f00',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#ff6f00',
                        '&.Mui-focused': {
                            color: '#ff6f00',
                        },
                    },
                }}
            />
            <TextField
                label="useMemo Three Val"
                variant="outlined"
                value={textValThree}
                onChange={(e) => setTextValThree(e.target.value)}
                fullWidth
                sx={{ 
                    marginBottom: 2,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#ff6f00',
                        },
                        '&:hover fieldset': {
                            borderColor: '#ff6f00',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#ff6f00',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#ff6f00',
                        '&.Mui-focused': {
                            color: '#ff6f00',
                        },
                    },
                }}
            />
        </Box>

    )
}

export default TextForm;