import { CopyBlock } from 'react-code-blocks';

const codeText = `
// ListForm.tsx
import { Button, TextField, Typography } from '@mui/material';
import RenderCount from 'overall/RenderCount';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { addListItem, selectDescription, selectError, selectIsAddButtonDisabled, selectTitle, setDescription, setTitle } from './listSlice';

const ListForm = () => {
    const dispatch = useAppDispatch();
    const title = useAppSelector(selectTitle);
    const description = useAppSelector(selectDescription);
    const error = useAppSelector(selectError);
    const isAddButtonDisabled = useAppSelector(selectIsAddButtonDisabled);

    return (
        <div style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }}>
            <RenderCount componentName='ListForm' />
            <TextField
                label="Title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => dispatch(setTitle(e.target.value))}
                sx={{ marginBottom: 2 }}
            />
            <TextField
                label="Description"
                variant="outlined"
                fullWidth
                value={description}
                onChange={(e) => dispatch(setDescription(e.target.value))}
                sx={{ marginBottom: 2 }}
            />
            <Button
                variant="contained"
                onClick={() => dispatch(addListItem({ title, description }))}
                sx={{ marginBottom: 2 }}
                disabled={isAddButtonDisabled}
            >
                Add to List
            </Button>

            <Typography color="error" sx={{ marginBottom: 2 }}>{error}&nbsp;</Typography>
        </div>
    )
}

export default ListForm;
`

function ListFormCodeBlock() {
  return (
    <CopyBlock
      text={codeText}
      language={'jsx'}
      theme={{mode: 'dark', backgroundColor: '#121212'}}
      showLineNumbers={true}
    />
  );
}

export default ListFormCodeBlock;