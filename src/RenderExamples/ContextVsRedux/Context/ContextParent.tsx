// Generate Snippet
import { Box, Typography, Grid } from '@mui/material';
import { ContextOneProvider } from './ContextOne';
import { ContextTwoProvider } from './ContextTwo';
import { ContextThreeProvider, useAppContextThree } from './ContextThree';
import TextForm from './TextForm';
import ContextOneConsumer from './components/ConsumerOne';
import ContextTwoConsumer from './components/ConsumerTwo';
import ContextThreeConsumer from './components/ConsumerThree';
// Remove START
import RenderCount from '../../../overall/RenderCount';
import CodeViewer from 'overall/CodeViewer';
import * as snippetExplanations from './snippets/explanations';
import contextOneSnippet from './snippets/contextOne.snippet';
import contextTwoSnippet from './snippets/contextTwo.snippet';
import contextThreeSnippet from './snippets/contextThree.snippet';
import contextParentSnippet from './snippets/contextParent.snippet';
import consumerOneSnippet from './snippets/components/consumerOne.snippet';
import consumerTwoSnippet from './snippets/components/consumerTwo.snippet';
import consumerThreeSnippet from './snippets/components/consumerThree.snippet';

export const explanation = "The ContextParent component demonstrates how multiple context providers can be combined and consumed. ";
// Remove END

const CombinedValueConsumer = () => {
    const { combinedTextValThree } = useAppContextThree();

    return (
        <Box
            sx={{
                p: 2,
                m: 1,
                border: '2px solid #9c27b0',
                borderRadius: 2,
                backgroundColor: '#1a1a1a',
                '&:hover': {
                    backgroundColor: '#2a2a2a'
                }
            }}
        >
            <RenderCount componentName="CombinedValueConsumer" />
            <Typography variant="body2" sx={{ color: '#9c27b0', fontWeight: 'bold' }}>
                Combined Value Consumer
            </Typography>
            <Typography>Combined Value: {combinedTextValThree}</Typography>
        </Box>
    )
}

const ContextParent = () => {
    return (
        <ContextOneProvider>
            <ContextTwoProvider>
                <ContextThreeProvider>
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
                        {/* Context Section Label */}
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
                            CONTEXT PROVIDERS
                        </Box>

                        <RenderCount componentName="ContextParent" />
                        <Typography variant="h5" gutterBottom sx={{ color: '#9c27b0', mt: 2 }}>
                            Context Version
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ color: '#bbb' }}>
                            Each context consumer will re-render when ANY context value changes
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <ContextOneConsumer />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ContextTwoConsumer />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ContextThreeConsumer />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CombinedValueConsumer />
                            </Grid>
                            <Grid item xs={12}>
                                <TextForm />
                            </Grid>
                        </Grid>

                    </Box>
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
                        code={contextParentSnippet}
                        explanation={snippetExplanations.contextParentExplanation}
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
                    {/* Remove END */}
                </ContextThreeProvider>
            </ContextTwoProvider>
        </ContextOneProvider>
    );
};

export default ContextParent;
