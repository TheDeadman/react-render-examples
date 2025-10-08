import React from 'react';
import { Box } from '@mui/material';
import RenderCount from '../overall/RenderCount';
import ListPage from './features/List/ListPage';
import SearchPage from './features/Search/SearchPage';

const CombinedPage: React.FC = () => {
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName="CombinedPage" />
            <ListPage />
            <SearchPage />
        </Box>
    );
};

export default CombinedPage;
