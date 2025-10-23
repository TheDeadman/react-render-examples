// Generate Snippet
import { Paper, Typography, Button, Box } from '@mui/material';
import styles from 'MemoizedComponents.module.scss';
import { useInfiniteLoopContext } from '../context';
// Remove START
export const explanation = "Component that calls the handleIncrement function from the context.";
// Remove END

const ParentControls = () => {
    const { handleIncrement } = useInfiniteLoopContext();
    return (
        <Paper
            // Remove START
            className={`${styles.card} ${styles.cardBlue} ${styles.cardParent}`}
        // Remove END
        >
            {/* Remove START */}
            <Typography variant="h6" gutterBottom className={`${styles.title} ${styles.titleBlue}`}>
                🎛️ Parent State Controls
            </Typography>
            <Box className={styles.parentControls}>
                {/* Remove END */}
                <Button
                    onClick={handleIncrement}

                    // Remove START
                    variant="contained"
                    className={`${styles.button} ${styles.buttonGreen}`}
                // Remove END
                >
                    Increment
                </Button>
                {/* Remove START */}
            </Box>
            {/* Remove END */}
        </Paper>
    );
};

export default ParentControls;