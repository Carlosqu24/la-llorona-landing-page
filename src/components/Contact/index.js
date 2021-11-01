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
                                          <input type="text" className="form-control" placeholder="Ingrese su mensaje"/>
                                    </div>

                                    <input type="submit" className="form-control form-control--submit" value="Enviar"/>
                              </form>
                        </div>

                        <div className="right">
                              <div className="group">
                                    <div className="group__title">Dirección</div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cupiditate!</p>
                              </div>

                              <div className="group">
                                    <div className="group__title">Horario</div>
                                    <p>Martes - Domingo: 11:00 a.m. - 9:00 p.m.</p>
                              </div>

                              <div className="group">
                                    <div className="group__title">Síguenos</div>
                                    <div className="social-links">
                                          <a href="https://www.facebook.com/La-Llorona-107057418438703">
                                          <i class='bx bxl-facebook bx-sm'></i>
                                          </a>
                                          <a href="https://www.instagram.com/__lallorona/" target="_blank">
                                          <i class='bx bxl-instagram bx-sm' ></i>
                                          </a>
                                          <a href="">
                                          <i class='bx bxl-tiktok bx-sm' ></i>
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
