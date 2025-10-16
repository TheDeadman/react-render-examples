import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from 'MemoizedComponents.module.scss';

const ColorLegend: React.FC = () => {
    return (
        <Box className={styles.legend}>
            <Typography className={styles.legendTitle}>Component Types:</Typography>
            <Box className={styles.legendItem}>
                <Box className={`${styles.legendSwatch} ${styles.legendSwatchRed}`}></Box>
                <Typography variant="body2">Regular List Item (always re-renders)</Typography>
            </Box>
            <Box className={styles.legendItem}>
                <Box className={`${styles.legendSwatch} ${styles.legendSwatchGreen}`}></Box>
                <Typography variant="body2">Memoized List Item (skips re-renders)</Typography>
            </Box>
            <Box className={styles.legendItem}>
                <Box className={`${styles.legendSwatch} ${styles.legendSwatchPurple}`}></Box>
                <Typography variant="body2">Optimized with useCallback</Typography>
            </Box>
        </Box>
    );
};

export default ColorLegend;
