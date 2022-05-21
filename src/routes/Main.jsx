import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { List } from "../pages/List";
import { Single } from "../pages/Single";
import { Add } from "../pages/Add";
import { Edit } from "../pages/Edit";

export const Main = () => (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<List />} />
            <Route path="post">
                <Route index element={<Add />} />
                <Route path="postId" element={<Single />} />
                <Route path="edit/:postId" element={<Edit />} />
            </Route>
        </Route>
    </Routes>
);

