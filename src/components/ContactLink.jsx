import React from 'react'
import { Link } from 'react-router-dom'

export default function ({ link, icon, name }) {
    return (
        <article className='contact_btn'>
            <Link target='_blank' to={link}>
                <img src={icon} alt={name + ' icon'} />
                <h2>{name}</h2>
            </Link>
        </article>
    )
}
