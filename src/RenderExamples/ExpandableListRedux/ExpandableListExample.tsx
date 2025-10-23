// Generate Snippet
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useAppSelector } from 'store/hooks';
import { selectListData } from './expandableList.slice';
import ListItem from './components/ListItem';
import styles from 'MemoizedComponents.module.scss';
// Remove START
import * as snippetExplanations from './snippets/explanations';
import listDataSnippet from './snippets/listData.snippet';
import expandableListExampleSnippet from './snippets/expandableListExample.snippet';
import listItemSnippet from './snippets/components/listItem.snippet';
import expandableListSliceSnippet from './snippets/expandableList.slice.snippet';
import RenderCount from '../../overall/RenderCount';
import CodeViewer from 'overall/CodeViewer';
import ObservationGuide from './ObservationGuide';

export const explanation = "The parent component that handles rendering the list items. Does not need to know the index of the expanded item.";
// Remove END

const ExpandableListReduxExample: React.FC = () => {
    const listData = useAppSelector(selectListData)
    return (
        <Container maxWidth="lg">
            {/* Remove START */}
            <Box className={styles.examplePanel}>
                <Box className={styles.parentLabel}>
                    EXPANDABLE LIST REDUX EXAMPLE
                </Box>

                <RenderCount componentName="ExpandableListReduxExample" />

                <Box className={styles.headerSection}>
                    <Typography variant="h4" gutterBottom className={styles.headerTitle}>
                        Expandable List Redux
                    </Typography>
                    <Typography variant="body1" paragraph className={styles.headerDescription}>
                        This example shows an expandable/collapsible list and how redux can help isolate renders between list items with very little effort.
                    </Typography>
                </Box>


                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" gutterBottom className={`${styles.title} ${styles.titleRed}`}>
                        List Items
                    </Typography>
                    <Typography variant="body2" paragraph className={styles.infoText}>
                        ✅ These items only re-render when their own expansion state changes.
                    </Typography>
                        {/* Remove END */}
                    <Box>
                        {listData.map((item, index) => (
                            <ListItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </Box>
                {/* Remove START */}
                </Box>

                <ObservationGuide />
                <br />
                <CodeViewer
                    title="listData.ts"
                    code={listDataSnippet}
                    explanation={snippetExplanations.listDataExplanation}
                />

                <CodeViewer
                    title="Expandable List Slice"
                    code={expandableListSliceSnippet}
                    explanation={snippetExplanations.expandableList_sliceExplanation}
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

export default ExpandableListReduxExample;
