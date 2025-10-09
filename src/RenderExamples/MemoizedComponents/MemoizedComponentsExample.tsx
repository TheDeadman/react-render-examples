import React, { useState, useMemo, useCallback } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import RenderCount from '../../overall/RenderCount';
import CodeViewer from './CodeViewer';
import { codeSnippets, explanations } from './codeSnippets';
import RegularChild from './components/RegularChild';
import MemoizedChild from './components/MemoizedChild';
import MemoizedChildWithBadCallback from './components/MemoizedChildWithBadCallback';
import ExpensiveComponentBad from './components/ExpensiveComponentBad';
import ExpensiveComponentGood from './components/ExpensiveComponentGood';
import ComponentLabel from './components/ComponentLabel';
import ColorLegend from './components/ColorLegend';
import ParentControls from './components/ParentControls';
import ObservationGuide from './ObservationGuide';

const MemoizedComponentsExample: React.FC = () => {
    const [count1, setCount1] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [unrelatedState, setUnrelatedState] = useState('');

    // Without useCallback - this creates a new function on every render
    const handleIncrement1Bad = () => setCount1(prev => prev + 1);
    
    // With useCallback - this function is memoized
    const handleIncrement2 = useCallback(() => setCount1(prev => prev + 1), []);

    // Expensive computation that only depends on count1
    const expensiveValue = useMemo(() => {
        console.log('Computing expensive value...');
        return count1 * 1000;
    }, [count1]);

    return (
        <Container maxWidth="lg">
            <Box 
                sx={{ 
                    border: '3px solid #42a5f5',
                    borderRadius: 3,
                    p: 3,
                    mt: 2,
                    backgroundColor: '#121212',
                    position: 'relative'
                }}
            >
                {/* Parent Component Label */}
                <Box 
                    sx={{ 
                        position: 'absolute',
                        top: -12,
                        left: 16,
                        backgroundColor: '#42a5f5',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: '0.875rem',
                        fontWeight: 'bold'
                    }}
                >
                    PARENT COMPONENT
                </Box>
                
                <RenderCount componentName="MemoizedComponentsExample" />
                <Box sx={{ mt: 2, mb: 4 }}>
                    <Typography variant="h4" gutterBottom sx={{ color: '#42a5f5' }}>
                        Memoized Components Example
                    </Typography>
                    <Typography variant="body1" paragraph>
                        This example demonstrates React.memo, useMemo, and useCallback optimizations.
                        Watch the render counters to see which components re-render when state changes.
                    </Typography>
                    
                    {/* Color Legend */}
                    <ColorLegend />
                </Box>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <ParentControls
                            unrelatedState={unrelatedState}
                            onUnrelatedStateChange={setUnrelatedState}
                            multiplier={multiplier}
                            onMultiplierChange={setMultiplier}
                            count1={count1}
                        />
                    </Grid>

                <Grid item xs={12} md={6}>
                    <ComponentLabel color="#f44336">
                        <RegularChild 
                            value={count1} 
                            onIncrement={handleIncrement1Bad} 
                            expensiveValue={expensiveValue} 
                        />
                    </ComponentLabel>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ComponentLabel color="#ffb74d">
                        <MemoizedChildWithBadCallback 
                            value={count1} 
                            onIncrement={handleIncrement1Bad}  // Same non-memoized function!
                            expensiveValue={expensiveValue} 
                        />
                    </ComponentLabel>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ComponentLabel color="#66bb6a">
                        <MemoizedChild 
                            value={count1} 
                            onIncrement={handleIncrement2} 
                            expensiveValue={expensiveValue} 
                        />
                    </ComponentLabel>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ComponentLabel color="#f44336">
                        <ExpensiveComponentBad multiplier={multiplier} />
                    </ComponentLabel>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ComponentLabel color="#66bb6a">
                        <ExpensiveComponentGood multiplier={multiplier} />
                    </ComponentLabel>
                </Grid>
            </Grid>

            <ObservationGuide />

            {/* Code Examples Section */}
            <Box sx={{ mt: 6 }}>
                <Typography variant="h5" gutterBottom>
                    Code Examples & Explanations
                </Typography>
                <Typography variant="body1" paragraph>
                    Toggle the code sections below to understand why each optimization works:
                </Typography>

                <CodeViewer
                    title="Parent Component with useCallback & useMemo"
                    code={codeSnippets.parentComponent}
                    explanation={explanations.parentComponent}
                />

                <CodeViewer
                    title="Regular Child Component (Non-Memoized)"
                    code={codeSnippets.regularChild}
                    explanation={explanations.regularChild}
                />

                <CodeViewer
                    title="Memoized Child Component (React.memo)"
                    code={codeSnippets.memoizedChild}
                    explanation={explanations.memoizedChild}
                />

                <CodeViewer
                    title="Memoized Child with Non-Memoized Callback (Still Re-renders!)"
                    code={codeSnippets.memoizedChildWithBadCallback}
                    explanation={explanations.memoizedChildWithBadCallback}
                />

                <CodeViewer
                    title="Expensive Component (WITHOUT useMemo - Bad Performance)"
                    code={codeSnippets.expensiveComponentBad}
                    explanation={explanations.expensiveComponentBad}
                />

                <CodeViewer
                    title="Expensive Component (WITH useMemo - Good Performance)"
                    code={codeSnippets.expensiveComponentGood}
                    explanation={explanations.expensiveComponentGood}
                />
            </Box>
            </Box>
        </Container>
    );
};

export default MemoizedComponentsExample;