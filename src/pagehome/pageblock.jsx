import React,{Component} from 'react'
import inteligência from '../media/Inteligência.mp4';


export default class Pageblock extends Component  {






   render() {
      return(
        <div   className="block2">
          <div className="flip-box">
           <div className="flip-box-inner">
            <div className="flip-box-front">
        <h2>Front Intely</h2>
        Esperamos que esta iniciativa pioneira e
         inovadora ajude a demonstrar como a IA já faz parte da nossa realidade
         </div>
              <div className="flip-box-back">
              <h2>Back Side</h2>
              <p>  Esperamos que esta iniciativa pioneira e
               inovadora ajude a demonstrar como a IA já faz parte da nossa realidade
              </p>
           </div>
         </div>
      </div>
        <div className="hpcontainer">
           <div className="top">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            <div  className="tabs">
        <p> Este robô não faz parte do curso original em inglês e foi desenvolvido pela nossa equipe como parte do projeto final da Formação Inteligência Artificial em nossa plataforma.
         Os alunos da Formação IA aprendem a construir um agente inteligente como o Delos.
          Esperamos que esta iniciativa pioneira e inovadora ajude a demonstrar como a IA já faz parte da nossa realidade e os profissionais que dominarem a tecnologia estarão prontos para este novo mundo que se apresenta bem diante de nós.
           O Delos é baseado em Processamento de Linguagem Natural, uma das principais áreas de aplicação da Inteligência Artificial.</p>

        <div>
            <video id="video01" controls="controls">
                <source src={inteligência} type="video/mp4"/>
            </video>
        </div>
      </div>
    </div>
  </div>
</div>

      )
   }

}
