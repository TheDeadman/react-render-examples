import React, { useState } from 'react';
import { Box, Button, Typography, Container, Grid } from '@mui/material';
import RenderCount from '../../overall/RenderCount';
import ContextParent from './Context/ContextParent';
import ReduxParent from './Redux/ReduxParent';

const ContextVsReduxRoot = () => {
    const [currentVersion, setCurrentVersion] = useState('context');
    
    return (
        <Container maxWidth="lg">
            <Box 
                sx={{ 
                    border: '3px solid #ff6f00',
                    borderRadius: 3,
                    p: 3,
                    mt: 2,
                    backgroundColor: '#121212',
                    position: 'relative'
                }}
            >
                {/* Example Label */}
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
                        fontSize: '0.875rem',
                        fontWeight: 'bold'
                    }}
                >
                    CONTEXT VS REDUX
                </Box>
                
                <RenderCount componentName="ContextVsReduxRoot" />
                <Box sx={{ mt: 2, mb: 4 }}>
                    <Typography variant="h4" gutterBottom sx={{ color: '#ff6f00' }}>
                        Context vs Redux Comparison
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Compare how Context and Redux handle multiple state slices and consumer rendering behavior.
                        Notice the differences in re-rendering patterns between the two approaches.
                    </Typography>
                    
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item>
                            <Button 
                                variant={currentVersion === 'context' ? 'contained' : 'outlined'}
                                onClick={() => setCurrentVersion('context')}
                                sx={{ 
                                    backgroundColor: currentVersion === 'context' ? '#9c27b0' : 'transparent',
                                    borderColor: '#9c27b0',
                                    color: currentVersion === 'context' ? 'white' : '#9c27b0',
                                    '&:hover': {
                                        backgroundColor: currentVersion === 'context' ? '#7b1fa2' : 'rgba(156, 39, 176, 0.1)'
                                    }
                                }}
                            >
                                Context Version
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button 
                                variant={currentVersion === 'redux' ? 'contained' : 'outlined'}
                                onClick={() => setCurrentVersion('redux')}
                                sx={{ 
                                    backgroundColor: currentVersion === 'redux' ? '#ff6f00' : 'transparent',
                                    borderColor: '#ff6f00',
                                    color: currentVersion === 'redux' ? 'white' : '#ff6f00',
                                    '&:hover': {
                                        backgroundColor: currentVersion === 'redux' ? '#f57f17' : 'rgba(255, 111, 0, 0.1)'
                                    }
                                }}
                            >
                                Redux Version
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                {currentVersion === 'context' && <ContextParent />}
                {currentVersion === 'redux' && <ReduxParent />}
            </Box>
        </Container>
    );
};

export default ContextVsReduxRoot;
