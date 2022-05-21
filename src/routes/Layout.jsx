import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
    return (
        <React.Fragment>
            <Header />
            <section className="main">
                <Outlet />
            </section>
        </React.Fragment>
    );
};


