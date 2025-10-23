import { useState } from 'react';
import AppRouter from './overall/AppRouter';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import RenderCount from 'overall/RenderCount';
import './App.scss'

const darkTheme = createTheme({
    cssVariables: true,
    palette: {
        mode: 'dark',
    },
});

const App = () => {
    return (<ThemeProvider theme={darkTheme}>
        <RenderCount componentName="Change All App Delays" />
        <CssBaseline />
        <AppRouter />
    </ThemeProvider>)
};

export default App;
