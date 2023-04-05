import React from 'react'
import HardSkills from '../components/HardSkills/HardSkills'
import ContactLink from '../components/ContactLink'
import linkedinIcon from '../assets/contact-icon/linkedin.svg'
import CV from '../assets/contact-icon/cvImg.png';
import twitterIcon from '../assets/contact-icon/Twitter-logo.svg'
import ContactForm from '../components/ContactFrom';

export default function Contact() {
    return (
        <>
            <section className='contact'>
                <ContactLink name='Linkedin' link='https://www.linkedin.com/in/ulysse-hischke-375097267' icon={linkedinIcon} />
                <ContactLink name='Twitter' link='https://twitter.com/FullStackUlysse' icon={twitterIcon} />
                <ContactLink name='CV' link='https://drive.google.com/file/d/1J_mRp5PUdEJ9_mX6av6omNqa5yV871at/view' icon={CV} />
            </section>
            <ContactForm />
            <HardSkills />
        </>
    )
}
