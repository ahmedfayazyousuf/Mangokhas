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
            
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', margin: '20px 0px', backgroundColor: '#000'}}>
                
                <div className='hoverbw' style={{clipPath: 'polygon(0 0, 100% 0%, 80% 100%, 0% 100%)', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '50%', height: '100vh', backgroundColor: 'black', backgroundImage: `url('${Mangoes}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    {/* <p className='fontSpecial' style={{fontSize: '30px', color: 'black', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: '#d49400'}}>Khas Aam</p> */}
                </div>

                <div className='hoverbw' style={{clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0 100%)', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '50%', height: '100vh', backgroundColor: 'black', backgroundImage: `url('${Pickles}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    {/* <p className='fontSpecial' style={{fontSize: '30px', color: 'black', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: '#d49400'}}>Khas Achar</p> */}
                </div>

            </div>
        </div>
        </>
    );
};

export default AboutTwo;
