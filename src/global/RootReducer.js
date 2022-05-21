import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./UserSlice";
import { PostReducer } from "./PostSlice";

export const Reducer = configureStore({
    reducer: {
        users: UserReducer,
        posts: PostReducer
    },
});



