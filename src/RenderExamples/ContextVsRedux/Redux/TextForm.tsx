import { Button, CircularProgress, TextField } from "@mui/material";
import RenderCount from "overall/RenderCount";
import { useAppDispatch, useAppSelector } from "store/hooks";
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
        <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
            <RenderCount componentName='TextForm' />
            <TextField
                label="Context One Val"
                variant="outlined"
                value={textVal}
                onChange={(e) => dispatch(setTextVal(e.target.value))}
                fullWidth
                sx={{ marginBottom: 2 }}
            />
            <TextField
                label="Context Two Val"
                variant="outlined"
                value={textValTwo}
                onChange={(e) => dispatch(setTextValTwo(e.target.value))}
                fullWidth
                sx={{ marginBottom: 2 }}
            />
            <TextField
                label="Context Three Val"
                variant="outlined"
                value={textValThree}
                onChange={(e) => dispatch(setTextValThree(e.target.value))}
                fullWidth
                sx={{ marginBottom: 2 }}
            />
        </div>

    )
}

export default TextForm;