import { CopyBlock } from 'react-code-blocks';

const codeText = `
// ListSummary.tsx
import { Box, Paper, Table, TableHead, TableRow, TableBody, TableCell, Typography } from "@mui/material";
import RenderCount from "overall/RenderCount";
import { useAppSelector } from "store/hooks";
import { selectListItems } from "ReduxToolkitApp/features/List/listSlice";

const ListSummary = () => {
    const listItems = useAppSelector(selectListItems);
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ marginBottom: 4 }}>
            <RenderCount componentName="ListSummary" />
            <Typography variant="h6">List Items</Typography>
            {listItems.length > 0 ? (
                <Paper sx={{ padding: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listItems.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            ) : (
                <Typography>No items in the list.</Typography>
            )}
        </Box>
    )
}

export default ListSummary;
`
function ListSummaryCodeBlock() {
  return (
    <CopyBlock
      text={codeText}
      language={'jsx'}
      theme={{mode: 'dark', backgroundColor: '#121212'}}
      showLineNumbers={true}
    />
  );
}

export default ListSummaryCodeBlock;