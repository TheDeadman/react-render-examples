import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import RenderCount from '../../overall/RenderCount';
import { MemoizedComponentsProvider } from './context';
import CodeViewerContext from './CodeViewerContext';
import { codeSnippetsContext, explanationsContext } from './codeSnippets';
import RegularChildContext from './components/RegularChildContext';
import MemoizedChildContext from './components/MemoizedChildContext';
import MemoizedChildWithBadCallbackContext from './components/MemoizedChildWithBadCallbackContext';
import ExpensiveComponentBadContext from './components/ExpensiveComponentBadContext';
import ExpensiveComponentGoodContext from './components/ExpensiveComponentGoodContext';
import ComponentLabelContext from './components/ComponentLabelContext';
import ColorLegendContext from './components/ColorLegendContext';
import ParentControlsContext from './components/ParentControlsContext';
import ObservationGuideContext from './ObservationGuideContext';
import styles from 'MemoizedComponents.module.scss';

const MemoizedComponentsExampleContent: React.FC = () => {
    return (
        <Container maxWidth="lg">
            {/* Remove START */}
            <Box className={`${styles.examplePanel}`}>
                {/* Context Provider Label */}
                <Box className={styles.parentLabel}>
                    PARENT COMPONENT
                </Box>
                
                <RenderCount componentName="MemoizedComponentsContextProvider" />
                <Box className={styles.headerSection}>
                    <Typography variant="h4" gutterBottom className={`${styles.headerTitle} ${styles.headerTitlePurple}`}>
                        Memoized Components Example (React Context)
                    </Typography>
                    <Typography variant="body1" paragraph className={styles.headerDescription}>
                        This example demonstrates the same optimizations as the props version, but using React Context for state management.
                        Notice how Context affects rendering behavior and breaks some optimizations.
                    </Typography>
                    
                    {/* Color Legend */}
                    <ColorLegendContext />
                </Box>

                <Grid container>
                    <Grid item xs={12} md={6}>
                        {/* Remove END */}
                        <ParentControlsContext />
                        {/* Remove START */}
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ComponentLabelContext color="#f44336">
                            {/* Remove END */}
                            <RegularChildContext />
                            {/* Remove START */}
                        </ComponentLabelContext>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ComponentLabelContext color="#ffb74d">
                            {/* Remove END */}
                            <MemoizedChildWithBadCallbackContext />
                            {/* Remove START */}
                        </ComponentLabelContext>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ComponentLabelContext color="#ffb74d">
                            {/* Remove END */}
                            <MemoizedChildContext />
                            {/* Remove START */}
                        </ComponentLabelContext>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ComponentLabelContext color="#f44336">
                            {/* Remove END */}
                            <ExpensiveComponentBadContext />
                            {/* Remove START */}
                        </ComponentLabelContext>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ComponentLabelContext color="#ba68c8">
                            {/* Remove END */}
                            <ExpensiveComponentGoodContext />
                            {/* Remove START */}
                        </ComponentLabelContext>
                    </Grid>
                </Grid>

                <ObservationGuideContext />

                {/* Code Examples Section */}
                <Box className={styles.codeSection}>
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
                {/* Remove END */}
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