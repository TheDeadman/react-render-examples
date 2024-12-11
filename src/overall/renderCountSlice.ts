import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store/store'

interface RenderCountState {
    delays: { [s: string]: number }
}

// Define the initial state using that type
const initialState: RenderCountState = {
    delays: {}
}

export const renderCountSlice = createSlice({
    name: 'renderCount',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setComponentDelay: (state, action: PayloadAction<{ componentName: string, delay: number }>) => {
            const { componentName, delay } = action.payload;
            if (componentName === "Change All App Delays") {
                console.log("HERE", state.delays)
                for (const key of Object.keys(state.delays)) {
                    state.delays[key] = delay;
                }
                state.delays[componentName] = delay;
            } else {

                state.delays[componentName] = delay;
            }
        }
    },

})

export const { setComponentDelay } = renderCountSlice.actions

export const selectComponentDelay = (componentName: string) => (state: RootState) => {
    if (state.renderCount.delays[componentName] !== undefined) {
        return state.renderCount.delays[componentName]
    }
    return 10;
}

export default renderCountSlice.reducer