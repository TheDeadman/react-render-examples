import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ListPage from './ListPage';
import SearchPage from './SearchPage';
import CombinedPage from './CombinedPage';
import SummaryPage from './SummaryPage';

interface ListItem {
    title: string;
    description: string;
}

const UseStateApp: React.FC = () => {
    const [list, setList] = useState<ListItem[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    return (
        <Routes>
            <Route
                path="list-page"
                element={
                    <ListPage
                        list={list}
                        setList={setList}
                    />
                }
            />
            <Route
                path="search-page"
                element={
                    <SearchPage
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                }
            />
            <Route
                path="combined-page"
                element={
                    <CombinedPage
                        list={list}
                        setList={setList}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                }
            />
            <Route
                path="summary-page"
                element={<SummaryPage list={list} selectedOption={selectedOption} />}
            />
        </Routes>
    );
};

export default UseStateApp;
