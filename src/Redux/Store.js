import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../Redux/SearchResultSlice.js';
import authReducer from '../Redux/AuthSlice.js'
import watchListReducer from '../Redux/WatchListSlice'

const store = configureStore({
    reducer:{
        search : searchReducer,
        auth : authReducer,
        watchList : watchListReducer,
    }
});

export default store;