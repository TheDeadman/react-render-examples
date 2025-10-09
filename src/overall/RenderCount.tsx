import { useEffect, useRef } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import NumberInput from './NumberInput';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectComponentDelay, setComponentDelay } from './renderCountSlice';

const blockMainThread = (ms: number) => {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // Busy-waiting, blocking the thread
    }
};

const RenderCount = ({ componentName = 'Component' }) => {
    const dispatch = useAppDispatch();
    const delay = useAppSelector(selectComponentDelay(componentName))
    const renderCount = useRef(1);
    const delayRef = useRef(delay);
    // const delayTest = useRef(false);

    let shouldBlockThread = true;
    // if (delayTest.current === true) {
    //     shouldBlockThread = false;
    //     delayTest.current = false;
    // }
    if (delayRef.current !== delay) {
        shouldBlockThread = false;
        // delayTest.current = true;
        delayRef.current = delay;
    }

    // console.log("should block thread 1: ", shouldBlockThread)
    // useEffect(() => {
    //     console.log("DELAY CHANGED")
    //     shouldBlockThread = false;
    // }, [delay])

    // console.log("should block thread 2: ", shouldBlockThread)

    useEffect(() => {
        dispatch(setComponentDelay({ componentName, delay }))
        // Disable eslint line as we only want this to run once
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (shouldBlockThread) {
        // console.log("WILL BLOCK!")
        blockMainThread(delay);
    }
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    return (
        <Box 
            sx={{ 
                border: '1px solid #666',
                borderRadius: 1,
                p: 1,
                mt: 1,
                mb: 1,
                backgroundColor: '#2a2a2a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 1

            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Chip 
                    label={componentName}
                    size="small"
                    sx={{ 
                        backgroundColor: '#4a4a72',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.7rem'
                    }}
                />
                <Typography variant="body2" sx={{ color: '#fff', fontSize: '0.8rem' }}>
                    Renders: {renderCount.current}
                </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body2" sx={{ color: '#ccc', fontSize: '0.75rem' }}>
                    Delay (ms):
                </Typography>
                <NumberInput 
                    aria-label="Render Count Number Input" 
                    placeholder='0' 
                    value={delay} 
                    onChange={(event, val) => {
                        if (val !== null) {
                            dispatch(setComponentDelay({ componentName, delay: val }));
                        }
                    }} 
                />
            </Box>
        </Box>
    );
};

export default RenderCount;
