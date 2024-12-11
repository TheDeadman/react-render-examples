import { Button, CircularProgress, TextField } from "@mui/material";
import RenderCount from "overall/RenderCount";

interface SearchFormProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    handleSearch: () => void;
    isLoading: boolean;
}
const SearchForm = ({ searchTerm, setSearchTerm, handleSearch, isLoading }: SearchFormProps) => {

    return (
        <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
            <RenderCount componentName='SearchForm' />
            <TextField
                label="Search Term"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
                sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" onClick={handleSearch} disabled={isLoading || !searchTerm} sx={{ marginBottom: 2 }}>
                {isLoading ? <CircularProgress size={24} /> : 'Search'}
            </Button>
        </div>

    )
}

export default SearchForm;