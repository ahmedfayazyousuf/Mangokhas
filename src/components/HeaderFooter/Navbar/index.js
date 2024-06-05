import '../../1_MediaAssets/Styles/All.css';
import Burger from '../../1_MediaAssets/BrandImages/Burger.png';
import { NavLink } from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react';

const NavbarMain = () => {
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

        <NavLink className="nav-link" style={{margin: '0px 0px 0px 20px', zIndex: '2'}} to="/">
          <h1 style={{color: 'white', fontSize: '30px', fontWeight: '300', marginTop: '30px'}}>Mangokhas</h1>
        </NavLink>

        <label htmlFor="check" className="checkbtn">
          <img src={Burger} alt='Burger' className='Burger' style={{ width: '27px', height: '22px', filter: 'brightness(1000%)' }}></img>
        </label>

        <ul>
          <li>
            <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? '#d49400' : 'white' })} onClick={closeNavvy} to="/">
              Home 
            </NavLink> 
          </li>
          <li>
            <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? '#d49400' : 'white' })} onClick={closeNavvy} to="/About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? '#d49400' : 'white' })} onClick={closeNavvy} to="/UpcomingCourses">
              Upcoming courses
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? '#d49400' : 'white' })} onClick={closeNavvy} to="/Faculty">
              Faculty
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? '#d49400' : 'white' })} onClick={closeNavvy} to="/Resources">
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" style={({ isActive }) => ({ color: isActive ? '#d49400' : 'white'})} onClick={closeNavvy} to="/Contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarMain;
