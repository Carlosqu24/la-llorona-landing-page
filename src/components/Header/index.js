import React, { useState } from 'react'

import './Header.css';
import logo from '../../assets/images/logo.png'
import navbarRoutes from '../../assets/db/navbarRoutes';

export const Header = () => {

      const [displaysBurgerMenu, setDisplaysBurgerMenu] = useState(false)

      const toggleBurgerButton = () => {
            setDisplaysBurgerMenu(!displaysBurgerMenu)
      }

      return (
            <header className="header">
                  <div className="container">
                        <img src={logo} alt="" className="header__logo" />

                        <svg 
                              width="60px" 
                              height="60px" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                              style={{
                                    position: 'absolute',
                                    display: displaysBurgerMenu || window.innerWidth >= 1200 ? 'inline' : 'none',
                                    left: '75%',
                                    padding: '8px',
                                    zIndex: '123123',
                                    fill: 'white'
                               }}
                               onClick={toggleBurgerButton}
                        >
                                    <path fill-rule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"/></svg>

                      

                        <ul className={`navbar ${displaysBurgerMenu || window.innerWidth >= 1200 ? '' : 'is-closed'}`}>
                              {
                                    navbarRoutes.map(navbarRoute => (
                                          <li 
                                                id={navbarRoute.id}
                                                className="navbar__item"
                                                onClick={toggleBurgerButton}      
                                          >
                                                <a href={navbarRoute.path} className="navbar__link">{navbarRoute.label}</a>
                                          </li>
                                    ))
                              }
                        </ul>


                        <svg 
                              width="60px" 
                              height="60px" 
                              viewBox="0 0 72 72" 
                              id="emoji" 
                              xmlns="http://www.w3.org/2000/svg"
                              className='burger-menu-button'
                              style={{
                                    display: displaysBurgerMenu ? 'none' : 'inline',
                              }}
                              onClick={toggleBurgerButton}
                        >
                              <g id="color"/>
                              <g id="hair"/>
                              <g id="skin"/>
                              <g id="skin-shadow"/>
                              <g id="line">
                              <line x1="16" x2="56" y1="26" y2="26" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                              <line x1="16" x2="56" y1="36" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                              <line x1="16" x2="56" y1="46" y2="46" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                              </g>
                        </svg>

                        
                  </div>
            </header>
      )
}
