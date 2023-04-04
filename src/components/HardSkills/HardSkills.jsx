import React from 'react';
import HardSkill from './HardSkill';
import logoReact from '../../assets/React-icon.svg'
import logoJS from '../../assets/js_logo_icon.svg'
import logoCSS from '../../assets/CSS3_logo.svg'
import logoHTML from '../../assets/HTML5_logo.svg'
import logoMDB from '../../assets/mongodb.svg'
import logoVue from '../../assets/Vuejs.svg'

const HardSkills = () => {
    return (
        <div className='hardSkill'>
            <HardSkill name='React' logo={logoReact} />
            <HardSkill name='JavaScript' logo={logoJS} />
            <HardSkill name='HTML' logo={logoHTML} />
            <HardSkill name='CSS' logo={logoCSS} />
            <HardSkill name='MongoDB' logo={logoMDB} />
            <HardSkill name='VueJS' logo={logoVue} />
        </div>
    );
}

export default HardSkills;
