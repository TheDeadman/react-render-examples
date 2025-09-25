import React from 'react';
import { Box } from '@mui/material';
import RenderCount from 'overall/RenderCount';
import { ContextOneProvider, useAppContextOne } from './ContextOne';
import { ContextTwoProvider, useAppContextTwo } from './ContextTwo';
import { ContextThreeProvider, useAppContextThree } from './ContextThree';
import TextForm from './TextForm';

// const 
const ContextOneConsumer = () => {
    const { textVal } = useAppContextOne();
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName="ConsumerOne" />
            Context One: {textVal}
        </Box>
    )
}

const ContextTwoConsumer = () => {
    const { textValTwo } = useAppContextTwo();
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName="ConsumerTwo" />
            Context Two: {textValTwo}
        </Box>
    )
}

const ContextThreeConsumer = () => {
    const { textValThree } = useAppContextThree();
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName="ConsumerThree" />
            Context Three: {textValThree}
        </Box>
    )
}

const CombinedValueConsumer = () => {
    const { combinedTextValThree } = useAppContextThree();

        return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <RenderCount componentName="ConsumerThree" />
            Combined Value: {combinedTextValThree}
        </Box>
    )
}

const ContextParent: React.FC = () => {
    return (
        <ContextOneProvider>
            <ContextTwoProvider>
                <ContextThreeProvider>
                    <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
                        <RenderCount componentName="ContextParent" />
                        <h3>Context Version</h3>
                        <ContextOneConsumer />
                        <ContextTwoConsumer />
                        <ContextThreeConsumer />
                        <CombinedValueConsumer />
                        <TextForm />
                    </Box>
                </ContextThreeProvider>
            </ContextTwoProvider>
        </ContextOneProvider >

    );
};

export default ContextParent;
