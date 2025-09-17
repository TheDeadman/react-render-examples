import { CopyBlock } from 'react-code-blocks';

const codeText = `
// searchSlice.ts
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import type { RootState } from 'store/store'
import { REST_URL } from 'variables';

export const searchByText = createAsyncThunk('search/searchByText', async (_undefined, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const searchTerm = selectSearchTerm(state);

    const response = await axios.get<string[]>(\`\${REST_URL}/search\`, {
        params: { query: searchTerm },
    });
    return response.data;

})

export type ListItem = { title: string; description: string }

// Define a type for the slice state
interface ListState {
    // title: ListItem['title'];
    searchTerm: string;
    searchResults: string[];
    selectedItem: string;
    hasSearched: boolean;
    isLoading: boolean;
    errorText: string;
}

// Define the initial state using that type
const initialState: ListState = {
    searchTerm: '',
    searchResults: [],
    selectedItem: '',
    hasSearched: false,
    isLoading: false,
    errorText: ''
}

export const searchSlice = createSlice({
    name: 'search',
    // \`createSlice\` will infer the state type from the \`initialState\` argument
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        setSelectedItem: (state, action: PayloadAction<string>) => {
            state.selectedItem = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(searchByText.pending, (state) => {
                state.isLoading = true;
                state.hasSearched = true;
                state.errorText = '';
            })
            .addCase(searchByText.rejected, (state) => {
                state.isLoading = false;
                state.errorText = 'Failed to fetch search results. Please try again.';
            })
            .addCase(searchByText.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errorText = '';
                state.searchResults = action.payload;
            })
    },
})

export const { setSearchTerm, setSelectedItem } = searchSlice.actions

export const selectSearchTerm = (state: RootState) => state.search.searchTerm;

export const selectSelectedItem = (state: RootState) => state.search.selectedItem;
export const selectIsSelectDisabled = (state: RootState) => {
    if (state.search.searchResults.length === 0) {
        return true;
    }
    return false;
}
export const selectIsLoading = (state: RootState) => state.search.isLoading;
export const selectErrorText = (state: RootState) => state.search.errorText;
export const selectIsNoResultsVisible = (state: RootState) => {
    const { hasSearched, searchResults, isLoading, errorText } = state.search;
    if (hasSearched && searchResults.length === 0 && !isLoading && !errorText) {
        return true;
    }
    return false;
}

// To resolve the issue, we will memoize before our conditional.
//This first selector didn't exist yet so we create it for the memoized selector to use.
const selectSearchResults = (state: RootState) => state.search.searchResults;
export const selectSearchDropdownOptions = createSelector([selectSearchResults, selectSelectedItem], (searchResults, selectedItem) => {
    let searchDropdownOptions = searchResults;

    let shouldIncludeSelectedResult = true;
    if (searchResults.some(result => result === selectedItem) || !selectedItem) {
        shouldIncludeSelectedResult = false;
    }

    if (shouldIncludeSelectedResult) {
        searchDropdownOptions = [selectedItem, ...searchResults]
    }

    return searchDropdownOptions;
});


export default searchSlice.reducer
`

function SearchSliceCodeBlock() {
  return (
    <CopyBlock
      text={codeText}
      language={'jsx'}
      theme={{mode: 'dark', backgroundColor: '#121212'}}
      showLineNumbers={true}
    />
  );
}

export default SearchSliceCodeBlock;