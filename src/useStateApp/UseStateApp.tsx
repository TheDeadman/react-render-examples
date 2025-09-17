import { useState } from 'react';
import { Routes, Route, useNavigate, Navigate, useLocation, } from 'react-router-dom';
import { Box, Container, Stepper, Step, Button, StepLabel } from '@mui/material';
import ListPage from './ListPage/ListPage';
import SearchPage from './SearchPage/SearchPage';
import CombinedPage from './CombinedPage';
import SummaryPage from './SummaryPage/SummaryPage';
import RenderCount from '../overall/RenderCount';
import InputAndSummaryPage from './InputsAndSummaryPage';

export interface ListItem {
    title: string;
    description: string;
}

const steps = ['Combined Page', 'List Page', 'Search Page', 'Summary Page', 'Input And Summary Page'];

const getStartingActiveStep = (pathname: string) => {
    let activeStep = 0
    if (pathname.indexOf('list-page') !== -1) {
        activeStep = 1
    } else if (pathname.indexOf('search-page') !== -1) {
        activeStep = 2
    } else if (pathname.indexOf('input-and-summary-page') !== -1) {
        activeStep = 4
    } else if (pathname.indexOf('summary-page') !== -1) {
        activeStep = 3
    }

    return activeStep;
}

const UseStateApp = () => {
    const { pathname } = useLocation();
    const [list, setList] = useState<ListItem[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [activeStep, setActiveStep] = useState(getStartingActiveStep(pathname)); // Track the active step in the stepper

    const navigate = useNavigate();

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
            navigate(`/useState/${steps[activeStep + 1].toLowerCase().replaceAll(' ', '-')}`);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
            navigate(`/useState/${steps[activeStep - 1].toLowerCase().replace(' ', '-')}`);
        }
    };

    return (
        <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
            <RenderCount componentName='UseStateApp' />
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
                            <Route path="/" element={<Navigate to="list-page" />} /> {/* Redirect to first page */}
                            <Route path="list-page" element={<ListPage list={list} setList={setList} />} />
                            <Route path="search-page" element={<SearchPage selectedOption={selectedOption} setSelectedOption={setSelectedOption} />} />
                            <Route path="combined-page" element={<CombinedPage list={list} setList={setList} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />} />
                            <Route path="summary-page" element={<SummaryPage list={list} selectedOption={selectedOption} />} />
                            <Route path="input-and-summary-page" element={<InputAndSummaryPage list={list} setList={setList} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />} />

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
