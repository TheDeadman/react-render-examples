import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Select, MenuItem, InputLabel, FormControl, Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, SelectChangeEvent } from '@mui/material';
import axios from 'axios';

interface CombinedPageProps {
    list: { title: string; description: string }[];
    setList: React.Dispatch<React.SetStateAction<{ title: string; description: string }[]>>;
    selectedOption: string | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const CombinedPage: React.FC<CombinedPageProps> = ({ list, setList, selectedOption, setSelectedOption }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Handle adding items to the list
    const handleAddItem = () => {
        if (title && description) {
            setList([...list, { title, description }]);
            setTitle('');
            setDescription('');
        }
    };

    // Handle search functionality
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

    // Handle selecting an option from the dropdown
    const handleSelect = (event: SelectChangeEvent<{ value: unknown }>) => {
        setSelectedOption(event.target.value as string);
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Combined Page
            </Typography>

            {/* List Section */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6">Add to List</Typography>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <Button variant="contained" onClick={handleAddItem} sx={{ marginBottom: 2 }}>
                    Add to List
                </Button>

                <Paper sx={{ padding: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Box>

            {/* Search Section */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6">Search for Options</Typography>
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
        </Box>
    );
};

export default CombinedPage;
