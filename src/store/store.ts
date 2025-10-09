import { combineReducers, configureStore } from '@reduxjs/toolkit'
import renderCountReducer from 'overall/renderCountSlice';
import oneReducer from 'RenderExamples/ContextVsRedux/Redux/one.slice';
import twoReducer from 'RenderExamples/ContextVsRedux/Redux/two.slice';
import threeReducer from 'RenderExamples/ContextVsRedux/Redux/three.slice';
import memoizedComponentsReducer from 'RenderExamples/MemoizedComponentsRedux/memoizedComponents.slice';
// ...

const reduxVsContext = combineReducers({
    one: oneReducer,
    two: twoReducer,
    three: threeReducer,
})

export const store = configureStore({
    reducer: {
        renderCount: renderCountReducer,
        reduxVsContext: reduxVsContext,
        memoizedComponents: memoizedComponentsReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch