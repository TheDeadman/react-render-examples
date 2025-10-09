import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import RenderCount from '../../overall/RenderCount';
import { MemoizedComponentsProvider } from './context';
import CodeViewerContext from './CodeViewerContext';
import { codeSnippetsContext, explanationsContext } from './codeSnippetsContext';
import RegularChildContext from './components/RegularChildContext';
import MemoizedChildContext from './components/MemoizedChildContext';
import MemoizedChildWithBadCallbackContext from './components/MemoizedChildWithBadCallbackContext';
import ExpensiveComponentBadContext from './components/ExpensiveComponentBadContext';
import ExpensiveComponentGoodContext from './components/ExpensiveComponentGoodContext';
import ComponentLabelContext from './components/ComponentLabelContext';
import ColorLegendContext from './components/ColorLegendContext';
import ParentControlsContext from './components/ParentControlsContext';
import ObservationGuideContext from './ObservationGuideContext';

const MemoizedComponentsExampleContent: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Box 
                sx={{ 
                    border: '3px solid #9c27b0',
                    borderRadius: 3,
                    p: 3,
                    mt: 2,
                    backgroundColor: '#121212',
                    position: 'relative'
                }}
            >
                {/* Context Provider Label */}
                <Box 
                    sx={{ 
                        position: 'absolute',
                        top: -12,
                        left: 16,
                        backgroundColor: '#9c27b0',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: '0.875rem',
                        fontWeight: 'bold'
                    }}
                >
                    CONTEXT PROVIDER
                </Box>
                
                <RenderCount componentName="MemoizedComponentsContextProvider" />
                <Box sx={{ mt: 2, mb: 4 }}>
                    <Typography variant="h4" gutterBottom sx={{ color: '#9c27b0' }}>
                        Memoized Components Example (React Context)
                    </Typography>
                    <Typography variant="body1" paragraph>
                        This example demonstrates the same optimizations as the props version, but using React Context for state management.
                        Notice how Context affects rendering behavior and breaks some optimizations.
                    </Typography>
                    
                    {/* Color Legend */}
                    <ColorLegendContext />
                </Box>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <ParentControlsContext />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ComponentLabelContext color="#f44336">
                            <RegularChildContext />
                        </ComponentLabelContext>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ComponentLabelContext color="#ffb74d">
                            <MemoizedChildWithBadCallbackContext />
                        </ComponentLabelContext>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ComponentLabelContext color="#ffb74d">
                            <MemoizedChildContext />
                        </ComponentLabelContext>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ComponentLabelContext color="#f44336">
                            <ExpensiveComponentBadContext />
                        </ComponentLabelContext>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ComponentLabelContext color="#ba68c8">
                            <ExpensiveComponentGoodContext />
                        </ComponentLabelContext>
                    </Grid>
                </Grid>

                <ObservationGuideContext />

                {/* Code Examples Section */}
                <Box sx={{ mt: 6 }}>
                    <Typography variant="h5" gutterBottom>
                        Context Code Examples & Explanations
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Toggle the code sections below to understand how React Context affects rendering:
                    </Typography>

                    <CodeViewerContext
                        title="React Context Provider (The Source of Re-renders)"
                        code={codeSnippetsContext.context}
                        explanation={explanationsContext.context}
                    />

                    <CodeViewerContext
                        title="Parent Component (Context Provider Pattern)"
                        code={codeSnippetsContext.parentComponentContext}
                        explanation={explanationsContext.parentComponentContext}
                    />

                    <CodeViewerContext
                        title="Regular Child Component (Context Version)"
                        code={codeSnippetsContext.regularChildContext}
                        explanation={explanationsContext.regularChildContext}
                    />

                    <CodeViewerContext
                        title="Memoized Child + Non-Memoized Function (Context Version)"
                        code={codeSnippetsContext.memoizedChildWithBadCallbackContext}
                        explanation={explanationsContext.memoizedChildWithBadCallbackContext}
                    />

                    <CodeViewerContext
                        title="Memoized Child Component (Context Breaks React.memo)"
                        code={codeSnippetsContext.memoizedChildContext}
                        explanation={explanationsContext.memoizedChildContext}
                    />

                    <CodeViewerContext
                        title="Expensive Component (WITHOUT useMemo - Context Version)"
                        code={codeSnippetsContext.expensiveComponentBadContext}
                        explanation={explanationsContext.expensiveComponentBadContext}
                    />

                    <CodeViewerContext
                        title="Expensive Component (WITH useMemo - Context Version)"
                        code={codeSnippetsContext.expensiveComponentGoodContext}
                        explanation={explanationsContext.expensiveComponentGoodContext}
                    />
                </Box>
            </Box>
        </Container>
    );
};

const MemoizedComponentsContextExample: React.FC = () => {
    return (
        <MemoizedComponentsProvider>
            <MemoizedComponentsExampleContent />
        </MemoizedComponentsProvider>
    );
};

export default MemoizedComponentsContextExample;