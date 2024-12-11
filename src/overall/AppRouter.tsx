import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UseStateApp from '../useStateApp/UseStateApp';
import Navbar from './NavBar';
import RenderCount from './RenderCount';
import UseContextApp from '../UseContextApp/UseContextApp';
import UseContextTwoApp from '../UseContextTwoApp/UseContextTwoApp';
import ReduxToolkitApp from '../ReduxToolkitApp/ReduxToolkitApp';



const AppRouter = () => {
    return (
        <Router>
            <div>
                <RenderCount componentName='AppRouter' />
                <Navbar />
                <Routes>
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
