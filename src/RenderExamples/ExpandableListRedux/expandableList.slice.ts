import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store/store'
import { listData } from './listData';
import { renderCountSlice } from 'overall/renderCountSlice';

interface RenderCountState {
    listData: { id: number; title: string; description: string }[];
    expandedId: number | null;
}

// Define the initial state using that type
const initialState: RenderCountState = {
    listData: listData,
    expandedId: null,
}

export const expandedListSlice = createSlice({
    name: 'expandedList',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setExpandedId: (state, action: PayloadAction<number | null>) => {
            if (state.expandedId === action.payload) {
                state.expandedId = null; // Collapse if the same item is clicked
            } else {
                state.expandedId = action.payload;
            }
        }
    },

})

export const { setExpandedId } = expandedListSlice.actions

// export const selectExpandedId = (state: RootState) => state.expandedList.expandedId

export const selectIsExpanded = (id: number) => (state: RootState) => state.expandedList.expandedId === id
export const selectListData = (state: RootState) => state.expandedList.listData

export default expandedListSlice.reducer