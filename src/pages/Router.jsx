import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Works from './Works'

const Router = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path='/' element={<Home />} />
                <Route path='/works' element={<Works />} />
            </Route>
        </Routes>
    );
}

export default Router;
