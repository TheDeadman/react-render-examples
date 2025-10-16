import React, { useState, useCallback } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import RenderCount from '../../overall/RenderCount';
import ListItem from './components/ListItem';
import { listData } from './listData';
import styles from 'MemoizedComponents.module.scss';

const ExpandableListExample: React.FC = () => {
    const [expandedIndexRegular, setExpandedIndexRegular] = useState<number | null>(null);

    const handleToggleRegular = useCallback((index: number) => {
        setExpandedIndexRegular(prev => prev === index ? null : index);
    }, []);

    return (
        <Container maxWidth="lg">
            <Box className={styles.examplePanel}>
                <Box className={styles.parentLabel}>
                    EXPANDABLE LIST EXAMPLE
                </Box>
                
                <RenderCount componentName="ExpandableListExample" />
                
                <Box className={styles.headerSection}>
                    <Typography variant="h4" gutterBottom className={styles.headerTitle}>
                        Expandable List
                    </Typography>
                    <Typography variant="body1" paragraph className={styles.headerDescription}>
                        This example shows an expandable/collapsible list and the difficulties of doing 
                        something as simple as prevent list item re-renders when expanding / collapsing the items.
                    </Typography>
                    
                    {/* <ColorLegend /> */}
                </Box>

                {/* <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <ListControls
                            filterText={filterText}
                            onFilterChange={setFilterText}
                            itemCount={listData.length}
                            lastClickedId={lastClickedId}
                        />
                    </Grid>
                </Grid> */}

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" gutterBottom className={`${styles.title} ${styles.titleRed}`}>
                        List Items
                    </Typography>
                    <Typography variant="body2" paragraph className={styles.infoText}>
                        🔄 These re-render every time we expand / collapse a list item.
                    </Typography>
                    <Box>
                        {listData.map((item, index) => (
                            <ListItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                expanded={expandedIndexRegular === index}
                                onToggle={() => handleToggleRegular(index)}
                            />
                        ))}
                    </Box>
                </Box>
{/* 
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" gutterBottom className={`${styles.title} ${styles.titleGreen}`}>
                        Memoized List Items (React.memo)
                    </Typography>
                    <Typography variant="body2" paragraph className={styles.infoText}>
                        ✅ These skip re-renders when props don't change
                    </Typography>
                    <Box>
                        {listData.map((item, index) => (
                            <MemoizedListItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                expanded={expandedIndexMemoized === index}
                                onToggle={() => handleToggleMemoized(index)}
                            />
                        ))}
                    </Box>
                </Box> */}

                {/* <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" gutterBottom className={`${styles.title} ${styles.titlePurple}`}>
                        Optimized with useCallback
                    </Typography>
                    <Typography variant="body2" paragraph className={styles.infoText}>
                        ⚡ Memoized with stable callback reference
                    </Typography>
                    <Box>
                        {listData.map((item, index) => (
                            <OptimizedListItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                expanded={expandedIndexOptimized === index}
                                onToggle={() => handleToggleOptimized(index)}
                                onItemClick={handleItemClick}
                            />
                        ))}
                    </Box>
                </Box> */}

                <Box sx={{ mt: 6, p: 3, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
                    <Typography variant="h6" gutterBottom className={styles.headerTitle}>
                        📝 Observations
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Click on an item to expand / collapse it. Notice how all items re-render even though we are only changing the state of one (or two) items.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default ExpandableListExample;
