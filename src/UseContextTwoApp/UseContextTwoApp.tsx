import { useState } from 'react';
import { Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom';
import { Box, Container, CssBaseline, Stepper, Step, Button, StepLabel } from '@mui/material';
import { AppTwoProvider } from './context'; // Import the provider
import { FormProvider } from './formContext';
import ListPage from './ListPage/ListPage';
import SearchPage from './SearchPage/SearchPage';
import CombinedPage from './CombinedPage';
import SummaryPage from './SummaryPage/SummaryPage';
import RenderCount from '../overall/RenderCount';
import InputAndSummaryPage from './InputsAndSummaryPage';

const steps = ['List Page', 'Search Page', 'Combined Page', 'Summary Page', 'Input And Summary Page'];

const getStartingActiveStep = (pathname: string) => {
    let activeStep = 0
    if (pathname.indexOf('search-page') !== -1) {
        activeStep = 1
    } else if (pathname.indexOf('combined-page') !== -1) {
        activeStep = 2
    } else if (pathname.indexOf('summary-page') !== -1) {
        activeStep = 3
    } else if (pathname.indexOf('input-and-summary-page') !== -1) {
        activeStep = 4
    }

    return activeStep;
}

const UseContextTwoApp = () => {
    const { pathname } = useLocation();
    const [activeStep, setActiveStep] = useState(getStartingActiveStep(pathname)); // Track the active step in the stepper
    const navigate = useNavigate();

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
            navigate(`/useContextTwo/${steps[activeStep + 1].toLowerCase().replaceAll(' ', '-')}`);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
            navigate(`/useContextTwo/${steps[activeStep - 1].toLowerCase().replaceAll(' ', '-')}`);
        }
    };

    return (
        <AppTwoProvider> {/* Wrap the app with the context provider */}
            <FormProvider>
                <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
                    <RenderCount componentName='UseContextTwoApp' />
                    <CssBaseline />
                    <Container>
                        <Box sx={{ marginTop: 4 }}>
                            {/* Stepper Navigation */}
                            <Stepper activeStep={activeStep}>
                                {steps.map((step) => (
                                    <Step key={step}>
                                        <StepLabel>{step}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>

                            <Box sx={{ marginTop: 2 }}>
                                <Routes>
                                    <Route path="/" element={<Navigate to="list-page" />} /> {/* Redirect to first page */}
                                    <Route
                                        path="list-page"
                                        element={<ListPage />}
                                    />
                                    <Route
                                        path="search-page"
                                        element={<SearchPage />}
                                    />
                                    <Route
                                        path="combined-page"
                                        element={<CombinedPage />}
                                    />
                                    <Route
                                        path="summary-page"
                                        element={<SummaryPage />}
                                    />
                                    <Route path="input-and-summary-page" element={<InputAndSummaryPage />} />

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
            </FormProvider>
        </AppTwoProvider>
    );
};

export default UseContextTwoApp;
