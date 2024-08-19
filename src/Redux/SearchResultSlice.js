import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchMovies :[]
}

const SearchResultSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        setSearchMovies(state,action){
            state.searchMovies=action.payload
        }
    }
})

export const {setSearchMovies} = SearchResultSlice.actions;
export default SearchResultSlice.reducer;


