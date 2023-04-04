import React from 'react';
import GalleryCard from './GalleryCard';
import bookiImg from '../../assets/booki-img.png'
import kasaImg from '../../assets/kasa-img.png'
import OMFImg from '../../assets/ohMyFood-img.png'
import LoisirImg from '../../assets/loisira.png'

const Gallery = () => {
    return (
        <div className='gallery'>
            <GalleryCard title='Booki-v2' link='https://booki-front.vercel.app/' github='https://github.com/KalZyyrk/Booki-Front/tree/master' img={bookiImg} techno="React/API Rest" />
            <GalleryCard title='Kasa' link='https://kasa-v1-tau.vercel.app/' github='https://github.com/KalZyyrk/kasa_v1' img={kasaImg} techno="React/ReactRouter" />
            <GalleryCard title='Oh My Food' link='https://kalzyyrk.github.io/Projet_3_Hischke_Ulysse/' github='https://github.com/KalZyyrk/Projet_3_Hischke_Ulysse' img={OMFImg} techno="HTML/SASS" />
            <GalleryCard title='Kasa-vue' link='https://kasa-vue-v2.vercel.app/' github='https://github.com/KalZyyrk/kasa-vue-v2' img={kasaImg} techno="Vue.js/Vue Router" />
            <GalleryCard title='Booki-v1' link='https://kalzyyrk.github.io/Projet_2_Hischke_Ulysse/' github='https://github.com/KalZyyrk/Projet_2_Hischke_Ulysse' img={bookiImg} techno="HTML/CSS" />
            <GalleryCard title='Loisira' link='https://loisiria.vercel.app/' github="https://github.com/KalZyyrk/Loisiria" img={LoisirImg} techno='Nuxt' />
        </div>
    );
}

export default Gallery;
