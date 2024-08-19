import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    watchList:[],
}

const WatchListSlice = createSlice({
    name: "watchList", 
    initialState,
    reducers: {
        addWatchList(state, action) { 
            state.watchList = [...state.watchList, action.payload]; 
        },
        deleteWatchList(state, action) {
            state.watchList = state.watchList.filter(movie => movie !== action.payload);
          },          
        setWatchList(state, action) { 
            state.watchList = action.payload;
        }
    }
});

export const { addWatchList, setWatchList,deleteWatchList } = WatchListSlice.actions;

export default WatchListSlice.reducer; 
