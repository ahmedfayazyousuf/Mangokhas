import React from 'react';
import Cover from '../../1_MediaAssets/SectionImages/HeroCover2.jpg';
import Rotator from '../../1_MediaAssets/SectionImages/Rotator.png';
import LogoKhaasacharRound from '../../1_MediaAssets/BrandImages/LogoKhaasacharRound.png';
import LogoMangokhasRound from '../../1_MediaAssets/BrandImages/LogoMangokhasRound.png';

const HeroSection = () => {
    return (
        <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', backgroundColor: 'black', backgroundImage: `url('${Cover}')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative' }} >
            <img className="rotator" style={{ position: 'absolute', width: '400px', right: '-200px', top: '5%', opacity: '0.3'}} alt='Rotator' src={Rotator} />
            <img className="rotator" style={{ position: 'absolute', width: '200px', left: '-100px', top: '65%', opacity: '0.3'}} alt='Rotator' src={Rotator} />

            <h1 className="headerText" style={{ zIndex: '1', fontWeight: '300', margin: '0'}}>Mangokhas</h1>
            <div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', marginTop: '-2vw', position: 'absolute', bottom: '10px', right: '10px'}}>   
                <img className="headerLogos DPhider" style={{ width: '150px'}} alt='Rotator' src={LogoMangokhasRound} /> 
                <img className="headerLogos DPhider" style={{ width: '150px'}} alt='Rotator' src={LogoKhaasacharRound} />
            </div>
        </div>
    );
};


export default HeroSection;
