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

                        <ul className={`navbar ${displaysBurgerMenu ? '' : 'is-closed'}`}>

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

                        <button
                              className='burger-menu-button'
                              onClick={toggleBurgerButton}
                        >Menu</button>
                  </div>
            </header>
      )
}
