import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Reducer } from "../global/RootReducer";
import { Main } from "../routes/Main";

export const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Provider store={Reducer}>
                    <Main />
                </Provider>
            </BrowserRouter>
        </React.Fragment>
    );
};



