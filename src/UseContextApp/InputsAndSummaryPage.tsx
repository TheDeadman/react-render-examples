import React from 'react';
import { Box, } from '@mui/material';
import RenderCount from '../overall/RenderCount';
import SummaryPage from './SummaryPage/SummaryPage';
import CombinedPage from './CombinedPage';

const InputAndSummaryPage = () => {
    return (
        <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>

            <RenderCount componentName='InputAndSummaryPage' />
            <Box style={{ display: 'flex' }}>
                <CombinedPage />
                <SummaryPage />
            </Box>
        </div>
    );
};

export default InputAndSummaryPage;
