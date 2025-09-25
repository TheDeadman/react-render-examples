import { combineReducers, configureStore } from '@reduxjs/toolkit'
import listReducer from 'ReduxToolkitApp/features/List/listSlice'
import searchReducer from 'ReduxToolkitApp/features/Search/searchSlice'
import renderCountReducer from 'overall/renderCountSlice';
import oneReducer from 'RenderExamples/ContextVsRedux/Redux/one.slice';
import twoReducer from 'RenderExamples/ContextVsRedux/Redux/two.slice';
import threeReducer from 'RenderExamples/ContextVsRedux/Redux/three.slice';
// ...

const reduxVsContext = combineReducers({
    one: oneReducer,
    two: twoReducer,
    three: threeReducer
})

export const store = configureStore({
    reducer: {
        list: listReducer,
        search: searchReducer,
        renderCount: renderCountReducer,
        reduxVsContext: reduxVsContext
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch