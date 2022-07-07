
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import SignIn from "../pages/SignIn/SignIn";

const RouterFunction = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<SignIn />} />

                <Route path="/dashboard">
                    <Route index element={<Dashboard />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default RouterFunction;