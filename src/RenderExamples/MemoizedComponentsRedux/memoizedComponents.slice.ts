import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export const selectCount1 = (state: { memoizedComponents: MemoizedComponentsState }) => state.memoizedComponents.count1;
export const selectMultiplier = (state: { memoizedComponents: MemoizedComponentsState }) => state.memoizedComponents.multiplier;
export const selectUnrelatedState = (state: { memoizedComponents: MemoizedComponentsState }) => state.memoizedComponents.unrelatedState;

export const selectExpensiveValue = (state: { memoizedComponents: MemoizedComponentsState }) => {
    console.log('Computing expensive value (from Redux)...');
    return state.memoizedComponents.multiplier * 1000;
}

export default memoizedComponentsSlice.reducer;