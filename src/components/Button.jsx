import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ name, link }) => {
    return (
        <Link target="_blank" to={link}>
            <button className='btn'>{name}</button>
        </Link>
    );
}

export default Button;
