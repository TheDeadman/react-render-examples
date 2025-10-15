import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { ContextOneProvider, useAppContextOne } from './ContextOne';
import { ContextTwoProvider, useAppContextTwo } from './ContextTwo';
import { ContextThreeProvider, useAppContextThree } from './ContextThree';
import TextForm from './TextForm';

// const 
const ContextOneConsumer = () => {
    const { textVal } = useAppContextOne();
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
            <RenderCount componentName="ConsumerOne" />
            <Typography variant="body2" sx={{ color: '#9c27b0', fontWeight: 'bold' }}>
                useEffect One Consumer
            </Typography>
            <Typography>Value: {textVal}</Typography>
        </Box>
    )
}

const ContextTwoConsumer = () => {
    const { textValTwo } = useAppContextTwo();
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
            <RenderCount componentName="ConsumerTwo" />
            <Typography variant="body2" sx={{ color: '#9c27b0', fontWeight: 'bold' }}>
                useEffect Two Consumer
            </Typography>
            <Typography>Value: {textValTwo}</Typography>
        </Box>
    )
}

const ContextThreeConsumer = () => {
    const { textValThree } = useAppContextThree();
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
            <RenderCount componentName="ConsumerThree" />
            <Typography variant="body2" sx={{ color: '#9c27b0', fontWeight: 'bold' }}>
                useEffect Three Consumer
            </Typography>
            <Typography>Value: {textValThree}</Typography>
        </Box>
    )
}

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
            <RenderCount componentName="ConsumerThree" />
            <Typography variant="body2" sx={{ color: '#9c27b0', fontWeight: 'bold' }}>
                useEffect Combined Value Consumer
            </Typography>
            <Typography>Value: {combinedTextValThree}</Typography>
        </Box>
    )
}

const UseEffectParent: React.FC = () => {
    return (
        <ContextOneProvider key="effect-version">
            <ContextTwoProvider key="effect-version">
                <ContextThreeProvider key="effect-version">
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
                </ContextThreeProvider>
            </ContextTwoProvider>
        </ContextOneProvider >
    );
};

export default UseEffectParent;
