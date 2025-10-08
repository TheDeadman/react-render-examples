import { Button, CircularProgress, TextField } from "@mui/material";
import RenderCount from "overall/RenderCount";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { searchByText, selectIsLoading, selectSearchTerm, setSearchTerm } from "./searchSlice";

const SearchForm = () => {
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector(selectSearchTerm);
    const isLoading = useAppSelector(selectIsLoading);

    return (
        <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
            <RenderCount componentName='SearchForm' />
            <TextField
                label="Search Term"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                fullWidth
                sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" onClick={() => dispatch(searchByText())} disabled={isLoading || !searchTerm} sx={{ marginBottom: 2 }}>
                {isLoading ? <CircularProgress size={24} /> : 'Search'}
            </Button>
        </div>

    )
}

export default SearchForm;