// Generate Snippet
import { Box, Typography, Container, Grid } from '@mui/material';
import RegularChild from './components/RegularChild';
import ParentControls from './components/ParentControls';
import styles from 'MemoizedComponents.module.scss';
import LastUpdatedDisplay from './components/LastUpdated';
import { InfiniteLoopProvider } from './context';
// Remove START
import CodeViewer from './CodeViewer';
import ComponentLabel from './components/ComponentLabel';
import ColorLegend from './components/ColorLegend';
import ObservationGuide from './ObservationGuide';
import RenderCount from '../../overall/RenderCount';

import * as snippetExplanations from './snippets/explanations';
import contextCodeSnippet from './snippets/context.snippet';
import regularChildCodeSnippet from './snippets/components/regularChild.snippet';
import parentControlsCodeSnippet from './snippets/components/parentControls.snippet';
import parentCodeSnippet from './snippets/infiniteRendersExample.snippet';

export const explanation = "Parent component rendering a provider and components that use the context.";
// Remove END

const InfiniteRendersExample = () => {

    return (
        <InfiniteLoopProvider>

            {/* Remove START */}
        <Container maxWidth="lg">
            <Box className={styles.examplePanel}>
                {/* Parent Component Label */}
                <Box className={styles.parentLabel}>
                    INFINITE RENDERS
                </Box>

                <RenderCount componentName="MemoizedComponentsExample" />
                <Box className={styles.headerSection}>
                    <Typography variant="h4" gutterBottom className={`${styles.headerTitle} ${styles.headerTitleOrange}`}>
                        Infinite Render Loops
                    </Typography>
                    <Typography variant="body1" paragraph className={styles.headerDescription}>
                        This is an example of an infinite render loop caused by a non-memoized function used in a useEffect dependency array.
                        The reason for any infinite re-renders comes down to a few specific issues.
                        <br />
                        1. A function / object is being re-created on every render (non-memoized). That function is included in a useEffect dependency array. The useEffect causes another state update which recreates the function / object again, causing another render, and so on.
                        <br />
                        2. Intertwined state updates. E.G. A useEffect based on state A causes an update to state B, and a useEffect based on state B causes an update to state A.
                    </Typography>

                    {/* Color Legend */}
                    <ColorLegend />
                </Box>

                <Grid container>
                    <Grid item xs={12} md={6}>
                        {/* Remove END */}
                        <ParentControls />
                        {/* Remove START */}
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ComponentLabel color="#f44336">
                            {/* Remove END */}
                            <RegularChild />
                            {/* Remove START */}
                        </ComponentLabel>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <ComponentLabel color="#66bb6a">
                            {/* Remove END */}
                            <LastUpdatedDisplay />
                            {/* Remove START */}
                        </ComponentLabel>
                    </Grid>

                </Grid>

                <ObservationGuide />

                <Box className={styles.codeSection}>
                    <Typography variant="h5" gutterBottom>
                        Code Examples & Explanations
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Toggle the code sections below to understand why each optimization works:
                    </Typography>

                    <CodeViewer
                        title="Context and Provider"
                        code={contextCodeSnippet}
                        explanation={snippetExplanations.contextExplanation}
                    />
                                        <CodeViewer
                        title="Parent Component"
                        code={parentCodeSnippet}
                        explanation={snippetExplanations.infiniteRendersExampleExplanation}
                    />
                                        <CodeViewer
                        title="State Controls"
                        code={parentControlsCodeSnippet}
                        explanation={snippetExplanations.parentControlsExplanation}
                    />
                    <CodeViewer
                        title="Infinite Loop Culprit Component"
                        code={regularChildCodeSnippet}
                        explanation={snippetExplanations.regularChildExplanation}
                    />
                </Box>
            </Box>
        </Container>
            {/* Remove END */}
        </InfiniteLoopProvider>

    );
};

export default InfiniteRendersExample;