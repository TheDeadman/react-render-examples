import { useEffect, useRef, useState } from 'react';
import NumberInput from './NumberInput';
import { useAppDispatch, useAppSelector } from 'store/hooks';
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

    useEffect(() => {
        dispatch(setComponentDelay({ componentName, delay }))
    }, [])

    blockMainThread(delay);
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    return (
        <div style={{ border: 'thin solid white', margin: 5, padding: 5, background: '#4a4a72', display: 'flex' }}>
            {componentName} Render Count: {renderCount.current}
            &nbsp; &nbsp; &nbsp;
            <div style={{ display: 'flex' }}>

                <div>
                    Delay:
                </div>
                <NumberInput aria-label="Render Count Number Input" placeholder='...type a number' value={delay} onChange={(event, val) => {
                    if (val) {
                        dispatch(setComponentDelay({ componentName, delay: val }));
                    }
                }} />
            </div>
        </div>
    );
};

export default RenderCount;
