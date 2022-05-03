import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from "./pages/form"

const Router:React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} ></Route>
            </Routes>
        </BrowserRouter>
    ) 
}

export default Router;