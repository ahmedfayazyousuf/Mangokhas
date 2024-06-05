import React from 'react';
import About from './About/index.js';
import HeroSection from './HeroSection/index.js';
import Footer from '../HeaderFooter/Footer/index.js';

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

            <section id='contact' style={{background: 'black', height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Footer />
            </section>
        </div> 
        </>
    );
};

export default Home;
