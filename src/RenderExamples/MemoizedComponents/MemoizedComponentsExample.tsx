// Generate Snippet
import { useState, useMemo, useCallback } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import RegularChild from './components/RegularChild';
import MemoizedChild from './components/MemoizedChild';
import MemoizedChildWithBadCallback from './components/MemoizedChildWithBadCallback';
import ExpensiveComponentBad from './components/ExpensiveComponentBad';
import ExpensiveComponentGood from './components/ExpensiveComponentGood';
import ParentControls from './components/ParentControls';
// Remove START
import RenderCount from '../../overall/RenderCount';
import CodeViewer from './CodeViewer';
import ComponentLabel from './components/ComponentLabel';
import ColorLegend from './components/ColorLegend';
import ObservationGuide from './ObservationGuide';
import parentComponentSnippet from './snippets/memoizedComponentsExample.snippet';
import regularChildSnippet from './snippets/components/regularChild.snippet';
import memoizedChildSnippet from './snippets/components/memoizedChild.snippet';
import memoizedChildWithBadCallbackSnippet from './snippets/components/memoizedChildWithBadCallback.snippet';
import expensiveComponentBadSnippet from './snippets/components/expensiveComponentBad.snippet';
import expensiveComponentGoodSnippet from './snippets/components/expensiveComponentGood.snippet';
import * as snippetExplanations from './snippets/explanations';
// Remove END
import styles from 'MemoizedComponents.module.scss';

export const explanation = "The parent component shows the complete optimization strategy: useCallback() prevents function recreation, useMemo() prevents expensive recalculations, and the child components use React.memo(). The key insight: ALL THREE hooks must work together. Failure to use React.memo, useCallback, or useMemo will break the optimization chain in many cases.";

const MemoizedComponentsExample = () => {
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
            {/* Remove START */}
            <Box className={styles.examplePanel}>
                {/* Parent Component Label */}
                <Box className={styles.parentLabel}>
                    PARENT COMPONENT
                </Box>
                
                <RenderCount componentName="MemoizedComponentsExample" />
                <Box className={styles.headerSection}>
                    <Typography variant="h4" gutterBottom className={styles.headerTitle}>
                        Memoized Components Example
                    </Typography>
                    <Typography variant="body1" paragraph className={styles.headerDescription}>
                        This example demonstrates React.memo, useMemo, and useCallback optimizations.
                        Watch the render counters to see which components re-render when state changes. 
                        Scroll to the bottom to see code for each component.
                    </Typography>
                    
                    {/* Color Legend */}
                    <ColorLegend />
                </Box>

                <Grid container>
                    <Grid item xs={12} md={6}>
                        {/* Remove END */}
                        <ParentControls
                            unrelatedState={unrelatedState}
                            onUnrelatedStateChange={setUnrelatedState}
                            multiplier={multiplier}
                            onMultiplierChange={setMultiplier}
                            count1={count1}
                        />
                        {/* Remove START */}
                    </Grid>

                <Grid item xs={12} md={6}>
                    <ComponentLabel color="#f44336">
                        {/* Remove END */}
                        <RegularChild 
                            value={count1} 
                            onIncrement={handleIncrement1Bad} 
                            expensiveValue={expensiveValue} 
                        />
                        {/* Remove START */}
                    </ComponentLabel>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ComponentLabel color="#ffb74d">
                        {/* Remove END */}
                        <MemoizedChildWithBadCallback 
                            value={count1} 
                            onIncrement={handleIncrement1Bad}
                            expensiveValue={expensiveValue} 
                        />
                        {/* Remove START */}
                    </ComponentLabel>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ComponentLabel color="#66bb6a">
                        {/* Remove END */}
                        <MemoizedChild 
                            value={count1} 
                            onIncrement={handleIncrement2} 
                            expensiveValue={expensiveValue} 
                        />
                        {/* Remove START */}
                    </ComponentLabel>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ComponentLabel color="#f44336">
                        {/* Remove END */}
                        <ExpensiveComponentBad multiplier={multiplier} />
                        {/* Remove START */}
                    </ComponentLabel>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ComponentLabel color="#ba68c8">
                        {/* Remove END */}
                        <ExpensiveComponentGood multiplier={multiplier} />
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
                    title="Parent Component with useCallback & useMemo"
                    code={parentComponentSnippet}
                    explanation={snippetExplanations.memoizedComponentsExampleExplanation}
                />

                <CodeViewer
                    title="Regular Child Component (Non-Memoized)"
                    code={regularChildSnippet}
                    explanation={snippetExplanations.regularChildExplanation}
                />

                <CodeViewer
                    title="Memoized Child with Non-Memoized Callback (Still Re-renders)"
                    code={memoizedChildWithBadCallbackSnippet}
                    explanation={snippetExplanations.memoizedChildWithBadCallbackExplanation}
                />
                
                <CodeViewer
                    title="Memoized Child Component (React.memo)"
                    code={memoizedChildSnippet}
                    explanation={snippetExplanations.memoizedChildExplanation}
                />


                <CodeViewer
                    title="Expensive Component (WITHOUT useMemo - Bad Performance)"
                    code={expensiveComponentBadSnippet}
                    explanation={snippetExplanations.expensiveComponentBadExplanation}
                />

                <CodeViewer
                    title="Expensive Component (WITH useMemo - Good Performance)"
                    code={expensiveComponentGoodSnippet}
                    explanation={snippetExplanations.expensiveComponentGoodExplanation}
                />
            </Box>
            </Box>
                {/* Remove END */}
        </Container>
    );
};

export default MemoizedComponentsExample;