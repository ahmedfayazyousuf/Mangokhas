import Cover from '../1_MediaAssets/SectionImages/MangoTexture.png';
import Navbar from '../HeaderFooter/Navbar/NavbarThree.js';
import TextAnim from '../1_MediaAssets/Styles/FadeAnimation.jsx';
import React from 'react';

import AamKaAcharOil from '../1_MediaAssets/SectionImages/AcharTypes/AamKaAcharOil.jpg';
import HariChutney from '../1_MediaAssets/SectionImages/AcharTypes/HariChutney.jpg';
import KhattaMeethaAchar from '../1_MediaAssets/SectionImages/AcharTypes/KhattaMeethaAchar.jpg';
import MixVegetableAchar from '../1_MediaAssets/SectionImages/AcharTypes/MixVegetableAchar.jpg';

import { NavLink } from 'react-router-dom';

const OfferingsOther = () => {
    return (
        <>
            <Navbar/>
            <div className='paddingDedo' style={{ width: '100vw', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', flexDirection: 'column', backgroundImage: `url('${Cover}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <TextAnim Body={
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '0px 0px 10px 0px', width: '100%'}}>
                        <h1 className='HeaderText' style={{color: 'white', width :'100%', textAlign: 'center'}}>Our <span className='fontSpecial' style={{ color: '#d49400'}}>Offerings </span></h1>
                    </div>
                }/>
                <div className='makeColumn' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '20px 0px', gap: '15px'}}>
                    <div className='ImageZoomDivier'>
                        <div className='imageOfferingsItem' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${AamKaAcharOil}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <p style={{fontSize: '12px', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Aam ka Achaar</p>
                        </div>
                        <div className='imageOfferingsItem' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${HariChutney}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <p style={{fontSize: '12px', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Hari Chutney</p>
                        </div>
                        <div className='imageOfferingsItem' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${KhattaMeethaAchar}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <p style={{fontSize: '12px', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Khatta Meetha Achaar</p>
                        </div>
                        <div className='imageOfferingsItem' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${MixVegetableAchar}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <p style={{fontSize: '12px', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Mix Vegetable Achaar</p>
                        </div>
                    </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '10px 0px 0px 0px', width: '100%'}}>
                    <NavLink to="/Checkout">
                        <button className='buttonMain2'>Order Now!</button>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default OfferingsOther;
