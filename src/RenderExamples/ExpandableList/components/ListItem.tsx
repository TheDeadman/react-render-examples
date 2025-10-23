// Generate Snippet
import React from 'react';
import { Paper, Typography, Button, Collapse, Box } from '@mui/material';
import styles from 'MemoizedComponents.module.scss';
// Remove START
import RenderCount from '../../../overall/RenderCount';

export const explanation = "Individual list item that is NOT memoized.";
// Remove END

interface ListItemProps {
    id: number;
    title: string;
    description: string;
    isExpanded: boolean;
    onToggle: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ id, title, description, isExpanded, onToggle }) => {
    return (
        <Paper
            // Remove START
        className={`${styles.card} ${styles.cardRed}`} sx={{ m: 0, mb: 0 }}
            // Remove END
        >
            {/* Remove START */}
            <RenderCount componentName={`ListItem-${id}`} />
            {/* Remove END */}
            <Box
                // Remove START
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            // Remove END
            >
                <Typography
                    // Remove START
                    variant="h6" className={`${styles.title} ${styles.titleRed}`}
                // Remove END
                >
                    {title}
                </Typography>
                <Button
                    // Remove START
                    onClick={onToggle}
                    sx={{
                        color: '#f44336',
                        minWidth: '40px',
                        fontSize: '1.2rem'
                    }}
                // Remove END
                >
                    {isExpanded ? '▲' : '▼'}
                </Button>
            </Box>
            <Collapse in={isExpanded}>
                <Typography
                    // Remove START
                    variant="body2"
                    className={styles.infoText}
                    sx={{ mt: 2 }}
                // Remove END
                >
                    {description}
                </Typography>
            </Collapse>
        </Paper>
    );
};

export default ListItem;
