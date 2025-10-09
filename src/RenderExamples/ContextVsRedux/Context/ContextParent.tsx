import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import { ContextOneProvider, useAppContextOne } from './ContextOne';
import { ContextTwoProvider, useAppContextTwo } from './ContextTwo';
import { ContextThreeProvider, useAppContextThree } from './ContextThree';
import TextForm from './TextForm';

// const 
const ContextOneConsumer = () => {
    const { textVal, lastUpdated } = useAppContextOne();
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
                Context One Consumer
            </Typography>
            <Typography>Value: {textVal}</Typography>
            <Typography>Updated: {lastUpdated}</Typography>
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
                Context Two Consumer
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
                Context Three Consumer
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
            <RenderCount componentName="CombinedValueConsumer" />
            <Typography variant="body2" sx={{ color: '#9c27b0', fontWeight: 'bold' }}>
                Combined Value Consumer
            </Typography>
            <Typography>Combined Value: {combinedTextValThree}</Typography>
        </Box>
    )
}

const ContextParent: React.FC = () => {
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
                </ContextThreeProvider>
            </ContextTwoProvider>
        </ContextOneProvider>
    );
};

export default ContextParent;
