import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './NavBar';
import RenderCount from './RenderCount';
import ContextVsReduxRoot from '../RenderExamples/ContextVsRedux/ContextVsReduxRoot';
import UseEffectVsMemoRoot from '../RenderExamples/useEffectVsMemo/UseEffectVsMemoRoot';
import RenderOptimizationLanding from '../RenderOptimizationLanding';
import MemoizedComponentsExample from '../RenderExamples/MemoizedComponents/MemoizedComponentsExample';
import MemoizedComponentsContextExample from '../RenderExamples/MemoizedComponentsContext/MemoizedComponentsContextExample';
import MemoizedComponentsReduxExample from '../RenderExamples/MemoizedComponentsRedux/MemoizedComponentsExample';
import InfiniteRendersExample from '../RenderExamples/InfiniteRenderLoops/InfiniteRendersExample';

const AppRouter = () => {
    return (
        <Router>
            <Box sx={{ backgroundColor: '#1e1e1e', minHeight: '100vh' }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<RenderOptimizationLanding />} />
                    <Route path="/techniques/memoized-components" element={<MemoizedComponentsExample />} />
                    <Route path="/techniques/memoized-components-context" element={<MemoizedComponentsContextExample />} />
                    <Route path="/techniques/memoized-components-redux" element={<MemoizedComponentsReduxExample />} />
                    <Route path="/techniques/context-vs-redux" element={<ContextVsReduxRoot />} />
                    <Route path="/techniques/useeffect-vs-usememo" element={<UseEffectVsMemoRoot />} />
                    <Route path="/techniques/infinite-render-loops" element={<InfiniteRendersExample />} />
                    
                    {/* Legacy routes for backward compatibility */}
                    <Route path="/examples/effectVsMemo" element={<UseEffectVsMemoRoot />} />
                    <Route path="/examples/contextVsRedux" element={<ContextVsReduxRoot />} />
                </Routes>
            </Box>
        </Router>
    );
};

export default AppRouter;
