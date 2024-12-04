import React, { useState } from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableHead, TableRow, Paper, Box } from '@mui/material';
import RenderCount from '../overall/RenderCount';

interface ListPageProps {
    list: { title: string; description: string }[];
    setList: React.Dispatch<React.SetStateAction<{ title: string; description: string }[]>>;
}

const ListPage: React.FC<ListPageProps> = ({ list, setList }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddItem = () => {
        if (title && description) {
            setList([...list, { title, description }]);
            setTitle('');
            setDescription('');
        }
    };

    return (
        <>
            <RenderCount componentName='ListPage' />
            <Box>
                <h2>List Page</h2>
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
        </>
    );
};

export default ListPage;
