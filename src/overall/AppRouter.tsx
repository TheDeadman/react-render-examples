import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UseStateApp from '../useStateApp/UseStateApp';
import Navbar from './NavBar';
import RenderCount from './RenderCount';
// import UseContextApp from '../useContextApp/UseContextApp';
// import ReduxToolkitApp from '../reduxToolkitApp/ReduxToolkitApp';



const AppRouter = () => {
    return (
        <Router>
            <div>
                <RenderCount componentName='AppRouter' />
                <Navbar />
                <Routes>
                    <Route path="/useState/*" element={<UseStateApp />} />
                    {/* <Route path="/useContext/*" element={<UseContextApp />} /> */}
                    {/* <Route path="/reduxToolkit/*" element={<ReduxToolkitApp />} /> */}
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;
