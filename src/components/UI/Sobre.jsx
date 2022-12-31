import React from 'react'
import "../../styles/sobre.css"
import aboutImg from '../../assets/img/about.png'

function Sobre() {
  return (
    <section id='sobre'>
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__img">
                        <img src={aboutImg} alt="..." data-aos="fade-left" data-aos-duration="1500"/>
                    </div>
                    <div className="about__content" data-aos="fade-right" data-aos-duration="1500">
                        <h2 className="section__title">
                        Ensino de uma maneira <span className="highlights">diferente.</span>
                        </h2>
                        <p>                           
                        - Buscar de forma introdutória o entender os conceitos de serviço web e o desenvolvimento web, e as linguagens HTML, CSS e JavaScript.<br/>
                        - Agilizar o desenvolvimento e melhorar nossas interfaces e códigos com frameworks, Criar páginas web.<br/>
                        - Desenvolver/adaptar a parte visual e validativa de um projeto/software para a plataforma web.<br/>
                        - Linguagem de programação web. Plataformas de desenvolvimento. Aplicações web. Acesso e interação com banco de dados. Segurança de sistemas web.    
                        </p>
                        <button className="register__btn">Vamos lá</button>
                    </div>
                    
                </div>
            </div>
                
    </section>
  )
}

export default Sobre