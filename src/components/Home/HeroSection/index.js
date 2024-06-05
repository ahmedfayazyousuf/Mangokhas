import React from 'react';
import Cover from '../../1_MediaAssets/SectionImages/HeroCover.png';
import Rotator from '../../1_MediaAssets/SectionImages/Rotator.png';

const HeroSection = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', backgroundColor: 'red', backgroundImage: `url('${Cover}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative' }} >
            <img className="rotator" style={{ position: 'absolute', width: '400px', right: '-200px', top: '5%', opacity: '0.3'}} alt='Rotator' src={Rotator} />
            <img className="rotator" style={{ position: 'absolute', width: '200px', left: '-100px', top: '65%', opacity: '0.3'}} alt='Rotator' src={Rotator} />
            <h1 className="headerText" style={{zIndex: '1', fontWeight: '300'}}>Mangokhas</h1>
        </div>
    );
};

export default HeroSection;
