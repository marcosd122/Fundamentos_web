import React from 'react'
import "../../styles/objetivos.css"


function Objetivos() {
  return (
    <section id='objetivos'>
        <div className="container">
            <div className="goals__top">
                <h2 className="section__title">
                   Conquiste seus<span className='highlights'> objetivos</span> com planejamento.
                </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing <br/>
                elit. Omnis asperiores, rem voluptatum sit in ratione.</p>
            </div>

            <div className="goals__wrapper">

                <div className="goals__item" data-aos="fade-up" data-aos-duration="1500">
                    <div className="goals__card-top">
                        <h2 className='section__title'>Objetivos - planejamento</h2>
                        <h2 className="goals section__title">Conquistas - <span>1 Semestre</span></h2>
                    </div>

                    <div className="util">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Lorem ipsum dolor sit.</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Lorem ipsum dolor sit.</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Lorem ipsum dolor sit.</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Lorem ipsum dolor sit.</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Lorem ipsum dolor sit.</li>
                        </ul>
                        <button className="register__btn">Saiba mais</button>
                    </div>                    
                </div>

                <div className="goals__item goals__item-02" data-aos="fade-up" data-aos-duration="1500">
                    <div className="goals__card-top">
                        <h2 className='section__title'>Objetivos - planejamento</h2>
                        <h2 className="goals section__title">Conquistas - <span>2 Semestre</span></h2>
                    </div>

                    <div className="util">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Lorem ipsum dolor sit.</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Lorem ipsum dolor sit.</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Lorem ipsum dolor sit.</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Lorem ipsum dolor sit.</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Lorem ipsum dolor sit.</li>
                        </ul>
                        <button className="register__btn">Saiba mais</button>
                    </div>                    
                </div>

                <div className="goals__item" data-aos="fade-up" data-aos-duration="1500">
                    <div className="goals__card-top">
                        <h2 className='section__title'>Objetivos - planejamento</h2>
                        <h2 className="goals section__title">Conquistas - <span>3 Semestre</span></h2>
                    </div>

                    <div className="util">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Lorem ipsum dolor sit.</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Lorem ipsum dolor sit.</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Lorem ipsum dolor sit.</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Lorem ipsum dolor sit.</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Lorem ipsum dolor sit.</li>
                        </ul>
                        <button className="register__btn">Saiba mais</button>
                    </div>                    
                </div>

            </div>
        </div>
    </section>
  )
}

export default Objetivos