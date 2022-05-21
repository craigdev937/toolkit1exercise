import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Main } from "../routes/Main";

export const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </React.Fragment>
    );
};



