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
import useEffectParentSnippet from './snippets/useEffectParent.snippet';
import consumerOneSnippet from './snippets/components/consumerOne.snippet';
import consumerTwoSnippet from './snippets/components/consumerTwo.snippet';
import consumerThreeSnippet from './snippets/components/consumerThree.snippet';
import combinedValueConsumerSnippet from './snippets/components/combinedValueConsumer.snippet';


export const explanation = "The Parent component placeholder.";
// Remove END

const UseEffectParent = () => {
    return (
        <ContextOneProvider key="effect-version">
            <ContextTwoProvider key="effect-version">
                <ContextThreeProvider key="effect-version">
                    {/* Remove START */}
                    <Box
                        sx={{
                            border: '2px solid #9c27b0',
                            borderRadius: 2,
                            p: 2,
                            mt: 2,
                            backgroundColor: '#1e1e1e',
                            position: 'relative'
                        }}
                    >
                        {/* useEffect Section Label */}
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
                                fontSize: '0.75rem',
                                fontWeight: 'bold'
                            }}
                        >
                            USEEFFECT VERSION
                        </Box>

                        <RenderCount componentName="UseEffectParent" />
                        <Typography variant="h5" gutterBottom sx={{ color: '#9c27b0', mt: 2 }}>
                            useEffect Version
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ color: '#bbb' }}>
                            Side effects run after every render unless dependencies are memoized
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
                                <TextForm />
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
                        code={useEffectParentSnippet}
                        explanation={snippetExplanations.useEffectParentExplanation}
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

export default UseEffectParent;
