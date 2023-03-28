import React from 'react';
import photo from '../assets/photo-profile.jpeg'
import HardSkills from '../components/HardSkills/HardSkills';

const Home = () => {
    return (
        <>
            <section className='home'>
                <div className='circleImg'>
                    <img src={photo} alt='Photo' />
                </div>
                <div className='hook'>
                    Récemment diplômé, je souhaite vous apporter mes compétences de Développeur Web Full-Stack.
                    J'aime me surpasser, apprendre, et transmettre mon savoir.
                    Je suis trilingue Français - Allemand - Anglais et disponible immédiatement
                </div>
            </section >
            <HardSkills />
        </>
    );
}

export default Home;
