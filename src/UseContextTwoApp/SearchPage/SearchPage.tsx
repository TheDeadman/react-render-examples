import React, { useState } from 'react';
import axios from 'axios';
import {
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Box,
    Typography,
    SelectChangeEvent,
} from '@mui/material';
import RenderCount from '../../overall/RenderCount';
import { useAppContextTwo } from '../context';
import SearchForm from './SearchForm';
import { useFormContext } from 'UseContextTwoApp/formContext';

const SearchPage: React.FC = () => {
    const { selectedOption, setSelectedOption } = useAppContextTwo(); // Use the context
    const { searchTerm, setSearchTerm, results, setResults } = useFormContext();

    const [hasSearched, setHasSearched] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        setHasSearched(true);
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get<string[]>(`http://localhost:3001/search`, {
                params: { query: searchTerm },
            });
            setResults(response.data);
        } catch (err) {
            setError('Failed to fetch search results. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelect = (event: SelectChangeEvent<string>) => {
        setSelectedOption(event.target.value);
    };

    // Silly custom Logic to ensure the current item is displayed even when not part of the result set
    let shouldIncludeSelectedResult = true;
    if (results.some(result => result === selectedOption) || selectedOption === null) {
        shouldIncludeSelectedResult = false;
    }

    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName="SearchPage" />
            <Typography variant="h4" gutterBottom>
                Search Page
            </Typography>
            <SearchForm handleSearch={handleSearch} isLoading={isLoading} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {error && <Typography color="error">{error}</Typography>}

            <FormControl fullWidth sx={{ marginTop: 2 }}>
                <InputLabel>Select an Option</InputLabel>
                <Select
                    value={selectedOption || ''}
                    onChange={handleSelect}
                    label="Select an Option"
                    displayEmpty
                    disabled={results.length === 0}
                >
                    {shouldIncludeSelectedResult && <MenuItem value={selectedOption!}>
                        {selectedOption!}
                    </MenuItem>}
                    {results.map((result, index) => (
                        <MenuItem key={`search-${result}`} value={result}>
                            {result}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Typography color='error'>
                {hasSearched && results.length === 0 && !isLoading && !error && (
                    <>No results found. Please try another search.</>
                )}
                &nbsp;
            </Typography>

            <div>Current Selection: {selectedOption}</div>

        </Box>
    );
};

export default SearchPage;
