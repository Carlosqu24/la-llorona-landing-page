import React from 'react';

import './FoodPackages.css';

import db from '../../assets/db/foodPackages.json'

export const FoodPackages = () => {
      return (
            <div id="food-packages" className="food-packages">
                  <h2 className="food-packages__title">Packs</h2>

                  <div className="container">
                        <div className="food-packages-grid">
                              {
                                    db.map(pack => (
                                          <div className="pack" key={pack.id}>
                                                <div className="pack__left">
                                                      <h2 className="pack__name">{pack.name}</h2>
                                                      <p className="pack__quantity">{pack.quantity}</p>
                                                </div>
                                                
                                              

                                                <p className="pack__price">₡{pack.price}</p>
                                          </div>
                                    ))
                              }
                        </div>
                  </div>
            </div>
      )
}
