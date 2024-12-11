import { Button, TextField, Typography } from '@mui/material';
import RenderCount from 'overall/RenderCount';

interface ListFormProps {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    handleAddItem: () => void;
    error: string;
}
const ListForm = ({ title, setTitle, description, setDescription, handleAddItem, error }: ListFormProps) => {


    return (
        <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
            <RenderCount componentName='ListForm' />
            <TextField
                label="Title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <TextField
                label="Description"
                variant="outlined"
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <Button
                variant="contained"
                onClick={handleAddItem}
                sx={{ marginBottom: 2 }}
                disabled={!title || !description}
            >
                Add to List
            </Button>
            <Typography color="error" sx={{ marginBottom: 2 }}>{error}&nbsp;</Typography>

        </div>
    )
}

export default ListForm;