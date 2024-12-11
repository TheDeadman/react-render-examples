import React, { useState } from 'react';
import { Paper, Box, Typography } from '@mui/material';
import RenderCount from '../../overall/RenderCount';
import { useAppContext } from '../context';
import ListTable from './ListTable';
import ListForm from './ListForm';


const ListPage = () => {
    const { list, setList } = useAppContext(); // Use the context
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState<string>('');


    const handleAddItem = () => {
        if (list.some(item => item.title === title)) {
            setError('The title must be unique');
            return;
        }

        if (title === description) {
            setError('Title and Description cannot match');
            return;
        }

        if (title && description) {
            setList([...list, { title, description }]);
            setTitle('');
            setDescription('');
            setError('');
        } else {
            setError('Both fields are required.');
        }
    };

    return (
        <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
            <RenderCount componentName='ListPage' />
            <Box>
                <Typography variant="h6" gutterBottom>
                    List Page
                </Typography>

                <ListForm title={title} setTitle={setTitle} description={description} setDescription={setDescription} handleAddItem={handleAddItem} error={error} />

                <Paper sx={{ padding: 2 }}>
                    <ListTable />
                </Paper>
            </Box>
        </div>
    );
};

export default ListPage;
