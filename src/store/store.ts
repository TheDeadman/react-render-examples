import { configureStore } from '@reduxjs/toolkit'
import listReducer from 'ReduxToolkitApp/features/List/listSlice'
import searchReducer from 'ReduxToolkitApp/features/Search/searchSlice'
import renderCountReducer from 'overall/renderCountSlice';
// ...

export const store = configureStore({
    reducer: {
        list: listReducer,
        search: searchReducer,
        renderCount: renderCountReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch