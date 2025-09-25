import React from 'react';
import { Box } from '@mui/material';
import RenderCount from 'overall/RenderCount';
import TextForm from './TextForm';
import { useAppSelector } from 'store/hooks';
import { selectTextValTwo } from './two.slice';
import { selectTextValOne } from './one.slice';
import { selectCombinedTextValThree, selectTextValThree } from './three.slice';

// const 
const SliceOneConsumer = () => {
    const textVal = useAppSelector(selectTextValOne);
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName="ConsumerOne" />
            Context One: {textVal}
        </Box>
    )
}

const SliceTwoConsumer = () => {
    const textValTwo = useAppSelector(selectTextValTwo);
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName="ConsumerTwo" />
            Context Two: {textValTwo}
        </Box>
    )
}

const SliceThreeConsumer = () => {
    const textValThree = useAppSelector(selectTextValThree);
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName="ConsumerThree" />
            Context Three: {textValThree}
        </Box>
    )
}

const CombinedValueConsumer = () => {
    const combinedTextValThree = useAppSelector(selectCombinedTextValThree);

    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName="ConsumerThree" />
            Combined Value: {combinedTextValThree}
        </Box>
    )
}

const ReduxParent: React.FC = () => {
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName="ContextParent" />
            <h3>Redux Version</h3>
            <SliceOneConsumer />
            <SliceTwoConsumer />
            <SliceThreeConsumer />
            <CombinedValueConsumer />
            <TextForm />
        </Box>

    );
};

export default ReduxParent;
