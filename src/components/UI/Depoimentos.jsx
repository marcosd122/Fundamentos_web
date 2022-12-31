import React from 'react'
import "../../styles/depoimentos.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper React - https://swiperjs.com/demos#navigation

// Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// Required modules
import { EffectCards } from "swiper";
import avatar01 from '../../assets/img/avatar01.png'
import avatar02 from '../../assets/img/avatar02.png'

export default function Depoimentos() {
  return (
    <>
    <section>
    
        <div className="container sliders">       

        <h2 className='section__title'>Depoimentos</h2>
            
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slide__item">
                <div className="slide__img-01"><img src={avatar01} alt="..." /></div>
                <h4>Fulano Fulo</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eveniet enim cum eum tenetur consectetur magni odit repellendus atque totam accusamus neque laudantium praesentium quos beatae quaerat nobis, ut quisquam.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide__item">
                <div className="slide__img-02"><img src={avatar02} alt="..." /></div>
                <h4>Beltrano Bel</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eveniet enim cum eum tenetur consectetur magni odit repellendus atque totam accusamus neque laudantium praesentium quos beatae quaerat nobis, ut quisquam.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide__item">
                <div className="slide__img-03"><img src={avatar01} alt="..." /></div>
                <h4>Ciclano Ciclo</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eveniet enim cum eum tenetur consectetur magni odit repellendus atque totam accusamus neque laudantium praesentium quos beatae quaerat nobis, ut quisquam.</p>
            </div>
        </SwiperSlide>

      </Swiper>
        </div>
    </section>
    </>
  );
}