import React from 'react';
import About1 from '../../1_MediaAssets/SectionImages/About1.jpg';
import About2 from '../../1_MediaAssets/SectionImages/AcharTypes/HariChutneyNew.jpg';
import TextAnim from '../../1_MediaAssets/Styles/FadeAnimation.jsx';
import { NavLink } from 'react-router-dom';

const About = () => {

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', backgroundColor: 'black'}}>  
            <div className='AboutImgTextDiv'>         
                <div className='AboutImgHolder'>
                    <img src={About1} alt='AboutImage' className='MaxWidthImage'/>
                    <img src={About2} alt='AboutImage' className='DPhider' style={{height: '20vw', marginLeft: '-120px', width: '20vw', borderRadius: '500px'}}/>
                </div>
                <div className='AboutTextHolder'>
                    <TextAnim Body={
                        <h1 className='HeaderText'>Savor the <span className='fontSpecial' style={{color: '#d49400'}}>Essence:</span> Where Every Bite Tells a Story.</h1>
                    }/>
                    <TextAnim Body={
                        <p className='texterpara'>
                        Experience Pakistan's finest produce with Mangokhas, offering premium mangoes sourced from Mirpurkhas' renowned orchards, celebrated for supreme quality. Handpicked at peak ripeness, each mango promises unparalleled flavor. Complementing our fruit selection, we proudly also offer premium Shikarpuri Achar.</p>
                    }/>
                    <TextAnim Body={
                        <NavLink to='/Checkout'>
                            <button className='buttonMain' style={{marginTop: '10px'}}>Order now</button>
                        </NavLink>
                    } />
                </div>
            </div>
        </div>
    );
};

export default About;
