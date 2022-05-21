import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { API } from "./FetchAPI";

const initialState = {
    posts: [],
    loading: false,
    error: null
};

const PostSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload)
            },
            prepare(title,content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title, content, userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            },
            reactionAdded(state, action) {
                const { postId, reaction } = action.payload;
                const existingPost = state.posts.find(
                    (post) => post.id === postId);
                if (existingPost) {
                    existingPost.reactions[reaction]++
                }
            },
        },
    },
    extraReducers: {
        [API.fetchAllPosts.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.fetchAllPosts.pending]: (state) => {
            state.loading = true
        },
        [API.fetchAllPosts.fulfilled]: (state, action) => {
            state.loading = false;
            let min = 1;
            const loadedPosts = action.payload.map((post) => {
                post.data = sub(
                    new Date(), 
                    {minutes: min++}
                ).toISOString();
                post.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0
                }
                return post;
            });
            state.posts = state.posts.concat(loadedPosts);
        },
        [API.createPost.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.createPost.pending]: (state) => {
            state.loading = true
        },
        [API.createPost.fulfilled]: (state, action) => {
            state.loading = false;
            action.payload.userId = Number(action.payload.userId);
            action.payload.date = new Date().toISOString();
            action.payload.reactions = {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0
            };
            console.log(action.payload);
            state.posts.push(action.payload);
        },
        [API.updatePost.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.updatePost.pending]: (state) => {
            state.loading = true
        },
        [API.updatePost.fulfilled]: (state, action) => {
            if (!action.payload?.id) {
                console.log("update could not complete");
                console.log(action.payload);
                return;
            };
            const { id } = action.payload;
            action.payload.data = new Date().toISOString();
            const posts = state.posts.filter(
                (post) => post.id !== id);
            state.posts = [...posts, action.payload];
        },
        [API.deletePost.fulfilled]: (state, action) => {
            if (!action.payload?.id) {
                console.log("Delete coult not complete");
                console.log(action.payload);
                return;
            };
            const { id } = action.payload;
            const posts = state.posts.filter(
                (post) => post.id !== id);
            state.posts = posts;
        },
    },
});

export const PostActiions = PostSlice.actions;
export const PostReducer = PostSlice.reducer;



