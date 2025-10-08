import React from 'react';
import { Box } from '@mui/material';
import RenderCount from 'overall/RenderCount';

const ListPage: React.FC = () => {
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName="List Rendering with State" />
            HELLO
        </Box>
    );
};

export default ListPage;
