import React from 'react'

import './TacoTuesday.css'

export const TacoTuesday = () => {
      return (
            <div className="taco-tuesday">
                  <h2 className="taco-tuesday__title">Taco Tuesday</h2>

                  <div className="container">
                        <img src="https://interactive.bonappetit.com/tacos/Taco-Grid-Placero.94833d70.png" alt="" />

                        <div className="card">
                              <h2 className="card__title">¡No te pierdas los Taco Tuesday!</h2>
                              <p className="card__text">Por la compra de nuestros paquetes a partis del Fourpack, llevas uno gratis.</p>
                              <p className="card__text">¡No te quedes sin encargar!</p>
                        </div>
                  </div>
            </div>
      )
}
