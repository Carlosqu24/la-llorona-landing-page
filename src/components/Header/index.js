import React from 'react'

import './Header.css';
import logo from '../../assets/images/logo.png'

export const Header = () => {
      return (
            <header className="header">
                  <div className="container">
                        <img src={logo} alt="" className="header__logo" />

                        <ul className="navbar">
                              <li className="navbar__item">
                                    <a href="#" className="navbar__link">Inicio</a>
                              </li>

                              <li className="navbar__item">
                                    <a href="#menu" className="navbar__link">Menú</a>
                              </li>

                              <li className="navbar__item">
                                    <a href="#contact" className="navbar__link">Contacto</a>
                              </li>
                        </ul>
                  </div>
            </header>
      )
}
