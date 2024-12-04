import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListPage from './ListPage';
// import SearchPage from './SearchPage';
// import CombinedPage from './CombinedPage';
// import SummaryPage from './SummaryPage';

const UseStateApp = () => {
    return (
        <Routes>
            <Route path="list-page" element={<ListPage />} />
            {/* <Route path="search-page" element={<SearchPage />} /> */}
            {/* <Route path="combined-page" element={<CombinedPage />} /> */}
            {/* <Route path="summary-page" element={<SummaryPage />} /> */}
        </Routes>
    );
};

export default UseStateApp;
