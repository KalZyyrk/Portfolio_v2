import React from 'react';
import GalleryCard from './GalleryCard';
import bookiImg from '../../assets/booki-img.png'
import kasaImg from '../../assets/kasa-img.png'

const Gallery = () => {
    return (
        <div className='gallery'>
            <GalleryCard title='Booki-v2' link='https://booki-front.vercel.app/' github='https://github.com/KalZyyrk/Booki-Front/tree/master' img={bookiImg} />
            <GalleryCard title='Kasa' link='https://kasa-v1-tau.vercel.app/' github='https://github.com/KalZyyrk/kasa_v1' img={kasaImg} />
        </div>
    );
}

export default Gallery;
