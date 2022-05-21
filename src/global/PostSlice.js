import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {}
});

export const PostActiions = PostSlice.actions;
export const PostReducer = PostSlice.reducer;




// const initialState = {
//     posts: [],
//     status: "idle",
//     error: null
// };

// const PostSlice = createSlice({
//     name: "posts",
//     initialState: initialState,
//     reducers: {},
//     extraReducers: {
//         [API.fetchAllPosts.rejected]: (state, action) => {
//             state.status = "failed",
//             state.error = action.error.message
//         },
//         [API.fetchAllPosts.pending]: (state) => {
//             state.status = "loading"
//         },
//         [API.fetchAllPosts.fulfilled]: (state, action) => {
//             state.status = "succeeded";
//             let min = 1;
//             const loadedPosts = action.payload.map((post) => {
//                 post.data = sub(
//                     new Date(), 
//                     {minutes: min++}
//                 ).toISOString();
//                 post.reactions = {
//                     thumbsUp: 0,
//                     wow: 0,
//                     heart: 0,
//                     rocket: 0,
//                     coffee: 0
//                 }
//                 return post;
//             });
//             state.posts = state.posts.concat(loadedPosts);
//         },
//     },
// });





