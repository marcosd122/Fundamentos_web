import React from 'react'
import "../../styles/footer.css"
import logo from '../../assets/img/web.png'
// eslint-disable-next-line

function Footer() {

  const ano = new Date().getFullYear()
  
  return (
  
    <footer className="footer" data-aos="fade-up" data-aos-duration="1500">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__box">
            <div className="logo">
              <div className="logo__img">
                <img src={logo} alt="..." />
              </div>
              <h2>Fundamentos Web</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure exercitationem natus ratione, neque architecto ullam.</p>
          </div>

          <div className="footer__box">
            
            <h4 className="footer__title">Escola</h4>
            
            <ul className="footer__links">
              <li><a href=" #">Link - 01</a></li>
              
              <li><a href=" #">Link - 02</a></li>
              
              <li><a href=" #" >Link - 03</a></li> 
                          
            </ul>
        </div>



        <div className="footer__box">
            <h4 className="footer__title">Links</h4>

            <ul className="footer__links">
            
              <li><a href=" #">Sobre</a></li>
              <li><a href=" #">Contatos</a></li>
              <li><a href=" #">Apoio</a></li>              
            </ul>
        </div>


        <div className="footer__box">
            <h4 className="footer__title">Links</h4>

            <ul className="footer__links">
            
              <li><a href=" #">Sobre</a></li>
              <li><a href=" #">Contatos</a></li>
              <li><a href=" #">Apoio</a></li>              
            </ul>
        </div>

      </div>
      <p className='copyright'>Copyright - {ano} - Todos os direitos reservados</p>
      </div>
      
    </footer>
    
  )
}

export default Footer