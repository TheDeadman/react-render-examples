import { TextField, Box } from "@mui/material";
import RenderCount from "../../../overall/RenderCount";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectTextValOne, setTextVal } from "./one.slice";
import { selectTextValTwo, setTextValTwo } from "./two.slice";
import { selectTextValThree, setTextValThree } from "./three.slice";

// interface SearchFormProps {
//     searchTerm: string;
//     setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
//     handleSearch: () => void;
//     isLoading: boolean;
// }
const TextForm = () => {
    const dispatch = useAppDispatch();
    
    const textVal = useAppSelector(selectTextValOne);
    const textValTwo = useAppSelector(selectTextValTwo);
    const textValThree = useAppSelector(selectTextValThree);
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
                label="Redux One Val"
                variant="outlined"
                value={textVal}
                onChange={(e) => dispatch(setTextVal(e.target.value))}
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
                label="Redux Two Val"
                variant="outlined"
                value={textValTwo}
                onChange={(e) => dispatch(setTextValTwo(e.target.value))}
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
                label="Redux Three Val"
                variant="outlined"
                value={textValThree}
                onChange={(e) => dispatch(setTextValThree(e.target.value))}
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