import React from 'react';
import './style.css';
import Img02 from '../../assets/image/img02.jpg';

export default function CardBottom() {
    return (

        <div className="cardbottom"> 

        <img className='cardbottom-img' src={Img02} alt='imagemspray' />      
      <div className="cardbottom-body">        
        <div className="cardbottom-tittle"><strong>IMPERMEABILIZANTE</strong></div>
        <div className="cardbottom-tittle">* PROTEGE COM EFICIÊNCIA À SUJEIRAS COMO: CAFÉ, REFRIGERANTES, ÓLEOS, MOLHOS, ÁGUA... SEM AFETAR AS CARACTERÍSTICAS ORIGINAIS DO MATERIAL.</div>
        <div className="cardbottom-tittle">* PODE SER USADO EM TODOS OS TIPOS DE MATERIAIS, COMO: COURO, CAMURÇA, NOBUCK, VELLOUR, TECIDOS, NYLON, MATERIAL SINTÉTICO E OUTRO.S</div>
        <div className="cardbottom-tittle">* FORMULAÇÃO ESPECIAL QUE NÃO OBSTRUI OS POROS DO COURO, GARANTINDO TOTAL TRANSPIRAÇÃO/RESPIRAÇÃO.</div>
        <div className="cardbottom-tittle">* FACILITA A LIMPEZA E IMPEDE A PENETRAÇÃO DE SUJEIRAS NO MATERIAL.</div>
        <div className="cardbottom-tittle">* FABRICADO NA VERSÃO INCOLOR, E ADEQUADO PARA ARTIGOS DE QUALQUER COR.</div>
        <div className="cardbottom-tittle">* VOLUME: 165ML</div>
      </div>

      

      </div>

      

    )
}