import { useEffect, useRef } from 'react';
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
        <div style={{ border: 'thin solid white', margin: 5, padding: 5, background: '#4a4a72', display: 'flex' }}>
            {componentName} Render Count: {renderCount.current}
            &nbsp; &nbsp; &nbsp;
            <div style={{ display: 'flex' }}>

                <div>
                    Render Delay MS:
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
