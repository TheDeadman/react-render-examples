import { Box, Paper, Table, TableHead, TableRow, TableBody, TableCell, Typography } from "@mui/material";
import RenderCount from "overall/RenderCount";
import { ListItem } from "useStateApp/UseStateApp";

interface ListSummaryProps {
    list: ListItem[]
}

const ListSummary = ({ list }: ListSummaryProps) => {
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ marginBottom: 4 }}>
            <RenderCount componentName="ListSummary" />
            <Typography variant="h6">List Items</Typography>
            {list.length > 0 ? (
                <Paper sx={{ padding: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list.map((item, index) => (
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