import React, { useState, memo, useMemo, useCallback } from 'react';
import { Box, Button, Typography, TextField, Container, Paper, Grid } from '@mui/material';
import RenderCount from '../../overall/RenderCount';
import CodeViewer from './CodeViewer';
import { codeSnippets, explanations } from './codeSnippets';

// Non-memoized child component
const RegularChild: React.FC<{ value: number; onIncrement: () => void; expensiveValue: number }> = ({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper sx={{ p: 2, m: 1 }}>
            <RenderCount componentName="RegularChild" />
            <Typography variant="h6">Regular Child Component</Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={onIncrement} variant="contained" sx={{ mt: 1 }}>
                Increment
            </Button>
        </Paper>
    );
};

// Memoized child component
const MemoizedChild = memo<{ value: number; onIncrement: () => void; expensiveValue: number }>(({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper sx={{ p: 2, m: 1 }}>
            <RenderCount componentName="MemoizedChild" />
            <Typography variant="h6">Memoized Child Component</Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={onIncrement} variant="contained" sx={{ mt: 1 }}>
                Increment
            </Button>
        </Paper>
    );
});

// Memoized child that receives a non-memoized function (will still re-render!)
const MemoizedChildWithBadCallback = memo<{ value: number; onIncrement: () => void; expensiveValue: number }>(({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper sx={{ p: 2, m: 1 }}>
            <RenderCount componentName="MemoizedChildWithBadCallback" />
            <Typography variant="h6">Memoized Child + Non-Memoized Function</Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={onIncrement} variant="contained" sx={{ mt: 1 }}>
                Increment
            </Button>
        </Paper>
    );
});

// Component that uses expensive computation
const ExpensiveComponent: React.FC<{ multiplier: number }> = ({ multiplier }) => {
    // Without useMemo - this will recalculate on every render
    const expensiveValueBad = Array.from({ length: 1000 }, (_, i) => i * multiplier).reduce((a, b) => a + b, 0);
    
    // With useMemo - this will only recalculate when multiplier changes
    const expensiveValueGood = useMemo(() => {
        console.log('Calculating expensive value...');
        return Array.from({ length: 1000 }, (_, i) => i * multiplier).reduce((a, b) => a + b, 0);
    }, [multiplier]);

    return (
        <Paper sx={{ p: 2, m: 1 }}>
            <RenderCount componentName="ExpensiveComponent" />
            <Typography variant="h6">Expensive Computation Component</Typography>
            <Typography>Bad Value (recalculates every render): {expensiveValueBad}</Typography>
            <Typography>Good Value (memoized): {expensiveValueGood}</Typography>
        </Paper>
    );
};

const MemoizedComponentsExample: React.FC = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [unrelatedState, setUnrelatedState] = useState('');

    // Without useCallback - this creates a new function on every render
    const handleIncrement1Bad = () => setCount1(prev => prev + 1);
    
    // With useCallback - this function is memoized (used for comparison demonstration)
    const handleIncrement1Good = useCallback(() => setCount1(prev => prev + 1), []);
    const handleIncrement2 = useCallback(() => setCount2(prev => prev + 1), []);

    // Expensive computation that only depends on count1
    const expensiveValue = useMemo(() => {
        console.log('Computing expensive value...');
        return count1 * 1000 + 42;
    }, [count1]);

    return (
        <Container maxWidth="lg">
            <RenderCount componentName="MemoizedComponentsExample" />
            <Box sx={{ mt: 2, mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Memoized Components Example
                </Typography>
                <Typography variant="body1" paragraph>
                    This example demonstrates React.memo, useMemo, and useCallback optimizations.
                    Watch the render counters to see which components re-render when state changes.
                </Typography>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Controls
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                label="Unrelated State (triggers all renders)"
                                value={unrelatedState}
                                onChange={(e) => setUnrelatedState(e.target.value)}
                                fullWidth
                            />
                            <TextField
                                label="Multiplier"
                                type="number"
                                value={multiplier}
                                onChange={(e) => setMultiplier(Number(e.target.value))}
                                fullWidth
                            />
                            <Typography>Count 1: {count1}</Typography>
                            <Typography>Count 2: {count2}</Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ExpensiveComponent multiplier={multiplier} />
                </Grid>

                <Grid item xs={12} md={6}>
                    <RegularChild 
                        value={count1} 
                        onIncrement={handleIncrement1Bad} 
                        expensiveValue={expensiveValue} 
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <MemoizedChildWithBadCallback 
                        value={count1} 
                        onIncrement={handleIncrement1Bad}  // Same non-memoized function!
                        expensiveValue={expensiveValue} 
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <MemoizedChild 
                        value={count2} 
                        onIncrement={handleIncrement2} 
                        expensiveValue={expensiveValue} 
                    />
                </Grid>
            </Grid>

            <Box sx={{ mt: 4, p: 3, backgroundColor: 'background.paper', borderRadius: 1 }}>
                <Typography variant="h6" gutterBottom>
                    What to Observe:
                </Typography>
                <Typography variant="body2" paragraph>
                    • Type in "Unrelated State" field - notice which components re-render
                </Typography>
                <Typography variant="body2" paragraph>
                    • <strong>Regular Child:</strong> Always re-renders (no React.memo)
                </Typography>
                <Typography variant="body2" paragraph>
                    • <strong>Memoized Child + Non-Memoized Function:</strong> Still re-renders every time because it receives a new function reference, even though it's wrapped in React.memo!
                </Typography>
                <Typography variant="body2" paragraph>
                    • <strong>Memoized Child (with useCallback):</strong> Only re-renders when count2 or expensiveValue actually changes
                </Typography>
                <Typography variant="body2" paragraph>
                    • ExpensiveComponent shows the difference between memoized and non-memoized calculations
                </Typography>
                <Typography variant="body2">
                    • Check the browser console to see when expensive calculations occur
                </Typography>
            </Box>

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
                    title="Expensive Component (useMemo for calculations)"
                    code={codeSnippets.expensiveComponent}
                    explanation={explanations.expensiveComponent}
                />
            </Box>
        </Container>
    );
};

export default MemoizedComponentsExample;