import React from 'react';
import { Box, Divider } from '@mui/material';
import RenderCount from '../overall/RenderCount';
import ListPage from './ListPage/ListPage';
import SearchPage from './SearchPage/SearchPage';
import { ListItem } from './UseStateApp';

interface CombinedPageProps {
    list: ListItem[];
    setList: React.Dispatch<React.SetStateAction<ListItem[]>>;
    selectedOption: string | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const CombinedPage = ({ list, setList, selectedOption, setSelectedOption }: CombinedPageProps) => {
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName='CombinedPage' />
            <ListPage list={list} setList={setList} />
            <br />
            <Divider />
            <SearchPage selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </Box>
    );
};

export default CombinedPage;
