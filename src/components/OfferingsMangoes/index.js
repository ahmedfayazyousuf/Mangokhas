import Cover from '../1_MediaAssets/SectionImages/MangoTexture.png';
import Navbar from '../HeaderFooter/Navbar/NavbarThree.js';
import TextAnim from '../1_MediaAssets/Styles/FadeAnimation.jsx';
import React from 'react';

import MangoSindhri from '../1_MediaAssets/SectionImages/AcharTypes/MangoSindhri.jpg';
import MangoChaunsa from '../1_MediaAssets/SectionImages/AcharTypes/MangoChaunsa.jpeg';

import { NavLink } from 'react-router-dom';

const OfferingsMangoes = () => {
    return (
        <>
            <Navbar/>
            <div className='paddingDedo' style={{ width: '100vw', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', flexDirection: 'column', backgroundImage: `url('${Cover}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <TextAnim Body={
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '0px 0px 10px 0px', width: '100%'}}>
                        <h1 className='HeaderText' style={{color: 'white', width :'100%', textAlign: 'center'}}>Our Offerings - <span className='fontSpecial' style={{ color: '#d49400'}}>Mangoes</span></h1>
                    </div>
                }/>
                <div className='makeColumn' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '20px 0px', gap: '15px'}}>
                    <div className='ImageZoomDivier'>
                        <div className='imageOfferingsItem' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${MangoSindhri}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <p style={{fontSize: '12px', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Premium Sindhri</p>
                        </div>
                        <div className='imageOfferingsItem' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${MangoChaunsa}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <p style={{fontSize: '12px', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Premium Chaunsa</p>
                        </div>
                        <div className='imageOfferingsItem' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${MangoSindhri}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'grayscale(100%)'}}>
                            <p style={{fontSize: '12px', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Premium Anwar Atol (Coming Soon)</p>
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

export default OfferingsMangoes;
