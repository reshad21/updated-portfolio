import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import navberReducer from '../features/navberSlice';

export const store = configureStore({
    reducer: combineReducers({
        counter: counterReducer,
        navber: navberReducer
    })
})