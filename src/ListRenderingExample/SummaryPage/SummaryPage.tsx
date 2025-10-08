import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import RenderCount from '../../overall/RenderCount';
import ListSummary from './ListSummary';
import SearchSummary from './SearchSummary';
import SummaryPageCombined from 'ReduxToolkitApp/codeblocks/SummaryPage/SummaryCombinedBlock';

const SummaryPage: React.FC = () => {
    const [showCode, setShowCode] = useState(false);

    return (
        <>
            <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
                <RenderCount componentName="SummaryPage" />
                <Typography variant="h4" gutterBottom>
                    Summary Page (Redux Toolkit)
                </Typography>

                <ListSummary />
                <SearchSummary />
                <Button onClick={() => setShowCode(!showCode)}>Show Code</Button>
                {showCode && <SummaryPageCombined />}
            </Box>

        </>
    );
};

export default SummaryPage;