import React from 'react';
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <div className='desc'>
                <h3>PortFolio</h3>
                <h1>Ulysse HISCHKE</h1>
                <h2>Développeur Web Full-Stack</h2>
            </div>
            <Nav />
        </header>
    );
}

export default Header;
