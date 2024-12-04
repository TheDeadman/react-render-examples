import React, { useState } from 'react';
import axios from 'axios';
import {
    TextField,
    Button,
    CircularProgress,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Box,
    Typography,
    SelectChangeEvent
} from '@mui/material';
import RenderCount from '../overall/RenderCount';

interface SearchPageProps {
    selectedOption: string | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const SearchPage: React.FC<SearchPageProps> = ({ selectedOption, setSelectedOption }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get<string[]>(`http://localhost:3001/search`, { params: { query: searchTerm } });
            setResults(response.data);
        } catch (err) {
            setError('Failed to fetch search results. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelect = (event: SelectChangeEvent<{ value: unknown }>) => {
        setSelectedOption(event.target.value as string);
    };

    return (
        <Box sx={{ padding: 2 }}>
            <RenderCount componentName='SearchPage' />
            <Typography variant="h4" gutterBottom>
                Search Page
            </Typography>
            <TextField
                label="Search Term"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
                sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" onClick={handleSearch} disabled={isLoading} sx={{ marginBottom: 2 }}>
                {isLoading ? <CircularProgress size={24} /> : 'Search'}
            </Button>

            {error && <Typography color="error">{error}</Typography>}

            {results.length > 0 && (
                <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel>Select an Option</InputLabel>
                    <Select
                        value={{ name: selectedOption, value: selectedOption }}
                        onChange={handleSelect}
                        label="Select an Option"
                        displayEmpty
                    >
                        {results.map((result, index) => (
                            <MenuItem key={index} value={result}>
                                {result}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )}

            {results.length === 0 && !isLoading && !error && (
                <Typography>No results found. Please try another search.</Typography>
            )}
        </Box>
    );
};

export default SearchPage;
