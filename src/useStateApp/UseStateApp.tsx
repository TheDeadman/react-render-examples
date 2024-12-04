import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Stepper, Step, Button, Typography, StepLabel } from '@mui/material';
import ListPage from './ListPage';
import SearchPage from './SearchPage';
import CombinedPage from './CombinedPage';
import SummaryPage from './SummaryPage';
import RenderCount from '../overall/RenderCount';

interface ListItem {
    title: string;
    description: string;
}

const steps = ['List Page', 'Search Page', 'Combined Page', 'Summary Page'];

const UseStateApp: React.FC = () => {
    const [list, setList] = useState<ListItem[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [activeStep, setActiveStep] = useState(0); // Track the active step in the stepper

    const navigate = useNavigate();

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
            navigate(`/useState/${steps[activeStep + 1].toLowerCase().replace(' ', '-')}`);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
            navigate(`/useState/${steps[activeStep - 1].toLowerCase().replace(' ', '-')}`);
        }
    };

    return (
        <div>
            <RenderCount componentName='UseStateApp' />
            <CssBaseline />
            <Container>
                <Box sx={{ marginTop: 4 }}>
                    {/* Stepper Navigation */}
                    <Stepper activeStep={activeStep}>
                        {steps.map((step, index) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <Box sx={{ marginTop: 2 }}>
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

                    {/* Stepper Buttons */}
                    <Box sx={{ marginTop: 2 }}>
                        <Button onClick={handleBack} disabled={activeStep === 0} sx={{ marginRight: 2 }}>
                            Back
                        </Button>
                        <Button onClick={handleNext} disabled={activeStep === steps.length - 1}>
                            Next
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default UseStateApp;
