import React from 'react';
import About from './About/index.js';
import HeroSection from './HeroSection/index.js';
import Contact from './Contact/index.js';
import AboutTwo from './AboutTwo/index.js';
import AboutThree from './AboutThree/index.js';
import Offerings from './Offerings/index.js';
import Testimonials from './Testimonials/index.js';

const Home = () => {
    return (
        <>
        <div class="con">
            <section id='home' style={{background: 'black', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <HeroSection />
            </section>

            <section id='about' style={{background: 'black', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <About />
            </section>

            <section style={{background: 'black', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <AboutTwo />
            </section>

            <section id='offerings' style={{background: 'black', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Offerings />
            </section>

            <section id='testimonials' style={{background: 'black', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Testimonials />
            </section>

            <section id='gallery' style={{background: 'black', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <AboutThree />
            </section>

            <section id='contact' style={{background: 'black', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Contact />
            </section>
        </div> 
        </>
    );
};

export default Home;
