import React, { useState, useEffect } from 'react';
import './LeftSidebar.css';
import { NavLink } from 'react-router-dom';
import Logo from './Logo.png';
import book from './book.png';
import building from './building-4.png';
import document from './document.png';
import money from './dollar-square.png';
import grid from './grid-5.png';
import note from './note.png';
import discount from './receipt-discount.png';
import lock from './lock.png';
import city from './city.png';


const LeftSidebar = ({ setShowSidebar, showSidebar, isMobile }) => {

  const linkData = [
    { path: '/', title: 'Dashboard', active: true, logo: grid },
    { path: '/', title: 'Company', active: false, logo: building },
    { path: '/', title: 'Documents', active: false, logo: document },
    { path: '/', title: 'Services', active: false, logo: note },
    { path: '/', title: 'Compliance', active: false, logo: discount },
    { path: '/', title: 'Books', active: false, logo: book },
    { path: '/', title: 'Money', active: false, logo: money },
  ];

  return (
    <>
      <div className={`LeftSidebar ${isMobile ? 'offcanvas' : ''} ${showSidebar && isMobile ? 'show' : ''}`}>
        <div className="sidebar-header">
          <NavLink to="/">
            <img src={Logo} className="my-5 m-2" style={{ height: '29px', width: '129px' }} alt="1TAP" />
          </NavLink>
          {isMobile && (
            <button
              type="button"
              className="btn-close p-3"
              onClick={() => setShowSidebar(false)}
            > </button>
          )}
        </div>

        <div className="tabs">
          {linkData.map(({ path, title, active, logo }, index) => (
            <NavLink key={index} className="tabLinks my-1" to={path}>
              <div className={` ${active ? 'tab activate d-flex' : 'tab d-flex'}`}>
                <img src={logo} alt={title} />
                <span className="d-flex w-75 justify-content-between">
                  <span className="">{title}</span>
                  {!active && <img src={lock} alt={title} />}
                </span>
              </div>
            </NavLink>
          ))}
        </div>

        <div className="building px-4">
          <div>
            <img className="px-2" src={city} alt="city" />
            Your Company
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
