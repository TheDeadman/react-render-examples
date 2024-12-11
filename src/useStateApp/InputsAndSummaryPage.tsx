import React from 'react';
import { Box } from '@mui/material';
import RenderCount from '../overall/RenderCount';
import { ListItem } from './UseStateApp';
import SummaryPage from './SummaryPage/SummaryPage';
import CombinedPage from './CombinedPage';

interface InputAndSummaryPageProps {
    list: ListItem[];
    setList: React.Dispatch<React.SetStateAction<ListItem[]>>;
    selectedOption: string | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const InputAndSummaryPage = ({ list, setList, selectedOption, setSelectedOption }: InputAndSummaryPageProps) => {
    return (
        <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>

            <RenderCount componentName='InputAndSummaryPage' />
            <Box style={{ display: 'flex' }}>
                <CombinedPage list={list} setList={setList} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                <SummaryPage list={list} selectedOption={selectedOption} />
            </Box>
        </div>
    );
};

export default InputAndSummaryPage;
