import { createSlice } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";

const initialState = {
    users: [],
    loading: false,
    error: null
};

const UserSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [API.getAllUsers.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.getAllUsers.pending]: (state) => {
            state.loading = true
        },
        [API.getAllUsers.fulfilled]: (state, action) => {
            state.loading = false,
            state.users = [...action.payload]
        },
    }
});

export const UserReducer = UserSlice.reducer;



