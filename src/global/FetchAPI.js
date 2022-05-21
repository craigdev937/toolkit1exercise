import { createAsyncThunk } from "@reduxjs/toolkit";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const USER_URL = "https://jsonplaceholder.typicode.com/users";

class FetchClass {
    getAllUsers = createAsyncThunk("users/getAllUsers", 
    async () => {
        const res = await fetch(USER_URL);
        if (!res.ok) throw new Error(res.statusText);
        const users = await res.json();
        return [...users];
    });

    fetchAllPosts = createAsyncThunk("posts/fetchAllPosts", 
    async () => {
        const res = await fetch(POST_URL);
        if (!res.ok) throw new Error(res.statusText);
        const posts = await res.json();
        return [...posts];
    });

    createPost = createAsyncThunk("post/createPost", 
    async (payload) => {
        const res = await fetch(POST_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(res.statusText);
        const post = await res.json();
        return post;
    });

    updatePost = createAsyncThunk("post/updatePost", 
    async (payload) => {
        const res = 
        await fetch(`${POST_URL}/${payload.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title, body: payload.body
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const post = await res.json();
        return post;
    });

    deletePost = createAsyncThunk("post/deletePost", 
    async (id) => {
        const res = await fetch(`${POST_URL}/${id}`, {
            method: "DELETE"
        });
        if (!res.ok) throw new Error(res.statusText);
        const post = await res.json();
        if (res.status === 200) return post;
        return `${res?.status}: ${res?.statusText}`;
    });
};

export const API = new FetchClass();





