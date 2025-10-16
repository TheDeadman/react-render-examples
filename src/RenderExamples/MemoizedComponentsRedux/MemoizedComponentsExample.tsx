import React from 'react';
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
import styles from 'MemoizedComponents.module.scss';

const MemoizedComponentsExample: React.FC = () => {
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
                    code={codeSnippets.slice}
                    explanation={explanations.slice}
                />

                <CodeViewer
                    title="Parent Component"
                    code={codeSnippets.parentComponent}
                    explanation={explanations.parentComponent}
                />

                <CodeViewer
                    title="Regular Child Component"
                    code={codeSnippets.regularChild}
                    explanation={explanations.regularChild}
                />

                <CodeViewer
                    title="Memoized Child Component"
                    code={codeSnippets.memoizedChild}
                    explanation={explanations.memoizedChild}
                />

                <CodeViewer
                    title="Memoized Child with Non-Memoized Callback"
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
            {/* Remove END */}
        </Container>
    );
};

export default MemoizedComponentsExample;