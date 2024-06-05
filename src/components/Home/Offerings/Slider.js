import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

import Mangoes from '../../1_MediaAssets/SectionImages/About1.jpg';
import Pickles from '../../1_MediaAssets/SectionImages/About3.jpg';

const Slider = () => { 

  useEffect(() => {
    const splide = new Splide('.faculty-splide', {
      type: 'loop',
      perPage: 4, // Display 3 slides per page by default
      perMove: 1,
      cover: true,
      height: '450px',
      speed: 300,
      breakpoints: {
        1300: {
          perPage: 3, // Display 3 slides per page
        },
        800: {
          perPage: 2, // Display 2 slides per page
        },
        520: {
          perPage: 1, // Display 1 slide per page
        }
      },
    });
    splide.mount();
  }, []);

  return (
    <div className="faculty-splide splide" style={{ width: '100vw', marginTop: '30px'}}>
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide slide-container imageZoom" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${Mangoes}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <p style={{position: 'absolute', top: '20px', right: '0', background: '#d49400', margin: '0', color: 'black', padding: '2px 15px', fontSize: '12px', fontWeight: '900'}}>PKR &nbsp;1000 /-&nbsp;</p>
            <p className='fontSpecial' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Khas Aam</p>
          </li>
          <li className="splide__slide slide-container imageZoom" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${Pickles}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <p style={{position: 'absolute', top: '20px', right: '0', background: '#d49400', margin: '0', color: 'black', padding: '2px 15px', fontSize: '12px', fontWeight: '900'}}>PKR &nbsp;1000 /-&nbsp;</p>
            <p className='fontSpecial' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Khas Aam</p>
          </li>
          <li className="splide__slide slide-container imageZoom" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${Mangoes}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <p style={{position: 'absolute', top: '20px', right: '0', background: '#d49400', margin: '0', color: 'black', padding: '2px 15px', fontSize: '12px', fontWeight: '900'}}>PKR &nbsp;1000 /-&nbsp;</p>
            <p className='fontSpecial' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Khas Aam</p>
          </li>
          <li className="splide__slide slide-container imageZoom" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${Pickles}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <p style={{position: 'absolute', top: '20px', right: '0', background: '#d49400', margin: '0', color: 'black', padding: '2px 15px', fontSize: '12px', fontWeight: '900'}}>PKR &nbsp;1000 /-&nbsp;</p>
            <p className='fontSpecial' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Khas Aam</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Slider;

// Inject styles into the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerHTML = `
  .slide-container {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 0;
    padding: 0;
  }

  .slide-container img {
    width: 100%;
    height: auto;
  }

  .slide-container:hover .overlay {
    opacity: 1;
  }

  .description {
    margin: 0;
    padding: 10px;
    font-size: 14px;
  }

  /* Media query for responsiveness */
  @media (max-width: 800px) {
    .splide__slide {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;
document.head.appendChild(styleSheet);
