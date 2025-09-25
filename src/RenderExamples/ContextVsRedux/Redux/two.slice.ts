import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store/store'

// Define a type for the slice state
interface TwoState {
    textVal: string;
}

// Define the initial state using that type
const initialState: TwoState = {
    textVal: 'SliceTwo',
}

export const twoSlice = createSlice({
    name: 'two',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setTextValTwo: (state, action: PayloadAction<string>) => {
            state.textVal = action.payload;
        },
    }
})

export const { setTextValTwo } = twoSlice.actions;

export const selectTextValTwo = (state: RootState) => state.reduxVsContext.two.textVal;

export const selectCombinedTextValTwo = (state: RootState) => {
    return `${state.reduxVsContext.one.textVal}-${state.reduxVsContext.two.textVal}`
}

export default twoSlice.reducer;