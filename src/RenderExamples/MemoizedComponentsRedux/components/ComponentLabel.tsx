import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from 'MemoizedComponents.module.scss';

interface ComponentLabelProps {
    color: string;
    children: React.ReactNode;
}

const colorClassMap: Record<string, string> = {
    '#f44336': styles.labelRed,
    '#ffb74d': styles.labelOrange,
    '#66bb6a': styles.labelGreen,
    '#ba68c8': styles.labelPurple,
    '#42a5f5': styles.labelBlue
};

const ComponentLabel: React.FC<ComponentLabelProps> = ({ color, children }) => {
    const labelColorClass = colorClassMap[color] ?? '';
    return (
        <Box className={styles.componentLabelWrapper}>
            <Typography 
                variant="caption" 
                className={`${styles.label} ${labelColorClass}`.trim()}
            >
                CHILD COMPONENT
            </Typography>
            {children}
        </Box>
    );
};

export default ComponentLabel;