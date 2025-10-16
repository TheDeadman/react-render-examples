import { useRef, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import styles from 'MemoizedComponents.module.scss';
import { useInfiniteLoopContext } from '../context';

const RegularChild = () => {
    const MAX_LOOPS = 25;
    const loopsRef = useRef(0);
    const { count, handleSetLastUpdated } = useInfiniteLoopContext();

    useEffect(() => {
        if (loopsRef.current >= MAX_LOOPS || count === 0) {
            return;
        }

            loopsRef.current += 1;
            handleSetLastUpdated();
    }, [count, handleSetLastUpdated]);

    return (
        <Paper className={`${styles.card} ${styles.cardRed}`}>
            <RenderCount componentName="RegularChild" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleRed}`}>
                Infinite Loop Culprit Component
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                ❌ Uses a non-memoized function in a useEffect causing infinite renders.
            </Typography>
        </Paper>
    );
};

export default RegularChild;