import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';
import CesiumMap from './CesiumMap';

const App = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<Login />} />
                    <Route path='dashboard' element={<Dashboard />} >
                        <Route path='map' element={<CesiumMap />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App