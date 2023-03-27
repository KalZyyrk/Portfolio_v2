import React from 'react';
import GalleryCard from './GalleryCard';
import bookiImg from '../../assets/booki-img.png'
import kasaImg from '../../assets/kasa-img.png'
import OMFImg from '../../assets/ohMyFood-img.png'

const Gallery = () => {
    return (
        <div className='gallery'>
            <GalleryCard title='Booki-v2' link='https://booki-front.vercel.app/' github='https://github.com/KalZyyrk/Booki-Front/tree/master' img={bookiImg} />
            <GalleryCard title='Kasa' link='https://kasa-v1-tau.vercel.app/' github='https://github.com/KalZyyrk/kasa_v1' img={kasaImg} />
            <GalleryCard title='Oh My Food' link='https://kalzyyrk.github.io/Projet_3_Hischke_Ulysse/' github='https://github.com/KalZyyrk/Projet_3_Hischke_Ulysse' img={OMFImg} />
            <GalleryCard title='Booki-v1' link='https://kalzyyrk.github.io/Projet_2_Hischke_Ulysse/' github='https://github.com/KalZyyrk/Projet_2_Hischke_Ulysse' img={bookiImg} />
        </div>
    );
}

export default Gallery;
