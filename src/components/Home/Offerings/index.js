import TextAnim from '../../1_MediaAssets/Styles/FadeAnimation.jsx';
import React from 'react';
// import Mangoes from '../../1_MediaAssets/SectionImages/About1.jpg';
// import Pickles from '../../1_MediaAssets/SectionImages/About3.jpg';
import Slider from './Slider.js';

const Offerings = () => {

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', backgroundColor: 'black', flexDirection: 'column'}}>  
           <TextAnim Body={
                <h1 className='HeaderText' style={{color: 'white', width :'100%', textAlign: 'center'}}>Our <span className='fontSpecial' style={{color: '#d49400'}}>Offerings </span></h1>
            }/>

            <Slider />
            {/* <div className='makeColumn' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '20px 0px', gap: '30px'}}>
            
                <div className='imageZoom' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${Mangoes}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <p style={{position: 'absolute', top: '0', right: '0', background: '#d49400', margin: '0', color: 'black', padding: '2px 15px', fontSize: '12px', fontWeight: '900'}}>PKR &nbsp;1000 /-</p>
                    <p className='fontSpecial' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Khas Aam</p>
                </div>

                <div className='imageZoom' style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${Pickles}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <p style={{position: 'absolute', top: '0', right: '0', background: '#d49400', margin: '0', color: 'black', padding: '2px 15px', fontSize: '12px', fontWeight: '900'}}>PKR &nbsp;1000 /-</p>
                    <p className='fontSpecial' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Khas Achar</p>
                </div>

            </div> */}
        </div>
    );
};

export default Offerings;
