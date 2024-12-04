import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ marginBottom: '20px' }}>
            <ul>
                <li>
                    <Link to="/useState">useState App</Link>
                </li>
                <li>
                    <Link to="/useContext">useContext App</Link>
                </li>
                <li>
                    <Link to="/reduxToolkit">reduxToolkit App</Link>
                </li>
                <li>
                    <Link to="/list-page">List Page</Link>
                </li>
                <li>
                    <Link to="/search-page">Search Page</Link>
                </li>
                <li>
                    <Link to="/combined-page">Combined Page</Link>
                </li>
                <li>
                    <Link to="/summary-page">Summary Page</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
