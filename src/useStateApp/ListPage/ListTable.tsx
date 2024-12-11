import RenderCount from 'overall/RenderCount';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { ListItem } from 'useStateApp/UseStateApp';

interface ListTableProps {
    list: ListItem[]
}
const ListTable = ({ list }: ListTableProps) => {

    return (
        <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
            <RenderCount componentName='ListTable' />
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
        </div>
    )
}

export default ListTable;