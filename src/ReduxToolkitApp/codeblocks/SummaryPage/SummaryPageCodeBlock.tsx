import { CopyBlock } from 'react-code-blocks';

const codeText = `
// SummaryPage.tsx
import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import RenderCount from 'overall/RenderCount';
import ListSummary from './ListSummary';
import SearchSummary from './SearchSummary';

const SummaryPage: React.FC = () => {
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName="SummaryPage" />
            <Typography variant="h4" gutterBottom>
                Summary Page (Redux Toolkit)
            </Typography>

            <ListSummary />
            <SearchSummary />

        </Box>
    );
};

export default SummaryPage;
`
function SummaryPageCodeBlock() {
  return (
    <CopyBlock
      text={codeText}
      language={'jsx'}
      theme={{mode: 'dark', backgroundColor: '#121212'}}
      showLineNumbers={true}
    />
  );
}

export default SummaryPageCodeBlock;