import TextAnim from '../../1_MediaAssets/Styles/FadeAnimation.jsx';
import React from 'react';
import Mangoes from '../../1_MediaAssets/SectionImages/About1.jpg';
import Pickles from '../../1_MediaAssets/SectionImages/About3.jpg';
import { NavLink } from 'react-router-dom';

const Offerings = () => {

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', backgroundColor: 'black', flexDirection: 'column'}}>  
           <TextAnim Body={
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '0px 0px 10px 0px', width: '100%'}}>
                    <h1 className='HeaderText' style={{color: 'white', width :'100%', textAlign: 'center'}}>Our <span className='fontSpecial' style={{color: '#d49400'}}>Offerings </span></h1>
                </div>
            }/>
            <div className='makeColumn' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '20px 0px', gap: '15px'}}>
                
                <div className='ImageZoomDivLeft'>
                    <div className='imageZoom' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${Mangoes}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                        <p style={{position: 'absolute', top: '10px', right: '0', background: '#d49400', margin: '0', color: 'black', padding: '2px 15px', fontSize: '12px', fontWeight: '900'}}>PKR &nbsp;1800 /-</p>
                        <p className='fontSpecial' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Premium Sindhri 5 Kg MangoBox</p>
                    </div>
                    <div className='imageZoom' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${Pickles}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                        <p style={{position: 'absolute', top: '10px', right: '0', background: '#d49400', margin: '0', color: 'black', padding: '2px 15px', fontSize: '12px', fontWeight: '900'}}>PKR &nbsp;450 /-</p>
                        <p className='fontSpecial' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Khas Premium Achar 500g</p>
                    </div>
                </div>
                
                <div className='ImageZoomDivRight'>
                    <div className='imageZoom' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${Pickles}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                        <p style={{position: 'absolute', top: '10px', right: '0', background: '#d49400', margin: '0', color: 'black', padding: '2px 15px', fontSize: '12px', fontWeight: '900'}}>PKR &nbsp;700 /-</p>
                        <p className='fontSpecial' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Khas Premium Achar 1000g</p>
                    </div>
                    <div className='imageZoom' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${Mangoes}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                        <p style={{position: 'absolute', top: '10px', right: '0', background: '#d49400', margin: '0', color: 'black', padding: '2px 15px', fontSize: '12px', fontWeight: '900'}}>Coming soon</p>
                        <p className='fontSpecial' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Premium Sindhri 2.5 Kg MangoBox</p>
                    </div>
                </div>
                
            </div>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '20px 0px 0px 0px', width: '100%'}}>
                <NavLink to="/Checkout">
                    <button className='buttonMain2'>Order Now!</button>
                </NavLink>
            </div>
            
        </div>
    );
};

export default Offerings;
