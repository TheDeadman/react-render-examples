// Generate Snippet
import { Paper, Typography, TextField, Box } from '@mui/material';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { selectMultiplier, selectUnrelatedState, setUnrelatedState, setMultiplier, selectCount1 } from '../memoizedComponents.slice';
import styles from 'MemoizedComponents.module.scss';
// Remove START
export const explanation = "This redux slice abstracts the state management logic out of the components. The components can subscribe to the state that they use and be unaffected by other pieces of state. Note that calculated selectors will run on every state change for the slice but the components using them will only re-render if the result is different. This can be prevented by using createSelector to only run the calculation again if any of the 'input selectors' returns a different result.";
// Remove END

const ParentControls = () => {
    const dispatch = useAppDispatch();
    const unrelatedState = useAppSelector(selectUnrelatedState);
    const multiplier = useAppSelector(selectMultiplier);
    const count1 = useAppSelector(selectCount1);

    return (
        <Paper className={`${styles.card} ${styles.cardBlue} ${styles.cardParent}`}>
            <Typography variant="h6" gutterBottom className={`${styles.title} ${styles.titleBlue}`}>
                🎛️ Redux State Controls
            </Typography>
            <Box className={styles.parentControls}>
                <TextField
                    label="Unrelated State (does not trigger memoized selectors)"
                    value={unrelatedState}
                    onChange={(e) => dispatch(setUnrelatedState(e.target.value))}
                    fullWidth
                    className={styles.textFieldBlue}
                />
                <TextField
                    label="Multiplier"
                    type="number"
                    value={multiplier}
                    onChange={(e) => dispatch(setMultiplier(Number(e.target.value)))}
                    fullWidth
                    className={styles.textFieldBlue}
                />
                <Typography className={styles.infoText}><strong>Count 1:</strong> {count1}</Typography>
            </Box>
        </Paper>
    );
};

export default ParentControls;