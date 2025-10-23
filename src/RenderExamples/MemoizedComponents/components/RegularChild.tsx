// Generate Snippet
import { Paper, Typography, Button } from '@mui/material';
import styles from 'MemoizedComponents.module.scss';
// Remove START
import RenderCount from '../../../overall/RenderCount';

export const explanation = "This component re-renders every time the parent re-renders because it's NOT wrapped in React.memo(). Without memo, React always re-renders child components when the parent re-renders, regardless of whether props have changed.";
// Remove END

interface RegularChildProps {
    value: number;
    onIncrement: () => void;
    expensiveValue: number;
}

const RegularChild: React.FC<RegularChildProps> = ({ 
    value, 
    onIncrement, 
    expensiveValue 
}) => {
    return (
        <Paper className={`${styles.card} ${styles.cardRed}`}>
            <RenderCount componentName="RegularChild" />
            <Typography variant="h6" className={`${styles.title} ${styles.titleRed}`}>
                Regular Child Component
            </Typography>
            <Typography variant="body2" className={styles.infoText}>
                🔄 Always re-renders (no React.memo)
            </Typography>
            <Typography>Value: {value}</Typography>
            <Typography>Expensive Value: {expensiveValue}</Typography>
            <Button 
                onClick={onIncrement} 
                variant="contained" 
                className={`${styles.button} ${styles.buttonRed}`}
            >
                Increment
            </Button>
        </Paper>
    );
};

export default RegularChild;