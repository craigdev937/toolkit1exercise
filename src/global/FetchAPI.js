import { createAsyncThunk } from "@reduxjs/toolkit";

const USER_URL = "https://jsonplaceholder.typicode.com/users";

class FetchClass {
    getAllUsers = createAsyncThunk("users/getAllUsers", 
    async () => {
        const res = await fetch(USER_URL);
        if (!res.ok) throw new Error(res.statusText);
        const users = await res.json();
        return [...users];
    });
};

export const API = new FetchClass();



// const POST_URL = "https://jsonplaceholder.typicode.com/posts";

// fetchAllPosts = createAsyncThunk("posts/fetchAllPosts", 
//     async () => {
//         const res = await fetch(POST_URL);
//         if (!res.ok) throw new Error(res.statusText);
//         const posts = await res.json();
//         return [...posts];
//     });