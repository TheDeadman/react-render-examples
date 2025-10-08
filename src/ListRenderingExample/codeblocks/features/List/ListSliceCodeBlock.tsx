import { CopyBlock } from 'react-code-blocks';

const codeText = `
// listSlice.tsx
import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store/store'

export type ListItem = { title: string; description: string }

// Define a type for the slice state
interface ListState {
    title: string;
    description: string;
    listItems: ListItem[];
    titleError: string;
    listError: string;
}

// Define the initial state using that type
const initialState: ListState = {
    title: '',
    description: '',
    listItems: [],
    titleError: '',
    listError: '',
}

export const formSlice = createSlice({
    name: 'list',
    // \`createSlice\` will infer the state type from the \`initialState\` argument
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;

            // Validate title / description and ensure state.title exists
            if (state.title === state.description && state.title) {
                state.titleError = 'Title and Description cannot match';
            } else {
                state.titleError = '';
            }

            if (state.listItems.some(item => item.title === state.title)) {
                state.listError = 'The title must be unique among list items'
            } else {
                state.listError = ''
            }
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;

            // Validate title / description
            if (state.title === state.description) {
                state.titleError = 'Title and Description cannot match';
            } else {
                state.titleError = '';
            }
        },
        addListItem: (state, action: PayloadAction<ListItem>) => {
            const listItem = action.payload;
            state.listItems.push(listItem);
            state.title = "";
            state.description = "";
        }
    }
})

export const { setTitle, setDescription, addListItem } = formSlice.actions

// Other code such as selectors can use the imported \`RootState\` type
export const selectTitle = (state: RootState) => state.list.title;
export const selectDescription = (state: RootState) => state.list.description;
export const selectListItems = (state: RootState) => state.list.listItems;
export const selectTitleError = (state: RootState) => state.list.titleError;
export const selectListError = (state: RootState) => state.list.listError;
export const selectError = (state: RootState) => state.list.listError || state.list.titleError;

// Extra to support memoization
export const selectHasTitleAndDescription = (state: RootState) => {
    if (!state.list.title || !state.list.description) {
        return false;
    }
    return true;
}

// Memoized selector. If there was a selector with heavy logic, you can memoize around it to prevent the long running logic from repeatedly happening 
export const selectIsAddButtonDisabled = createSelector([
    selectHasTitleAndDescription,
    selectTitleError,
    selectListError
],
    (hasTitleAndDescription, titleError, listError) => {
        // blockMainThread(1000);
        if (!hasTitleAndDescription || titleError || listError) {
            return true;
        }
        return false;
    })

export default formSlice.reducer
`

function ListSliceCodeBlock() {
  return (
    <CopyBlock
      text={codeText}
      language={'typescript'}
      theme={{mode: 'dark', backgroundColor: '#121212'}}
      showLineNumbers={true}
    />
  );
}

export default ListSliceCodeBlock;
