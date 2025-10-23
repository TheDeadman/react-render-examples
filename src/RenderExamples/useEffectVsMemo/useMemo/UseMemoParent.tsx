// Generate Snippet
import { Box, Typography, Grid } from '@mui/material';
import { ContextOneProvider } from './ContextOne';
import { ContextTwoProvider } from './ContextTwo';
import { ContextThreeProvider } from './ContextThree';
import ContextOneConsumer from './components/ConsumerOne';
import ContextTwoConsumer from './components/ConsumerTwo';
import ContextThreeConsumer from './components/ConsumerThree';
import CombinedValueConsumer from './components/CombinedValueConsumer';
import TextForm from './TextForm';
// Remove START
import RenderCount from '../../../overall/RenderCount';
import CodeViewer from 'overall/CodeViewer';
import * as snippetExplanations from './snippets/explanations';
import contextOneSnippet from './snippets/contextOne.snippet';
import contextTwoSnippet from './snippets/contextTwo.snippet';
import contextThreeSnippet from './snippets/contextThree.snippet';
import useMemoParentSnippet from './snippets/useMemoParent.snippet';
import consumerOneSnippet from './snippets/components/consumerOne.snippet';
import consumerTwoSnippet from './snippets/components/consumerTwo.snippet';
import consumerThreeSnippet from './snippets/components/consumerThree.snippet';
import combinedValueConsumerSnippet from './snippets/components/combinedValueConsumer.snippet';

export const explanation = "The Parent component placeholder.";
// Remove END

const UseMemoParent = () => {
    return (
        <ContextOneProvider key="memo-version">
            <ContextTwoProvider key="memo-version">
                <ContextThreeProvider key="memo-version">
                    {/* Remove START */}
                    <Box
                        sx={{
                            border: '2px solid #ff6f00',
                            borderRadius: 2,
                            p: 2,
                            mt: 2,
                            backgroundColor: '#1e1e1e',
                            position: 'relative'
                        }}
                    >
                        {/* useMemo Section Label */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: -12,
                                left: 16,
                                backgroundColor: '#ff6f00',
                                color: 'white',
                                px: 2,
                                py: 0.5,
                                borderRadius: 1,
                                fontSize: '0.75rem',
                                fontWeight: 'bold'
                            }}
                        >
                            USEMEMO VERSION
                        </Box>

                        <RenderCount componentName="UseMemoParent" />
                        <Typography variant="h5" gutterBottom sx={{ color: '#ff6f00', mt: 2 }}>
                            useMemo Version
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ color: '#bbb' }}>
                            Computations are memoized and only recalculate when dependencies change
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                            {/* Remove END */}
                                <ContextOneConsumer />
                                                    {/* Remove START */}
                            </Grid>
                            <Grid item xs={12} md={6}>
                    {/* Remove END */}
                                <ContextTwoConsumer />
                                                    {/* Remove START */}
                            </Grid>
                            <Grid item xs={12} md={6}>
                    {/* Remove END */}
                                <ContextThreeConsumer />
                                                    {/* Remove START */}
                            </Grid>
                            <Grid item xs={12} md={6}>
                    {/* Remove END */}
                                <CombinedValueConsumer />
                                                    {/* Remove START */}
                            </Grid>
                            <Grid item xs={12}>
                    {/* Remove END */}
                                <TextForm />
                                                    {/* Remove START */}
                            </Grid>
                        </Grid>
                    </Box>
                    {/* Remove END */}
                    {/* Remove START */}
                    {/* <ObservationGuide /> */}
                    <br />
                    <CodeViewer
                        title="Context One"
                        code={contextOneSnippet}
                        explanation={snippetExplanations.contextOneExplanation}
                    />

                    <CodeViewer
                        title="Context Two"
                        code={contextTwoSnippet}
                        explanation={snippetExplanations.contextTwoExplanation}
                    />

                    <CodeViewer
                        title="Context Three"
                        code={contextThreeSnippet}
                        explanation={snippetExplanations.contextThreeExplanation}
                    />

                    <CodeViewer
                        title="Parent Component"
                        code={useMemoParentSnippet}
                        explanation={snippetExplanations.useMemoParentExplanation}
                    />
                    <CodeViewer
                        title="Consumer One Component"
                        code={consumerOneSnippet}
                        explanation={snippetExplanations.consumerOneExplanation}
                    />

                    <CodeViewer
                        title="Consumer Two Component"
                        code={consumerTwoSnippet}
                        explanation={snippetExplanations.consumerTwoExplanation}
                    />

                    <CodeViewer
                        title="Consumer Three Component"
                        code={consumerThreeSnippet}
                        explanation={snippetExplanations.consumerThreeExplanation}
                    />
                    <CodeViewer
                        title="Combined Value Consumer Component"
                        code={combinedValueConsumerSnippet}
                        explanation={snippetExplanations.combinedValueConsumerExplanation}
                    />
                    {/* Remove END */}
                </ContextThreeProvider>
            </ContextTwoProvider>
        </ContextOneProvider >

    );
};

export default UseMemoParent;
