import React from 'react'

import './Hero.css'
import heroImg from '../../assets/images/hero/hero-img.png'
import heroImg2 from '../../assets/images/hero/hero-img2.png'
import heroImg3 from '../../assets/images/hero/hero-img3.png'

export const Hero = () => {
      return (
            <div id="#" className="hero">
                  <div className="container">
                        <div className="hero-card">
                              <h2 className="hero-card__title">Comida deliciosa para tu vida</h2>
                              <p className="hero-card__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, tempore.</p>
                        </div>

                        <img className="hero__img" src={heroImg3} alt="" />
                  </div>
            </div>
      )
}
