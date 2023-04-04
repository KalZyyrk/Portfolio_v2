import React from 'react';
import Button from '../Button';

const GalleryCard = ({ title, img, link, github, techno }) => {
    return (
        <div className='card'>
            <div className="card-preview">
                <img src={img} alt={"image of " + title} />
                <div className="preview-btn">
                    <Button name='Demo' link={link} />
                    <Button name='Code' link={github} />
                </div>
            </div>
            <div className="desc">
                <h2>{title}</h2>
                <p>{techno}</p>
            </div>
        </div>
    );
}

export default GalleryCard;
