import React, { ReactNode, useState } from 'react';
// import AppRouter from './overall/AppRouter';
// import { Box, Button, Container, createTheme, CssBaseline, Paper, ThemeProvider, Typography } from '@mui/material';
// import RenderCount from 'overall/RenderCount';

// 


type CodeContainerProps = {
    children: ReactNode;
}

const CodeContainer = ({children}: CodeContainerProps) => {
    // const [showCode, setShowCode] = useState(false);
    return (
        <div style={{ display: 'flex' }}>
{/* 
            <Container disableGutters>


                <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
                    <RenderCount componentName='ListPage' />
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            List Page
                        </Typography>
                        <Paper sx={{ padding: 2 }}>
                            <Typography gutterBottom>
                                Some Text
                            </Typography>
                        </Paper>
                    </Box>
                    <Button onClick={() => setShowCode(!showCode)}>Show Code</Button>

                </div>

            </Container>
            {showCode && <Container disableGutters>


                <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
                    <RenderCount componentName='ListPage' />
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            List Page
                        </Typography>



                        <Paper sx={{ padding: 2 }}>
                            <Typography gutterBottom>
                                Some Text
                            </Typography>
                        </Paper>
                    </Box>

                </div>

            </Container>} */}
        </div>)
};

export default CodeContainer;
