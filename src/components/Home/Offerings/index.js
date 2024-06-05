import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import TextAnim from '../../1_MediaAssets/Styles/FadeAnimation.jsx';
import Mangoes from '../../1_MediaAssets/SectionImages/About1.jpg';
import Pickles from '../../1_MediaAssets/SectionImages/About3.jpg';

const Offerings = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', backgroundColor: 'black', flexDirection: 'column' }}>
            <TextAnim Body={
                <h1 className='HeaderText' style={{ color: 'white', width: '100%', textAlign: 'center' }}>Our <span className='fontSpecial' style={{ color: '#d49400' }}>Offerings </span></h1>
            } />
            <Splide
                options={{
                    type: 'loop',
                    perPage: 4,
                    perMove: 1,
                    gap: '30px',
                    autoplay: true,
                    pauseOnHover: true,
                    resetProgress: false,
                    arrows: true,
                    pagination: true,
                    breakpoints: {
                        1630: {
                            perPage: 3,
                        },
                        870: {
                            perPage: 2,
                        },
                        768: {
                            perPage: 1,
                        },
                    },
                }}
                style={{ width: '100vw', margin: '20px 0px', background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <SplideSlide>
                    <div className='imageZoom' style={{ backgroundImage: `url('${Mangoes}')` }}>
                        <p style={{ position: 'absolute', top: '20px', right: '0', background: '#d49400', margin: '0', color: 'black', padding: '2px 15px', fontSize: '12px', fontWeight: '900' }}>PKR &nbsp;1000 /-&nbsp;</p>
                        <p className='fontSpecial' style={{position: 'absolute', bottom: '0', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)' }}>Khas Aam</p>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className='imageZoom' style={{ backgroundImage: `url('${Pickles}')` }}>
                        <p style={{ position: 'absolute', top: '20px', right: '0', background: '#d49400', margin: '0', color: 'black', padding: '2px 15px', fontSize: '12px', fontWeight: '900' }}>PKR &nbsp;1000 /-&nbsp;</p>
                        <p className='fontSpecial' style={{position: 'absolute', bottom: '0', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)' }}>Khas Aam</p>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className='imageZoom' style={{ backgroundImage: `url('${Mangoes}')` }}>
                        <p style={{ position: 'absolute', top: '20px', right: '0', background: '#d49400', margin: '0', color: 'black', padding: '2px 15px', fontSize: '12px', fontWeight: '900' }}>PKR &nbsp;1000 /-&nbsp;</p>
                        <p className='fontSpecial' style={{position: 'absolute', bottom: '0', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)' }}>Khas Aam</p>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className='imageZoom' style={{ backgroundImage: `url('${Pickles}')` }}>
                        <p style={{ position: 'absolute', top: '20px', right: '0', background: '#d49400', margin: '0', color: 'black', padding: '2px 15px', fontSize: '12px', fontWeight: '900' }}>PKR &nbsp;1000 /-&nbsp;</p>
                        <p className='fontSpecial' style={{position: 'absolute', bottom: '0', color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)' }}>Khas Aam</p>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default Offerings;
