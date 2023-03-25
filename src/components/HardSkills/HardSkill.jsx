import React from 'react';

const HardSkill = ({ name, logo }) => {
    return (
        <div className='skill'>
            <div className="circle">
                <img src={logo} alt={"logo of " + name} />
            </div>
            <h1 className="skill-name">{name}</h1>
        </div>
    );
}

export default HardSkill;
