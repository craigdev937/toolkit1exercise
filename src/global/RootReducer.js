import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./UserSlice";
import { PostReducer } from "./PostSlice";

export const Reducer = configureStore({
    reducer: {
        posts: PostReducer,
        users: UserReducer,
    },
});



