// Generate Snippet
import { Box, Typography, Grid } from '@mui/material';
import TextForm from './TextForm';
import { useAppSelector } from '../../../store/hooks';
import { selectCombinedTextValThree } from './three.slice';
import SliceOneConsumer from './components/ConsumerOne';
import SliceTwoConsumer from './components/ConsumerTwo';
import SliceThreeConsumer from './components/ConsumerThree';

// Remove START
import RenderCount from '../../../overall/RenderCount';
import CodeViewer from 'overall/CodeViewer';
import * as snippetExplanations from './snippets/explanations';
import contextOneSnippet from './snippets/one.slice.snippet';
import contextTwoSnippet from './snippets/two.slice.snippet';
import contextThreeSnippet from './snippets/three.slice.snippet';
import contextParentSnippet from './snippets/reduxParent.snippet';
import consumerOneSnippet from './snippets/components/consumerOne.snippet';
import consumerTwoSnippet from './snippets/components/consumerTwo.snippet';
import consumerThreeSnippet from './snippets/components/consumerThree.snippet';

export const explanation = "The ReduxParent component demonstrates how multiple Redux slices can be combined and consumed. ";
// Remove END

const CombinedValueConsumer = () => {
    const combinedTextValThree = useAppSelector(selectCombinedTextValThree);

    return (
        <Box
            sx={{
                p: 2,
                m: 1,
                border: '2px solid #ff6f00',
                borderRadius: 2,
                backgroundColor: '#1a1a1a',
                '&:hover': {
                    backgroundColor: '#2a2a2a'
                }
            }}
        >
            <RenderCount componentName="CombinedValueConsumer" />
            <Typography variant="body2" sx={{ color: '#ff6f00', fontWeight: 'bold' }}>
                Combined Value Consumer
            </Typography>
            <Typography>Combined Value: {combinedTextValThree}</Typography>
        </Box>
    )
}

const ReduxParent = () => {
    return (
        <>
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
                {/* Redux Section Label */}
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
                    REDUX STORE
                </Box>

                <RenderCount componentName="ReduxParent" />
                <Typography variant="h5" gutterBottom sx={{ color: '#ff6f00', mt: 2 }}>
                    Redux Version
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#bbb' }}>
                    Redux selectors only trigger re-renders when selected state changes
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <SliceOneConsumer />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SliceTwoConsumer />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SliceThreeConsumer />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                title="Slice One"
                code={contextOneSnippet}
                explanation={snippetExplanations.one_sliceExplanation}
            />

            <CodeViewer
                title="Slice Two"
                code={contextTwoSnippet}
                explanation={snippetExplanations.two_sliceExplanation}
            />

            <CodeViewer
                title="Slice Three"
                code={contextThreeSnippet}
                explanation={snippetExplanations.three_sliceExplanation}
            />

            <CodeViewer
                title="Parent Component"
                code={contextParentSnippet}
                explanation={snippetExplanations.reduxParentExplanation}
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
        </>
    );
};

export default ReduxParent;
