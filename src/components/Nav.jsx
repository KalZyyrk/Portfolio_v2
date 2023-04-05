import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <NavLink to='/' className={({ isActive, isPending }) =>
                isActive ? "active" : ""} >Home</NavLink>
            <NavLink to='/works' className={({ isActive, isPending }) =>
                isActive ? "active" : ""} >Works</NavLink>
            {/* <NavLink to='/social' className={({ isActive, isPending }) =>
                isActive ? "active" : ""} >Social</NavLink> */}
            <NavLink to='/contact' className={({ isActive, isPending }) =>
                isActive ? "active" : ""} >Contact</NavLink>
        </nav>
    );
}

export default Nav;
