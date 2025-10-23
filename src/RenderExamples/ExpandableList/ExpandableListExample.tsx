// Generate Snippet
import React, { useState, useCallback } from 'react';
import { Box, Typography, Container } from '@mui/material';
// Remove START
import RenderCount from '../../overall/RenderCount';
import * as snippetExplanations from './snippets/explanations';
import listDataSnippet from './snippets/listData.snippet';
import expandableListExampleSnippet from './snippets/expandableListExample.snippet';
import listItemSnippet from './snippets/components/listItem.snippet';
import CodeViewer from 'overall/CodeViewer';
import ObservationGuide from './ObservationGuide';
// Remove END
import ListItem from './components/ListItem';
import { listData } from './listData';
import styles from 'MemoizedComponents.module.scss';

// Remove START
export const explanation = "The parent component that handles rendering the list items and tracking the expanded item index.";
// Remove END

const ExpandableListExample: React.FC = () => {
    const [expandedIndexRegular, setExpandedIndexRegular] = useState<number | null>(null);

    const handleToggleRegular = useCallback((index: number) => {
        setExpandedIndexRegular(prev => prev === index ? null : index);
    }, []);

    return (
        <Container maxWidth="lg">
            {/* Remove START */}
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

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" gutterBottom className={`${styles.title} ${styles.titleRed}`}>
                        List Items
                    </Typography>
                    <Typography variant="body2" paragraph className={styles.infoText}>
                        🔄 These re-render every time we expand / collapse a list item.
                    </Typography>
                    {/* Remove END */}
                    <Box>
                        {listData.map((item, index) => (
                            <ListItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                isExpanded={expandedIndexRegular === index}
                                onToggle={() => handleToggleRegular(index)}
                            />
                        ))}
                    </Box>
                    {/* Remove START */}
                </Box>


                <ObservationGuide />
                <br/>
                <CodeViewer
                    title="listData.ts"
                    code={listDataSnippet}
                    explanation={snippetExplanations.listDataExplanation}
                />

                <CodeViewer
                    title="Parent Component"
                    code={expandableListExampleSnippet}
                    explanation={snippetExplanations.expandableListExampleExplanation}
                />

                <CodeViewer
                    title="List Item Component"
                    code={listItemSnippet}
                    explanation={snippetExplanations.listItemExplanation}
                />

            </Box>
            {/* Remove END */}
        </Container>
    );
};

export default ExpandableListExample;
