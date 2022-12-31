/* <a href="https://www.flaticon.com/free-icons/www" title="www icons">Www icons created by Freepik - Flaticon</a> */

import React from 'react'
import heroImg from '../../assets/img/people.png'
import computerIcon from '../../assets/img/web.png'
import "../../styles/hero.css"

const Hero = () => {
  return (
    <section id='home'>
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                    <h2 className='section__title' data-aos="fade-up" data-aos-duration="1500">
                        Conhecimento é a chave para a
                        <span className='highlights'> Mudança</span> Transformadora
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>
                        Laboriosam repellendus odit fugit eos! Id, labore.</p>                    
                    <div className="hero__btns" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
                        <button className='register__btn'>Começe a jornada</button>
                        <button className="watch__btn"><span><i class="ri-play-fill"></i></span>Veja o video</button>
                    </div>
                </div>
                <div className="hero__img">
                    <div className="hero__img-wrapper">                    
                    
                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">                                
                                    <div className="box__img">
                                        <img src={heroImg} alt="..." />
                                    </div>
                                </div>
                            </div>                            
                        </div>                        

                        <div className="class__rate" data-aos="fade-right" data-aos-duration="1500">
                            <h5>Avaliação</h5>
                            <span><i class="ri-line-chart-fill"></i></span>
                            <h5>Nota 10</h5>
                        </div>

                        <div className="class__location" data-aos="fade-left" data-aos-duration="1500">
                            <span><i class="ri-map-pin-2-fill"></i></span>
                            <h5>Encontre um escola <br/> perto de você</h5>
                        </div>

                        <div className="computer__icon" data-aos="fade-down" data-aos-duration="1500">
                            <img src={computerIcon} alt="..." />
                        </div>

                    </div>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default Hero