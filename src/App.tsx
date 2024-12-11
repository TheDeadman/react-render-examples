import React from 'react';
import AppRouter from './overall/AppRouter';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import RenderCount from 'overall/RenderCount';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


const App: React.FC = () => <ThemeProvider theme={darkTheme}>
    <RenderCount componentName="Change All App Delays" />
    <CssBaseline />
    <AppRouter />
</ThemeProvider>

export default App;
