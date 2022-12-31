import React from 'react'
import ProfessoresCard from './ProfessoresCard'
import "../../styles/professores.scss"
import avatar01 from '../../assets/img/theacher-01.png'
import avatar02 from '../../assets/img/theacher-02.png'
import avatar03 from '../../assets/img/theacher-03.png'

function Professores() {
  return (
    <section>

<div className="theacher-container">
      <div className="theacher-header">
        <p className="theacher-title">Professores</p>
        <p className="theacher-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
          nam?
        </p>
      </div>
      <div className="theacher-cards" data-aos="fade-up" data-aos-duration="1500">
        <ProfessoresCard
          image={avatar01}
          name="Professor - 1"
          work="Mestre"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos natus deleniti modi consequatur veritatis? Ullam?"
        />
        <ProfessoresCard
          image={avatar02}
          name="Professor - 2"
          work="Especialista"
          description="Placeat tenetur nulla ipsa modi, quos asperiores error nobis non voluptatibus dolor officiis inventore perspiciatis"
        />
        <ProfessoresCard
          image={avatar03}
          name="Professor - 3"
          work="Doutor"
          description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
        />

        <ProfessoresCard
          image={avatar02}
          name="Professor - 4"
          work="Doutor"
          description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
        />
      </div>
    </div>
    
</section>
  )
}

export default Professores