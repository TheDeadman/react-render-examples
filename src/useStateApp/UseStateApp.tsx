import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';
import ListPage from './ListPage';
import SearchPage from './SearchPage';
import CombinedPage from './CombinedPage';
import SummaryPage from './SummaryPage';
import Navbar from './NavBar';

interface ListItem {
    title: string;
    description: string;
}

const UseStateApp: React.FC = () => {
    const [list, setList] = useState<ListItem[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    return (
        <div>
            {/* Global reset of styles with CssBaseline */}
            <CssBaseline />
            <Navbar />

            <Container>
                <Box sx={{ marginTop: 4 }}>
                    <Routes>
                        <Route
                            path="list-page"
                            element={<ListPage list={list} setList={setList} />}
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
                </Box>
            </Container>
        </div>
    );
};

export default UseStateApp;
