// Generate Snippet
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store/store'

// Remove START
export const explanation = "Place holder";
// Remove END

interface ThreeState {
    textVal: string;
}

// Define the initial state using that type
const initialState: ThreeState = {
    textVal: 'SliceThree',
}

export const threeSlice = createSlice({
    name: 'three',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setTextValThree: (state, action: PayloadAction<string>) => {
            state.textVal = action.payload;
        },
    }
})

export const { setTextValThree } = threeSlice.actions;

export const selectTextValThree = (state: RootState) => state.reduxVsContext.three.textVal;

export const selectCombinedTextValThree = (state: RootState) => {
    return `${state.reduxVsContext.one.textVal}-${state.reduxVsContext.two.textVal}-${state.reduxVsContext.three.textVal}`
}

export default threeSlice.reducer;