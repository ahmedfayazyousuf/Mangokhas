import React from 'react';
import About1 from '../../1_MediaAssets/SectionImages/About1.jpg';
import About2 from '../../1_MediaAssets/SectionImages/About2.jpg';
import TextAnim from '../../1_MediaAssets/Styles/FadeAnimation.jsx';
import { NavLink } from 'react-router-dom';

const About = () => {

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', backgroundColor: 'black'}}>  
            <div className='AboutImgTextDiv'>         
                <div className='AboutImgHolder'>
                    <img src={About1} alt='PawHeart' className='MaxWidthImage'/>
                    <img src={About2} alt='PawHeart' className='DPhider' style={{height: '20vw', marginLeft: '-120px', width: '20vw', borderRadius: '500px'}}/>
                </div>
                <div className='AboutTextHolder'>
                    <TextAnim Body={
                        <h1 className='HeaderText'>Savor the <span className='fontSpecial' style={{color: '#d49400'}}>Essence:</span> Where Every Bite Tells a Story.</h1>
                    }/>
                    <TextAnim Body={
                        <p className='texterpara'>Experience Pakistan's finest produce with Mangokhas, offering premium mangoes sourced from Mirpurkhas' renowned orchards, celebrated for supreme quality. Handpicked at peak ripeness, each mango promises unparalleled flavor. Complementing our fruit selection, we proudly offer premium Shikarpuri Achar. From orchard to table, Mangokhas delivers Pakistan's culinary heritage.</p>
                    }/>
                    <TextAnim Body={
                        <NavLink to='/UpcomingCourses'>
                            <button style={{marginTop: '10px'}}>Order now</button>
                        </NavLink>
                    } />
                </div>
            </div>
        </div>
    );
};

export default About;
