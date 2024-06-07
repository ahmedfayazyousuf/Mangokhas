import TextAnim from '../../1_MediaAssets/Styles/FadeAnimation.jsx';
import React from 'react';

// import Mangoes from '../../1_MediaAssets/SectionImages/About1.jpg';
// import AamKaAcharOil from '../../1_MediaAssets/SectionImages/AcharTypes/AamKaAcharOil.jpg';
// import HariChutney from '../../1_MediaAssets/SectionImages/AcharTypes/HariChutney.jpg';
// import KhattaMeethaAchar from '../../1_MediaAssets/SectionImages/AcharTypes/KhattaMeethaAchar.jpg';
// import MixVegetableAchar from '../../1_MediaAssets/SectionImages/AcharTypes/MixVegetableAchar.jpg';
import Slider from './Slider.js';

import { NavLink } from 'react-router-dom';

const Offerings = () => {

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', backgroundColor: 'black', flexDirection: 'column'}}>  
           <TextAnim Body={
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '0px 0px 10px 0px', width: '100%'}}>
                    <h1 className='HeaderText' style={{color: 'white', width :'100%', textAlign: 'center'}}>Our <span className='fontSpecial' style={{ color: '#d49400'}}>Offerings </span></h1>
                </div>
            }/>
            <Slider />
            {/* <div className='makeColumn' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '20px 0px', gap: '15px'}}>
                <div className='ImageZoomDivier'>
                    <div className='imageZoom' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${Mangoes}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                        <p className='' style={{fontSize: '12px', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Premium Sindhri Mango Box</p>
                    </div>
                    <div className='imageZoom' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${KhattaMeethaAchar}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                        <p className='' style={{fontSize: '12px', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Khatta Meetha Achar</p>
                    </div>
                    <div className='imageZoom' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${AamKaAcharOil}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                        <p className='' style={{fontSize: '12px', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Aam ka Achar (with oil)</p>
                    </div>
                    <div className='imageZoom' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${MixVegetableAchar}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                        <p className='' style={{fontSize: '12px', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Mix Vegetable Achar</p>
                    </div>
                    <div className='imageZoom' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${HariChutney}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                        <p className='' style={{fontSize: '12px', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Hari Chutney</p>
                    </div>
                </div>
            </div> */}

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '40px 0px 0px 0px', width: '100%'}}>
                <NavLink to="/Checkout">
                    <button className='buttonMain2'>Order Now!</button>
                </NavLink>
            </div>
            
        </div>
    );
};

export default Offerings;
