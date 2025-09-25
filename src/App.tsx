import React, { useState } from 'react';
import AppRouter from './overall/AppRouter';
import { Box, Button, Container, createTheme, CssBaseline, Paper, ThemeProvider, Typography } from '@mui/material';
import RenderCount from 'overall/RenderCount';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


const App: React.FC = () => {
    const [showCode, setShowCode] = useState(false);
    return (<ThemeProvider theme={darkTheme}>
        <RenderCount componentName="Change All App Delays" />
        <CssBaseline />
        <AppRouter />
    </ThemeProvider>)
};

export default App;
