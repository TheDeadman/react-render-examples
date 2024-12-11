import { Box, Typography } from '@mui/material';
import RenderCount from '../../overall/RenderCount';
import ListSummary from './ListSummary';
import SearchSummary from './SearchSummary';

interface ListItem {
    title: string;
    description: string;
}

interface SummaryPageProps {
    list: ListItem[];
    selectedOption: string | null;
}

const SummaryPage = ({ list, selectedOption }: SummaryPageProps) => {
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName='SummaryPage' />
            <Typography variant="h4" gutterBottom>
                Summary Page (useState)
            </Typography>

            <ListSummary list={list} />
            <SearchSummary selectedOption={selectedOption} />
        </Box>
    );
};

export default SummaryPage;
