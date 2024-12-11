import { Paper, Box, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import ListTable from './ListTable';
import ListForm from './ListForm';


const ListPage = () => {
    return (
        <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
            <RenderCount componentName='ListPage' />
            <Box>
                <Typography variant="h6" gutterBottom>
                    List Page
                </Typography>

                <ListForm />

                <Paper sx={{ padding: 2 }}>
                    <ListTable />
                </Paper>
            </Box>
        </div>
    );
};

export default ListPage;
