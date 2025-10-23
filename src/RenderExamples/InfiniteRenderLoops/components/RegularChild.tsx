// Generate Snippet
import { useRef, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import styles from 'MemoizedComponents.module.scss';
import { useInfiniteLoopContext } from '../context';
// Remove START
import RenderCount from '../../../overall/RenderCount';

export const explanation = "A child component that is NOT memoized and uses a non-memoized function in a useEffect, causing infinite renders.";
// Remove END

const RegularChild = () => {
    const MAX_LOOPS = 25;
    const loopsRef = useRef(0);
    const { count, handleSetLastUpdated } = useInfiniteLoopContext();

    useEffect(() => {
        // Limit infinite loop for demo purposes
        if (loopsRef.current >= MAX_LOOPS || count === 0) {
            return;
        }
        loopsRef.current += 1;

        handleSetLastUpdated();
    }, [count, handleSetLastUpdated]);

    return (
        <Paper

            // Remove START
            className={`${styles.card} ${styles.cardRed}`}
        // Remove END
        >
            {/* Remove START */}
            <RenderCount componentName="RegularChild" />
            {/* Remove END */}
            <Typography

                // Remove START
                variant="h6" className={`${styles.title} ${styles.titleRed}`}
            // Remove END
            >
                Infinite Loop Culprit Component
            </Typography>
            <Typography

                // Remove START
                variant="body2" className={styles.infoText}
            // Remove END
            >
                ❌ Uses a non-memoized function in a useEffect causing infinite renders.
            </Typography>
        </Paper>
    );
};

export default RegularChild;