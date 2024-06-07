// import TextAnim from '../../1_MediaAssets/Styles/FadeAnimation.jsx';
import React from 'react';
// import Texture from '../../1_MediaAssets/SectionImages/Texture.png';
import Mangoes from '../../1_MediaAssets/SectionImages/About1.jpg';
import Pickles from '../../1_MediaAssets/SectionImages/About2.jpg';

const AboutTwo = () => {

    return (
        <>
       

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', backgroundColor: 'black', flexDirection: 'column', position: 'relative'}}>  
        
        <h1 className='HeaderText' style={{color: '#d49400', border: '3px solid #d49400', zIndex: '1', position: 'absolute', background: '#000', padding: '5px 30px 5px 30px', width: '95%', textAlign: 'center'}}>Pure <span className='fontSpecial' style={{color: '#fff'}}>Delight </span> in Every Mango & Pickle</h1>
            
            <div className='makeColumn' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', margin: '20px 0px', backgroundColor: '#000'}}>
                
                <div className='hoverbw leftAboutTwo' style={{ backgroundImage: `url('${Mangoes}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                </div>

                <div className='hoverbw rightAboutTwo' style={{ backgroundImage: `url('${Pickles}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                </div>

            </div>
        </div>
        </>
    );
};

export default AboutTwo;
