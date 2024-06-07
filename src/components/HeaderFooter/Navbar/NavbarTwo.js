import { GoHomeFill } from "react-icons/go";
import '../../1_MediaAssets/Styles/All.css';
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

        <a className="nav-link" style={{margin: '0px 0px 0px 20px', zIndex: '2', cursor: 'pointer', position: 'absolute', left: '0'}} href='/'>
          <h1 style={{color: 'white', fontSize: '30px', fontWeight: '300', marginTop: '30px'}}>Mangokhas</h1>
        </a>



          <div style={{marginTop: '30px', position: 'absolute', top: '-10px', right: '15px'}}>
            <NavLink to="/" className="nav-link" style={{ color: 'white', cursor: 'pointer' }} onClick={() => { closeNavvy(); }}>
              <GoHomeFill className="HomeIcon"/> 
            </NavLink> 
          </div>
      </nav>
    </>
  );
};

export default NavbarTwo;
