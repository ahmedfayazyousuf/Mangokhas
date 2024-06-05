import React from 'react';
import Cover from '../../1_MediaAssets/SectionImages/MangoTexture.png';
import Slider from './Slider.js';

const AboutThree = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: '#000', backgroundImage: `url('${Cover}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
            <Slider />    
        </div>
    );
};

export default AboutThree;
