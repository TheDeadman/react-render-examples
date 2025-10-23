// Generate Snippet
import { Paper, Typography, Button } from '@mui/material';
import { useMemoizedComponentsContext } from '../context';
import styles from 'MemoizedComponents.module.scss';
// Remove START
import RenderCount from '../../../overall/RenderCount';

export const explanation = "This component behaves the same as the props version - it re-renders on every context change because it's not wrapped in React.memo(). The difference is that it gets data from context instead of props.";
// Remove END

const RegularChildContext = () => {
    const { count1, handleIncrement1Bad, expensiveValue } = useMemoizedComponentsContext();

    return (
        <Paper className={`${styles.card} ${styles.cardRed}`}>
            <RenderCount componentName="RegularChildContext" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleRed}`}>
                Regular Child Component (Context)
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🔄 Always re-renders (no React.memo)
            </Typography>
            <Typography>Value: {count1}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={handleIncrement1Bad} 
                variant="contained" 
                className={`${styles.button} ${styles.buttonRed}`}
            >
                Increment
            </Button>
        </Paper>
    );
};

export default RegularChildContext;