import TextAnim from '../../1_MediaAssets/Styles/FadeAnimation.jsx';
import React from 'react';
import Mangoes from '../../1_MediaAssets/SectionImages/AcharTypes/Mangoes.jpg';
import Other from '../../1_MediaAssets/SectionImages/AcharTypes/Other.jpg';
import { NavLink } from 'react-router-dom';

const Offerings = () => {

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', backgroundColor: 'black', flexDirection: 'column'}}>  
           <TextAnim Body={
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '0px 0px 10px 0px', width: '100%'}}>
                    <h1 className='HeaderText' style={{color: 'white', width :'100%', textAlign: 'center'}}>Our <span className='fontSpecial' style={{ color: '#d49400'}}>Offerings </span></h1>
                </div>
            }/>
            <div className='makeColumn' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '20px 0px', gap: '15px'}}>
                <div className='ImageZoomDivier'>
                    <NavLink to='/OfferingsMangoes'>
                        <div className='imageOfferingsItem2' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${Mangoes}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <p style={{fontSize: '12px', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Mangoes</p>
                        </div>
                    </NavLink>
                    <NavLink to='/OfferingsOther'>
                    <div className='imageOfferingsItem2' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${Other}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                        <p style={{fontSize: '12px', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Achaar, Chutneys & more</p>
                    </div>
                    </NavLink>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '40px 0px 0px 0px', width: '100%'}}>
                <NavLink to="/Checkout">
                    <button className='buttonMain2'>Order Now!</button>
                </NavLink>
            </div>
            
        </div>
    );
};

export default Offerings;
