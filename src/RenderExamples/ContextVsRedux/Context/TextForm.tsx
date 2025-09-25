import { Button, CircularProgress, TextField } from "@mui/material";
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
        <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
            <RenderCount componentName='TextForm' />
            <TextField
                label="Context One Val"
                variant="outlined"
                value={textVal}
                onChange={(e) => setTextVal(e.target.value)}
                fullWidth
                sx={{ marginBottom: 2 }}
            />
            <TextField
                label="Context Two Val"
                variant="outlined"
                value={textValTwo}
                onChange={(e) => setTextValTwo(e.target.value)}
                fullWidth
                sx={{ marginBottom: 2 }}
            />
            <TextField
                label="Context Three Val"
                variant="outlined"
                value={textValThree}
                onChange={(e) => setTextValThree(e.target.value)}
                fullWidth
                sx={{ marginBottom: 2 }}
            />
        </div>

    )
}

export default TextForm;