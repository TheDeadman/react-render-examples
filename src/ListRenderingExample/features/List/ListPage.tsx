import { Paper, Box, Typography, Button } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import ListTable from './ListTable';
import ListForm from './ListForm';
import ListCombinedCodeBlock from 'ReduxToolkitApp/codeblocks/features/List/ListCombinedCodeBlock';
import { useState } from 'react';


const ListPage = () => {
    const [showCode, setShowCode] = useState(false);
    return (
        <>
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
                <Button onClick={() => setShowCode(!showCode)}>Show Code</Button>
                {showCode && <ListCombinedCodeBlock />}
            </div>

        </>
    );
};

export default ListPage;
