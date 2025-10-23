// Generate Snippet
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

// Remove START
export const explanation = "This redux slice abstracts the state management logic out of the components. The components can subscribe to the state that they use and be unaffected by other pieces of state. Note that calculated selectors will run on every state change for the slice but the components using them will only re-render if the result is different. This can be prevented by using createSelector to only run the calculation again if any of the 'input selectors' returns a different result.";
// Remove END
interface MemoizedComponentsState {
    count1: number;
    multiplier: number;
    unrelatedState: string;
}

const initialState: MemoizedComponentsState = {
    count1: 0,
    multiplier: 1,
    unrelatedState: '',
};

const memoizedComponentsSlice = createSlice({
    name: 'memoizedComponents',
    initialState,
    reducers: {
        incrementCount1: (state) => {
            state.count1 += 1;
        },
        setMultiplier: (state, action: PayloadAction<number>) => {
            state.multiplier = action.payload;
        },
        setUnrelatedState: (state, action: PayloadAction<string>) => {
            state.unrelatedState = action.payload;
        },
    },
});

export const {
    incrementCount1,
    setMultiplier,
    setUnrelatedState
} = memoizedComponentsSlice.actions;

export const selectCount1 = (state: RootState) => state.memoizedComponents.count1;
export const selectMultiplier = (state: RootState) => state.memoizedComponents.multiplier;
export const selectUnrelatedState = (state: RootState) => state.memoizedComponents.unrelatedState;

export const selectExpensiveValueBad = (state: RootState) => {
    console.log('❌Computing expensive value (from Redux)...');
    return state.memoizedComponents.multiplier * 1000;
}

export const selectExpensiveValue = createSelector([
    selectMultiplier
], (multiplier) => {
    console.log('✅ Computing expensive value (from Redux)...');
    return multiplier * 1000;
});

export default memoizedComponentsSlice.reducer;