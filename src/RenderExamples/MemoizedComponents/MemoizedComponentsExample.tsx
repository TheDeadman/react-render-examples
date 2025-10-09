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
        <Paper 
            sx={{ 
                p: 2, 
                m: 1, 
                border: '2px solid #f44336',
                borderRadius: 2,
                backgroundColor: '#1a1a1a',
                '&:hover': {
                    backgroundColor: '#2a2a2a'
                }
            }}
        >
            <RenderCount componentName="RegularChild" />
            <Typography variant="h6" sx={{ color: '#f44336', fontWeight: 'bold' }}>
                Regular Child Component
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                🔄 Always re-renders (no React.memo)
            </Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={onIncrement} variant="contained" color="error" sx={{ mt: 1 }}>
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
        <Paper 
            sx={{ 
                p: 2, 
                m: 1, 
                border: '2px solid #66bb6a',
                borderRadius: 2,
                backgroundColor: '#1a1a1a',
                '&:hover': {
                    backgroundColor: '#2a2a2a'
                }
            }}
        >
            <RenderCount componentName="MemoizedChild" />
            <Typography variant="h6" sx={{ color: '#66bb6a', fontWeight: 'bold' }}>
                Memoized Child Component
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                ✅ React.memo + useCallback = Optimized
            </Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={onIncrement} variant="contained" color="success" sx={{ mt: 1 }}>
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
        <Paper 
            sx={{ 
                p: 2, 
                m: 1, 
                border: '2px solid #ffb74d',
                borderRadius: 2,
                backgroundColor: '#1a1a1a',
                '&:hover': {
                    backgroundColor: '#2a2a2a'
                }
            }}
        >
            <RenderCount componentName="MemoizedChildWithBadCallback" />
            <Typography variant="h6" sx={{ color: '#ffb74d', fontWeight: 'bold' }}>
                Memoized Child + Non-Memoized Function
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                ⚠️ React.memo but new function props = Still re-renders
            </Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button onClick={onIncrement} variant="contained" sx={{ mt: 1, backgroundColor: '#ffb74d', '&:hover': { backgroundColor: '#ffa726' } }}>
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
        <Paper 
            sx={{ 
                p: 2, 
                m: 1, 
                border: '2px solid #ba68c8',
                borderRadius: 2,
                backgroundColor: '#1a1a1a',
                '&:hover': {
                    backgroundColor: '#2a2a2a'
                }
            }}
        >
            <RenderCount componentName="ExpensiveComponent" />
            <Typography variant="h6" sx={{ color: '#ba68c8', fontWeight: 'bold' }}>
                Expensive Computation Component
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb', mb: 1 }}>
                🧮 useMemo prevents expensive recalculations
            </Typography>
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
    
    // With useCallback - this function is memoized
    const handleIncrement2 = useCallback(() => setCount2(prev => prev + 1), []);

    // Expensive computation that only depends on count1
    const expensiveValue = useMemo(() => {
        console.log('Computing expensive value...');
        return count1 * 1000 + 42;
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
                    <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 2, 
                        p: 2, 
                        backgroundColor: 'rgba(255,255,255,0.05)', 
                        borderRadius: 1,
                        mb: 2
                    }}>
                        <Typography variant="subtitle2" sx={{ mr: 2, fontWeight: 'bold' }}>
                            Component Types:
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Box sx={{ width: 16, height: 16, backgroundColor: '#f44336', borderRadius: 1 }} />
                            <Typography variant="caption">No Optimization</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Box sx={{ width: 16, height: 16, backgroundColor: '#ffb74d', borderRadius: 1 }} />
                            <Typography variant="caption">Partial Optimization</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Box sx={{ width: 16, height: 16, backgroundColor: '#66bb6a', borderRadius: 1 }} />
                            <Typography variant="caption">Full Optimization</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Box sx={{ width: 16, height: 16, backgroundColor: '#ba68c8', borderRadius: 1 }} />
                            <Typography variant="caption">useMemo Example</Typography>
                        </Box>
                    </Box>
                </Box>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Paper 
                            sx={{ 
                                p: 2, 
                                border: '2px solid #42a5f5',
                                borderRadius: 2,
                                backgroundColor: '#1e1e1e'
                            }}
                        >
                            <Typography variant="h6" gutterBottom sx={{ color: '#42a5f5', fontWeight: 'bold' }}>
                                🎛️ Parent State Controls
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <TextField
                                    label="Unrelated State (triggers all renders)"
                                    value={unrelatedState}
                                    onChange={(e) => setUnrelatedState(e.target.value)}
                                    fullWidth
                                    sx={{ 
                                        '& .MuiOutlinedInput-root': {
                                            backgroundColor: '#2a2a2a',
                                            '& fieldset': {
                                                borderColor: '#555'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#42a5f5'
                                            }
                                        }
                                    }}
                                />
                                <TextField
                                    label="Multiplier"
                                    type="number"
                                    value={multiplier}
                                    onChange={(e) => setMultiplier(Number(e.target.value))}
                                    fullWidth
                                    sx={{ 
                                        '& .MuiOutlinedInput-root': {
                                            backgroundColor: '#2a2a2a',
                                            '& fieldset': {
                                                borderColor: '#555'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#42a5f5'
                                            }
                                        }
                                    }}
                                />
                                <Typography><strong>Count 1:</strong> {count1}</Typography>
                                <Typography><strong>Count 2:</strong> {count2}</Typography>
                            </Box>
                        </Paper>
                    </Grid>

                <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative' }}>
                        <Typography 
                            variant="caption" 
                            sx={{ 
                                position: 'absolute',
                                top: -10,
                                left: 10,
                                backgroundColor: '#ba68c8',
                                color: 'white',
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                zIndex: 1
                            }}
                        >
                            CHILD COMPONENT
                        </Typography>
                        <ExpensiveComponent multiplier={multiplier} />
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative' }}>
                        <Typography 
                            variant="caption" 
                            sx={{ 
                                position: 'absolute',
                                top: -10,
                                left: 10,
                                backgroundColor: '#f44336',
                                color: 'white',
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                zIndex: 1
                            }}
                        >
                            CHILD COMPONENT
                        </Typography>
                        <RegularChild 
                            value={count1} 
                            onIncrement={handleIncrement1Bad} 
                            expensiveValue={expensiveValue} 
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative' }}>
                        <Typography 
                            variant="caption" 
                            sx={{ 
                                position: 'absolute',
                                top: -10,
                                left: 10,
                                backgroundColor: '#ffb74d',
                                color: 'white',
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                zIndex: 1
                            }}
                        >
                            CHILD COMPONENT
                        </Typography>
                        <MemoizedChildWithBadCallback 
                            value={count1} 
                            onIncrement={handleIncrement1Bad}  // Same non-memoized function!
                            expensiveValue={expensiveValue} 
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative' }}>
                        <Typography 
                            variant="caption" 
                            sx={{ 
                                position: 'absolute',
                                top: -10,
                                left: 10,
                                backgroundColor: '#66bb6a',
                                color: 'white',
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                zIndex: 1
                            }}
                        >
                            CHILD COMPONENT
                        </Typography>
                        <MemoizedChild 
                            value={count2} 
                            onIncrement={handleIncrement2} 
                            expensiveValue={expensiveValue} 
                        />
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ mt: 4, p: 3, backgroundColor: '#1e1e1e', borderRadius: 1, border: '1px solid #333' }}>
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
            </Box>
        </Container>
    );
};

export default MemoizedComponentsExample;