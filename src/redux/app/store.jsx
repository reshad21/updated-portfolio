import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import navberReducer from '../features/navberSlice';
import { blogApi } from './../features/api/apiSlice';

export const store = configureStore({
    reducer: combineReducers({
        [blogApi.reducerPath]: blogApi.reducer,
        counter: counterReducer,
        navber: navberReducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApi.middleware),
})