// Generate Snippet
import { Box, Typography, Container, Grid } from '@mui/material';
import RegularChild from './components/RegularChild';
import MemoizedChild from './components/MemoizedChild';
import MemoizedChildWithBadCallback from './components/MemoizedChildWithBadCallback';
import ExpensiveComponentBad from './components/ExpensiveComponentBad';
import ExpensiveComponentGood from './components/ExpensiveComponentGood';
import ParentControls from './components/ParentControls';
import styles from 'MemoizedComponents.module.scss';
// Remove START
import ComponentLabel from './components/ComponentLabel';
import RenderCount from '../../overall/RenderCount';
import CodeViewer from './CodeViewer';
// import { codeSnippets, explanations } from './codeSnippets';
import sliceSnippet from './snippets/memoizedComponents.slice.snippet';
import parentSnippet from './snippets/memoizedComponentsExample.snippet';
import regularChildSnippet from './snippets/components/regularChild.snippet';
import expensiveBadSnippet from './snippets/components/expensiveComponentBad.snippet';
import expensiveGoodSnippet from './snippets/components/expensiveComponentGood.snippet';
import memoizedChildSnippet from './snippets/components/memoizedChild.snippet';
import memoizedChildBadSnippet from './snippets/components/memoizedChildWithBadCallback.snippet';
import ColorLegend from './components/ColorLegend';
import ObservationGuide from './ObservationGuide';
import * as explanations from './snippets/explanations';
export const explanation = "The Redux parent component demonstrates lifting state into the store while child components subscribe only to the values they need. Each child uses useAppSelector or useAppDispatch instead of receiving props, highlighting selective rendering based on subscribed slices of state.";
// Remove END

const MemoizedComponentsExample = () => {
    return (
        <Container maxWidth="lg">
            {/* Remove START */}
            <Box className={styles.examplePanel}>
                {/* Parent Component Label */}
                <Box className={styles.parentLabel}>
                    PARENT COMPONENT
                </Box>
                
                <RenderCount componentName="MemoizedComponentsExample" />
                <Box className={styles.headerSection}>
                    <Typography variant="h4" gutterBottom className={`${styles.headerTitle} ${styles.headerTitleOrange}`}>
                        Memoized Components Example (Redux)
                    </Typography>
                    <Typography variant="body1" paragraph className={styles.headerDescription}>
                        This example demonstrates how Redux works efficiently with React rendering optimization patterns.
                        Components using useAppSelector only re-render when the specific state they subscribe to changes.
                        Combined with React.memo, this creates an efficient rendering strategy where components only update when necessary.
                    </Typography>
                    
                    {/* Color Legend */}
                    <ColorLegend />
                </Box>

                <Grid container>
                    <Grid item xs={12} md={6}>
                        {/* Remove END */}
                        <ParentControls/>
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
                    <ComponentLabel color="#ffb74d">
                        {/* Remove END */}
                        <MemoizedChildWithBadCallback />
                        {/* Remove START */}
                    </ComponentLabel>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ComponentLabel color="#66bb6a">
                        {/* Remove END */}
                        <MemoizedChild />
                        {/* Remove START */}
                    </ComponentLabel>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ComponentLabel color="#f44336">
                        {/* Remove END */}
                        <ExpensiveComponentBad />
                        {/* Remove START */}
                    </ComponentLabel>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ComponentLabel color="#ba68c8">
                        {/* Remove END */}
                        <ExpensiveComponentGood />
                        {/* Remove START */}
                    </ComponentLabel>
                </Grid>
            </Grid>

            <ObservationGuide />

            {/* Code Examples Section */}
            <Box className={styles.codeSection}>
                <Typography variant="h5" gutterBottom>
                    Code Examples & Explanations
                </Typography>
                <Typography variant="body1" paragraph>
                    Toggle the code sections below to understand how Redux selective subscriptions work with React.memo.
                    Notice how components only re-render when their specific subscribed state changes:
                </Typography>

                <CodeViewer
                    title="Redux Toolkit Slice"
                    code={sliceSnippet}
                    explanation={explanations.memoizedComponents_sliceExplanation}
                />

                <CodeViewer
                    title="Parent Component"
                    code={parentSnippet}
                    explanation={explanations.memoizedComponentsExampleExplanation}
                />

                <CodeViewer
                    title="Regular Child Component"
                    code={regularChildSnippet}
                    explanation={explanations.regularChildExplanation}
                />

                <CodeViewer
                    title="Memoized Child Component"
                    code={memoizedChildSnippet}
                    explanation={explanations.memoizedChildExplanation}
                />

                <CodeViewer
                    title="Memoized Child with Non-Memoized Callback"
                    code={memoizedChildBadSnippet}
                    explanation={explanations.memoizedChildWithBadCallbackExplanation}
                />

                <CodeViewer
                    title="Expensive Component (WITHOUT useMemo - Bad Performance)"
                    code={expensiveBadSnippet}
                    explanation={explanations.expensiveComponentBadExplanation}
                />

                <CodeViewer
                    title="Expensive Component (WITH useMemo - Good Performance)"
                    code={expensiveGoodSnippet}
                    explanation={explanations.expensiveComponentGoodExplanation}
                />
            </Box>
            </Box>
            {/* Remove END */}
        </Container>
    );
};

export default MemoizedComponentsExample;