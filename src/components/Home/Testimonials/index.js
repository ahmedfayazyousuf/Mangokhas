import React from 'react';
// import TextAnim from '../../1_MediaAssets/Styles/FadeAnimation.jsx';
import IJ1 from '../../1_MediaAssets/SectionImages/IJ1.jpg';
import Video from '../../1_MediaAssets/SectionImages/IJVideo.mp4';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const About = () => {
    const testimonials = [
      "Experience Pakistan's finest produce with Mangokhas! Handpicked mangoes from Mirpurkhas' orchards. Supreme quality, peak ripeness, unmatched flavor.",
      "Love Mangokhas mangoes! Exceptional quality, delightful flavor. Perfect for summer treats and refreshing drinks. Can't have enough of them!",
      "Shikarpur Achar is the best! Tangy, spicy, and full of flavor. Adds a perfect kick to any meal. Would definitely recommend for scorching summers",
      "Mangokhas mangoes are divine! Bursting with sweetness, rich aroma. The taste of summer in every bite. Luxury packing, top notch selection.",
      "Shikarpur Achar is a must-have! Bold flavors, authentic taste. Elevates every dish to the next level. Ready to be gifted to someone, LOVE THEM!",
      "Experience Pakistan's finest produce with Mangokhas! Handpicked mangoes from Mirpurkhas' orchards. Supreme quality, peak ripeness, unmatched flavor.",
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };

    const testimonialWithQuotationMarks = testimonials.map(testimonial => `"${testimonial}"`);
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', backgroundColor: 'black' }}>
        <div className='AboutImgTextDiv'>
  
            <div className='AboutImgHolder'>
                <video autoPlay controls style={{ height: '60vh' }}>
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                <img src={IJ1} alt='AboutImage' className='DPhider' style={{ height: '40vh', marginLeft: '-50px', marginTop: '-40px' }} />
            </div>
            
          <div className='AboutTextHolder' style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Slider {...settings} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', height: '100%'}}>
              {testimonialWithQuotationMarks.map((testimonial, index) => (
                <div key={index} style={{ margin: '10px' }}>
                  <p className='texterpara testimonial' style={{ color: 'white', width: '100%', textAlign: 'center', fontStyle: 'italic' }}>{testimonial}</p>
                </div>
              ))}
            </Slider>
          </div>
  
        </div>
      </div>
    );
};

  
  export default About;
  