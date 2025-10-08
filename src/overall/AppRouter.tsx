import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import RenderCount from './RenderCount';
import ContextVsReduxRoot from '../RenderExamples/ContextVsRedux/ContextVsReduxRoot';
import UseEffectVsMemoRoot from '../RenderExamples/useEffectVsMemo/UseEffectVsMemoRoot';
import RenderOptimizationLanding from '../RenderOptimizationLanding';
import MemoizedComponentsExample from '../RenderExamples/MemoizedComponents/MemoizedComponentsExample';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <RenderCount componentName='AppRouter' />
                <Navbar />
                <Routes>
                    <Route path="/" element={<RenderOptimizationLanding />} />
                    <Route path="/techniques/memoized-components" element={<MemoizedComponentsExample />} />
                    <Route path="/techniques/context-vs-redux" element={<ContextVsReduxRoot />} />
                    <Route path="/techniques/useeffect-vs-usememo" element={<UseEffectVsMemoRoot />} />
                    
                    {/* Legacy routes for backward compatibility */}
                    <Route path="/examples/effectVsMemo" element={<UseEffectVsMemoRoot />} />
                    <Route path="/examples/contextVsRedux" element={<ContextVsReduxRoot />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;
