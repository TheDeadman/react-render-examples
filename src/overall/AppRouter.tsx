import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UseStateApp from '../useStateApp/UseStateApp';
// import UseContextApp from '../useContextApp/UseContextApp';
// import ReduxToolkitApp from '../reduxToolkitApp/ReduxToolkitApp';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/useState">useState App</Link></li>
                        <li><Link to="/useContext">useContext App</Link></li>
                        <li><Link to="/reduxToolkit">Redux Toolkit App</Link></li>
                    </ul>
                </nav>
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
