import React, { useState } from 'react';
import { Box, Button, Typography, Container, Grid } from '@mui/material';
import RenderCount from '../../overall/RenderCount';
import UseEffectParent from './useEffect/UseEffectParent';
import UseMemoParent from './useMemo/UseMemoParent';

const UseEffectVsMemoRoot = () => {
    const [currentVersion, setCurrentVersion] = useState('useEffect');
    
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
                    USEEFFECT VS USEMEMO
                </Box>
                
                <RenderCount componentName="UseEffectVsMemoRoot" />
                <Box sx={{ mt: 2, mb: 4 }}>
                    <Typography variant="h4" gutterBottom sx={{ color: '#ff6f00' }}>
                        useEffect vs useMemo Comparison
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Compare how useEffect and useMemo handle side effects and memoization patterns.
                        Notice the differences in when computations and effects are triggered.
                    </Typography>
                    
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item>
                            <Button 
                                variant={currentVersion === 'useEffect' ? 'contained' : 'outlined'}
                                onClick={() => setCurrentVersion('useEffect')}
                                sx={{ 
                                    backgroundColor: currentVersion === 'useEffect' ? '#9c27b0' : 'transparent',
                                    borderColor: '#9c27b0',
                                    color: currentVersion === 'useEffect' ? 'white' : '#9c27b0',
                                    '&:hover': {
                                        backgroundColor: currentVersion === 'useEffect' ? '#7b1fa2' : 'rgba(156, 39, 176, 0.1)'
                                    }
                                }}
                            >
                                useEffect Version
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button 
                                variant={currentVersion === 'useMemo' ? 'contained' : 'outlined'}
                                onClick={() => setCurrentVersion('useMemo')}
                                sx={{ 
                                    backgroundColor: currentVersion === 'useMemo' ? '#ff6f00' : 'transparent',
                                    borderColor: '#ff6f00',
                                    color: currentVersion === 'useMemo' ? 'white' : '#ff6f00',
                                    '&:hover': {
                                        backgroundColor: currentVersion === 'useMemo' ? '#f57f17' : 'rgba(255, 111, 0, 0.1)'
                                    }
                                }}
                            >
                                useMemo Version
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                {currentVersion === 'useEffect' && <UseEffectParent />}
                {currentVersion === 'useMemo' && <UseMemoParent />}
            </Box>
        </Container>
    );
};

export default UseEffectVsMemoRoot;
