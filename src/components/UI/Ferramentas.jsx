
import React from 'react'
import '../../styles/ferramentas.css'
import logo1 from '../../assets/img/logo-1.png'
import logo2 from '../../assets/img/logo-2.png'
import logo3 from '../../assets/img/logo-3.png'
import logo4 from '../../assets/img/logo-4.png'



const Ferramentas = () => {
  return (
  <section id='ferramentas'>
    <div className="container tools__container">
        <div className="tools__top">
            <h2 className="section__title">Ferramentas do
            <span className='highlights'> Curso</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing <br/> 
            elit. Eaque dignissimos molestias harum temporibus unde cum.</p>            
        </div>

        <div className="tools__wrapper">

            <div className="tools__item" data-aos="zoom-in" data-aos-duration="1500">
                <span className='tools__icon'><img src={logo1} alt="..." /></span>
                <div className="tools__content">
                    <h4>Html 5</h4>
                    <p>Lorem ipsum dolor.</p>
                </div>
            </div>

            <div className="tools__item" data-aos="zoom-in" data-aos-duration="1500">
                <span className='tools__icon'><img src={logo2} alt="..." /></span>
                <div className="tools__content">
                    <h4>CSS 3</h4>
                    <p>Lorem ipsum dolor.</p>
                </div>
            </div>

            <div className="tools__item" data-aos="zoom-in" data-aos-duration="1500">
                <span className='tools__icon'><img src={logo3} alt="..." /></span>
                <div className="tools__content">
                    <h4>JavaScript</h4>
                    <p>Lorem ipsum dolor.</p>
                </div>
            </div>

            <div className="tools__item" data-aos="zoom-in" data-aos-duration="1500">
                <span className='tools__icon'><img src={logo4} alt="..." /></span>
                <div className="tools__content">
                    <h4>Bootstrap</h4>
                    <p>Lorem ipsum dolor.</p>
                </div>
            </div>

              
        </div>        
    </div>
  </section>
  )
}

export default Ferramentas