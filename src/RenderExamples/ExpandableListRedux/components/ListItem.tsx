import React from 'react';
import { Paper, Typography, Button, Collapse, Box } from '@mui/material';
import RenderCount from '../../../overall/RenderCount';
import styles from 'MemoizedComponents.module.scss';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { selectIsExpanded, setExpandedId } from '../expandableList.slice';

interface ListItemProps {
    id: number;
    title: string;
    description: string;
}

const ListItem: React.FC<ListItemProps> = ({ id, title, description }) => {
    const dispatch = useAppDispatch();
    const isExpanded = useAppSelector(selectIsExpanded(id));
    const onToggle = () => {
        dispatch(setExpandedId(id));
        // Dispatch action to toggle expansion state
        // This is just a placeholder; actual dispatch logic will depend on your setup
        console.log(`Toggling item with id: ${id}`);
    }
    return (
        <Paper className={`${styles.card} ${styles.cardRed}`} sx={{ m: 0, mb: 0 }}>
            <RenderCount componentName={`ListItem-${id}`} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" className={`${styles.title} ${styles.titleRed}`}>
                    {title}
                </Typography>
                <Button 
                    onClick={onToggle}
                    sx={{ 
                        color: '#f44336',
                        minWidth: '40px',
                        fontSize: '1.2rem'
                    }}
                >
                    {isExpanded ? '▲' : '▼'}
                </Button>
            </Box>
            <Collapse in={isExpanded}>
                <Typography 
                    variant="body2" 
                    className={styles.infoText}
                    sx={{ mt: 2 }}
                >
                    {description}
                </Typography>
            </Collapse>
        </Paper>
    );
};

export default ListItem;
