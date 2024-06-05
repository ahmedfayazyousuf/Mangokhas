import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

import ForumMall from '../../1_MediaAssets/SectionImages/Gallery/ForumMall.png';
import MangoShakeImage from '../../1_MediaAssets/SectionImages/Gallery/MangoShake.jpg';
import BulkOrderImage from '../../1_MediaAssets/SectionImages/Gallery/BulkOrder.jpg';
import OceanMallImage from '../../1_MediaAssets/SectionImages/Gallery/OceanMall.jpg';
import HabbitCity1 from '../../1_MediaAssets/SectionImages/Gallery/HabbitCity1.png';
import HabbitCity2 from '../../1_MediaAssets/SectionImages/Gallery/HabbitCity2.png';
import Junejo from '../../1_MediaAssets/SectionImages/Gallery/Junejo.jpg';
import Review from '../../1_MediaAssets/SectionImages/Gallery/Review.jpg';

const Slider = () => { 

  useEffect(() => {
    const splide = new Splide('.haha-splide', {
      type: 'loop',
      perPage: 4, // Display 3 slides per page by default 
      perMove: 1,
      cover: true,
      height: '85vh',
      speed: 300,
      gap: 15, 
      pagination: false, 
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
    <div className="haha-splide splide" style={{ width: '100vw'}}>
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide slide-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${MangoShakeImage}')`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <p className='fontSpecial imageZoomtexty' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Khas Mango Shake</p>
          </li>

          <li className="splide__slide slide-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${BulkOrderImage}')`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <p className='fontSpecial imageZoomtexty' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Khas Bulk Order</p>
          </li>
          
          <li className="splide__slide slide-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${OceanMallImage}')`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <p className='fontSpecial imageZoomtexty' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Mangkhas @ Ocean Mall</p>
          </li>

          <li className="splide__slide slide-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${ForumMall}')`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <p className='fontSpecial imageZoomtexty' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Mangkhas @ Forum Mall</p>
          </li>

          <li className="splide__slide slide-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${HabbitCity1}')`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <p className='fontSpecial imageZoomtexty' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Mangkhas @ Habbit City</p>
          </li>
          
          <li className="splide__slide slide-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${HabbitCity2}')`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <p className='fontSpecial imageZoomtexty' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Mangkhas @ Habbit City</p>
          </li>

          <li className="splide__slide slide-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${Junejo}')`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <p className='fontSpecial imageZoomtexty' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>Irfan Junejo</p>
          </li>

          <li className="splide__slide slide-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', backgroundColor: 'black', backgroundImage: `url('${Review}')`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <p className='fontSpecial imageZoomtexty' style={{color: 'white', margin: '0', padding: '10px', width: '100%', textAlign: 'center', background: 'rgba(0,0,0,0.7)'}}>User Review</p>
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
