import { useState } from 'react';
import { Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom';
import { Box, Container, CssBaseline, Stepper, Step, Button, StepLabel } from '@mui/material';

import RenderCount from 'overall/RenderCount';
import React from 'react';
import ListPage from './StateVersion/ListPage/ListPage';
import SearchPage from './features/Search/SearchPage';
import CombinedPage from './CombinedPage';

const steps = ['State Version', 'Context Version', 'Redux Version'];

const getStartingActiveStep = (pathname: string) => {
    let activeStep = 0
    if (pathname.indexOf('state-version') !== -1) {
        activeStep = 1
    } else if (pathname.indexOf('context-version') !== -1) {
        activeStep = 2
    } else if (pathname.indexOf('redux-version') !== -1) {
        activeStep = 3
    }

    return activeStep;
}

const ListRenderingExample = () => {
    const { pathname } = useLocation();
    const [activeStep, setActiveStep] = useState(getStartingActiveStep(pathname)); // Track the active step in the stepper
    const navigate = useNavigate();

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
            navigate(`/examples/listRendering/${steps[activeStep + 1].toLowerCase().replaceAll(' ', '-')}`);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
            navigate(`/examples/listRendering/${steps[activeStep - 1].toLowerCase().replaceAll(' ', '-')}`);
        }
    };

    return (
        <React.Fragment key="list-rendering-app"> {/* Wrap the app with the context provider */}
            <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
                <RenderCount componentName='ListRenderingState' />
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
                            HELLO
                            <Routes>
                                <Route path="/" element={<Navigate to="state-version" />} />
                                <Route
                                    path="state-version"
                                    element={<ListPage />}
                                />
                                <Route
                                    path="context-version"
                                    element={<SearchPage />}
                                />
                                <Route
                                    path="redux-version"
                                    element={<CombinedPage />}
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
        </React.Fragment>
    );
};

export default ListRenderingExample;
