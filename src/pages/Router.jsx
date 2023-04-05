import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Works from './Works'
import Contact from './Contact';

const Router = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path='/' element={<Home />} />
                <Route path='/works' element={<Works />} />
                <Route path='/contact' element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default Router;
