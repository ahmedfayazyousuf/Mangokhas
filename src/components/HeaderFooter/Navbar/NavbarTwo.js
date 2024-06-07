import '../../1_MediaAssets/Styles/All.css';
import Burger from '../../1_MediaAssets/BrandImages/Burger.png';
import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NavbarTwo = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navRef = useRef(null);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const closeNavvy = () => {
    setIsChecked(false);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsChecked(false);
    }
  };

  useEffect(() => {
    if (isChecked) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isChecked]);

  return (
    <>
      <nav ref={navRef} style={{ zIndex: '100' }}>
        <input type="checkbox" id="check" checked={isChecked} onChange={handleCheckboxChange} />

        <a className="nav-link" style={{margin: '0px 0px 0px 20px', zIndex: '2', cursor: 'pointer'}} href='/'>
          <h1 style={{color: 'white', fontSize: '30px', fontWeight: '300', marginTop: '30px'}}>Mangokhas</h1>
        </a>

        <label htmlFor="check" className="checkbtn">
          <img src={Burger} alt='Burger' className='Burger' style={{ width: '27px', height: '22px', filter: 'brightness(1000%)' }}></img>
        </label>

        <ul>
          <li>
            <NavLink to="/" className="nav-link" style={{ color: 'white', cursor: 'pointer' }} onClick={() => { closeNavvy(); }}>
              Home 
            </NavLink> 
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarTwo;
