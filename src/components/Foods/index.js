import React from 'react'

import './Foods.css'

import foodsDb from '../../assets/db/foods.json';

export const Foods = () => {
      return (
            <div id="foods" className="foods">
                  <div className="container">
                        <h2 className="foods__title">Comidas</h2>
                        <div className="foods-flex">
                              {
                                    foodsDb.map(food => (
                                          <div className="food-card" key={food.id}>
                                                <img className="food-card__img" src={food.imgUrl} alt="" />
                                                <div className="food-card__body">
                                                      <h2 className="food-card__title">{food.title}</h2>
                                                      <p className="food-card__description">{food.description}</p>
                                                      <span className="food-card__price">₡{food.price}</span>
                                                </div>
                                          </div>
                                    ))
                              }
                        </div>
                  </div>
            </div>
      )
}
