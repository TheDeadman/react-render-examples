import { Box, Typography, Container, Grid } from '@mui/material';
import RenderCount from '../../overall/RenderCount';
import CodeViewer from './CodeViewer';
import { codeSnippets, explanations } from './codeSnippets';
import RegularChild from './components/RegularChild';
import ComponentLabel from './components/ComponentLabel';
import ColorLegend from './components/ColorLegend';
import ParentControls from './components/ParentControls';
import ObservationGuide from './ObservationGuide';
import styles from 'MemoizedComponents.module.scss';
import LastUpdatedDisplay from './components/LastUpdated';
import { InfiniteLoopProvider } from './context';

const InfiniteRendersExample = () => {

    return (
        <InfiniteLoopProvider>

        <Container maxWidth="lg">
            {/* Remove START */}
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
                        code={codeSnippets.context}
                        explanation={explanations.context}
                    />
                    <CodeViewer
                        title="Infinite Loop Culprit Component"
                        code={codeSnippets.regularChild}
                        explanation={explanations.regularChild}
                    />
                </Box>
            </Box>
            {/* Remove END */}
        </Container>
        </InfiniteLoopProvider>

    );
};

export default InfiniteRendersExample;