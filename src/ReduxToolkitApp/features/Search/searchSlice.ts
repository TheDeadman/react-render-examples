import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import type { RootState } from 'store/store'

export const searchByText = createAsyncThunk('search/searchByText', async (undefined, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const searchTerm = selectSearchTerm(state);

    const response = await axios.get<string[]>(`http://localhost:3001/search`, {
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
    // `createSlice` will infer the state type from the `initialState` argument
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

const blockMainThread = (ms: number) => {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // Busy-waiting, blocking the thread
    }
};

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value


// To simulate a slow select, uncomment the block main thread. Check the commented code lower for a possible solution.
// export const selectIsAddButtonDisabled = (state: RootState) => {
//     const { title, description, titleError, listError } = state.list;

//     // blockMainThread(1000);
//     if (!title || !description || titleError || listError) {
//         return true;
//     }
//     return false;
// }

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

// // // ADVANCED EXAMPLE
// // // We want to include the existing selected option in the dropdown even if it is not part of the result set.
// // // In this initial example, the selector works great in most conditions.
// // // However, if we do need to include the current selected item in the result set, then we will be creating a new array every time state changes and causing unnecessary re-renders.
// export const selectSearchDropdownOptions = (state: RootState) => {
//     const { searchResults, selectedItem } = state.search;

//     let searchDropdownOptions = searchResults;

//     let shouldIncludeSelectedResult = true;
//     if (searchResults.some(result => result === selectedItem) || !selectedItem) {
//         shouldIncludeSelectedResult = false;
//     }

//     if (shouldIncludeSelectedResult) {
//         searchDropdownOptions = [selectedItem, ...searchResults]
//     }

//     return searchDropdownOptions;
// }


// // // To resolve the issue, we will memoize before our conditional.
// // // This first selector didn't exist yet so we create it for the memoized selector to use.
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