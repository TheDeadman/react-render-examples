import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Select, MenuItem, InputLabel, FormControl, Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, SelectChangeEvent } from '@mui/material';
import axios from 'axios';
import RenderCount from '../overall/RenderCount';
import ListPage from './ListPage';
import SearchPage from './SearchPage';

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
            <RenderCount componentName='CombinedPage' />
            <ListPage list={list} setList={setList} />
            <SearchPage selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </Box>
    );
};

export default CombinedPage;
