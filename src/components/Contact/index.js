import React from 'react'

import './Contact.css'

export const Contact = () => {
      return (
            <div id="contact" className="contact">
                  <h2 className="contact__title">Contacto</h2>

                  <div className="container">
                        <div className="left">
                              <h2 className="left__title">¡Mándanos un mensaje!</h2>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, autem.</p>

                              <form className="form">
                                    <div className="form-group">
                                          <input type="text" className="form-control" placeholder="Ingrese su email"/>
                                    </div>

                                    <div className="form-group">
                                          <textarea className="form-control" placeholder="Ingrese su mensaje"></textarea>
                                    </div>

                                    <input type="submit" className="form-control form-control--submit" value="Enviar"/>
                              </form>
                        </div>

                        <div className="right">
                              <div className="group">
                                    <div className="group__title">Dirección</div>
                                    <p className="group__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cupiditate!</p>
                              </div>

                              <div className="group">
                                    <div className="group__title">Horario</div>
                                    <p className="group__description">Martes - Domingo: 11:00 a.m. - 9:00 p.m.</p>
                              </div>

                              <div className="group">
                                    <div className="group__title">Número de teléfono</div>
                                    <p className="group__description">+506 8947-1787</p>
                              </div>

                              <div className="group">
                                    <div className="group__title">Redes sociales</div>
                                    <div className="social-links">
                                          <a href="https://www.facebook.com/La-Llorona-107057418438703">
                                          <i class='bx bxl-facebook'></i>
                                          </a>
                                          <a href="https://www.instagram.com/__lallorona/" target="_blank">
                                          <i class='bx bxl-instagram' ></i>
                                          </a>
                                          <a href="">
                                          <i class='bx bxl-tiktok' ></i>
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
