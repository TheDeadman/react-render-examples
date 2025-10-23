import { Box, Typography } from '@mui/material';
import styles from 'MemoizedComponents.module.scss';

const ColorLegend = () => {
    return (
        <Box className={styles.legend}>
            <Typography variant="subtitle2" className={styles.legendTitle}>
                Component Types:
            </Typography>
            <Box className={styles.legendItem}>
                <Box className={`${styles.legendSwatch} ${styles.legendSwatchRed}`} />
                <Typography variant="caption">No Optimization</Typography>
            </Box>
            <Box className={styles.legendItem}>
                <Box className={`${styles.legendSwatch} ${styles.legendSwatchOrange}`} />
                <Typography variant="caption">React.memo + non memoized callback</Typography>
            </Box>
            <Box className={styles.legendItem}>
                <Box className={`${styles.legendSwatch} ${styles.legendSwatchGreen}`} />
                <Typography variant="caption">React.memo + stable callback</Typography>
            </Box>
            <Box className={styles.legendItem}>
                <Box className={`${styles.legendSwatch} ${styles.legendSwatchPurple}`} />
                <Typography variant="caption">useMemo example</Typography>
            </Box>
        </Box>
    );
};

export default ColorLegend;