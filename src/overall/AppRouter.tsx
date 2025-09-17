import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UseStateApp from '../useStateApp/UseStateApp';
import Navbar from './NavBar';
import RenderCount from './RenderCount';
import UseContextApp from '../UseContextApp/UseContextApp';
import UseContextTwoApp from '../UseContextTwoApp/UseContextTwoApp';
import ReduxToolkitApp from '../ReduxToolkitApp/ReduxToolkitApp';
import { Box, Container } from '@mui/material';

const DefaultText = () => {
    return (<div>

        <Container>
            <Box sx={{ marginTop: 4 }}>
                This site contains versions of the same application with different state management. The goal is to demonstrate the differences
                in how pieces of the app render with each setup.
                Components have a render counter and a field that allows the user to change how long it will take for that component to render.
                This allows us to simulate slow renders due to heavy logic within a component.
                <br />
                <br />
                You can also click the "Show Code" button to view the code for each file. (Only implemented on "UseContext App Two" and "Redux Toolkit App")
                <br />
                <br />
                Note: Very Rough Draft. Enjoy the formatting.
            </Box>


        </Container>
    </div>)
}

const AppRouter = () => {
    return (
        <Router>
            <div>
                <RenderCount componentName='AppRouter' />
                <Navbar />
                <Routes>
                    <Route path="/" element={<DefaultText />} />
                    <Route path="/useState/*" element={<UseStateApp />} />
                    <Route path="/useContext/*" element={<UseContextApp />} />
                    <Route path="/useContextTwo/*" element={<UseContextTwoApp />} />
                    <Route path="/reduxToolkit/*" element={<ReduxToolkitApp />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;
