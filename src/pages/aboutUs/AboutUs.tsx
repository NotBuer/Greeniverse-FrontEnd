import TextAboutUs from '../../components/textAboutUs/TextAboutUs'
import React from 'react'
import './AboutUs.css';
import Carrusel from '../../components/carrusel/Carrusel';

function AboutUs() {
    return (
        <>
            <main id='about_main'>

                <TextAboutUs />
                <Carrusel />

            </main>

        </>
    );
}
export default AboutUs;