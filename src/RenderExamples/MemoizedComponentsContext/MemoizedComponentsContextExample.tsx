// Generate Snippet
import { Box, Typography, Container, Grid } from '@mui/material';
import { MemoizedComponentsProvider } from './context';
import RegularChildContext from './components/RegularChildContext';
import MemoizedChildContext from './components/MemoizedChildContext';
import MemoizedChildWithBadCallbackContext from './components/MemoizedChildWithBadCallbackContext';
import ExpensiveComponentBadContext from './components/ExpensiveComponentBadContext';
import ExpensiveComponentGoodContext from './components/ExpensiveComponentGoodContext';
import ParentControlsContext from './components/ParentControlsContext';
import styles from 'MemoizedComponents.module.scss';
// Remove START
import RenderCount from '../../overall/RenderCount';
import memoizedComponentsParentSnippet from './snippets/memoizedComponentsContextExample.snippet';
import contextSnippet from './snippets/context.snippet';
import regularChildSnippet from './snippets/components/regularChildContext.snippet';
import memoizedChildSnippet from './snippets/components/memoizedChildContext.snippet';
import memoizedChildWithBadCallbackSnippet from './snippets/components/memoizedChildWithBadCallbackContext.snippet';
import expensiveComponentBadSnippet from './snippets/components/expensiveComponentBadContext.snippet';
import expensiveComponentGoodSnippet from './snippets/components/expensiveComponentGoodContext.snippet';
import * as explanationsContext from './snippets/explanations';
import ColorLegendContext from './components/ColorLegendContext';
import ComponentLabelContext from './components/ComponentLabelContext';
import ObservationGuideContext from './ObservationGuideContext';
import CodeViewerContext from './CodeViewerContext';

export const explanation = "The Context parent component demonstrates how React Context shifts state management from local state and props to a centralized provider. The provider wraps all consumers and manages shared state. Unlike props-based examples, child components get data directly from context rather than through prop passing.";
// Remove END

const MemoizedComponentsExampleContent = () => {
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
                        Notice how Context affects rendering behavior and breaks some optimizations. It is helpful to reduce prop drilling, but comes with trade-offs. Certain types of optimizations, like React.memo, may not work as expected because context changes can trigger re-renders in all consumer components.
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
                        <ComponentLabelContext color="#66bb6a">
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
                        code={contextSnippet}
                        explanation={explanationsContext.contextExplanation}
                    />

                    <CodeViewerContext
                        title="Parent Component (Context Provider Pattern)"
                        code={memoizedComponentsParentSnippet}
                        explanation={explanationsContext.memoizedComponentsContextExampleExplanation}
                    />

                    <CodeViewerContext
                        title="Regular Child Component (Context Version)"
                        code={regularChildSnippet}
                        explanation={explanationsContext.regularChildContextExplanation}
                    />

                    <CodeViewerContext
                        title="Memoized Child + Non-Memoized Function (Context Version)"
                        code={memoizedChildWithBadCallbackSnippet}
                        explanation={explanationsContext.memoizedChildWithBadCallbackContextExplanation}
                    />

                    <CodeViewerContext
                        title="Memoized Child Component (Context Breaks React.memo)"
                        code={memoizedChildSnippet}
                        explanation={explanationsContext.memoizedChildContextExplanation}
                    />

                    <CodeViewerContext
                        title="Expensive Component (WITHOUT useMemo - Context Version)"
                        code={expensiveComponentBadSnippet}
                        explanation={explanationsContext.expensiveComponentBadContextExplanation}
                    />

                    <CodeViewerContext
                        title="Expensive Component (WITH useMemo - Context Version)"
                        code={expensiveComponentGoodSnippet}
                        explanation={explanationsContext.expensiveComponentGoodContextExplanation}
                    />
                </Box>
            </Box>
                {/* Remove END */}
        </Container>
    );
};

const MemoizedComponentsContextExample = () => {
    return (
        <MemoizedComponentsProvider>
            <MemoizedComponentsExampleContent />
        </MemoizedComponentsProvider>
    );
};

export default MemoizedComponentsContextExample;