import React from 'react';
import './style.css';
import Img02 from '../../assets/image/img02.jpg';
import Img03 from '../../assets/image/img03.jpg';
import Img04 from '../../assets/image/img04.jpg';

export default function CardBottom() {
    return (

        <div className="cardbottom"> 
                {/* <img className='.cardbottom-img' src={Img02} alt='imagemspray' />       */}
                
      
        <div className="cardbottom-body">  
        <img className='card-img' src={Img02} alt='imagemspray' />           
        
        <div className="cardbottom-subtittle">
          <strong>IMPERMEABILIZANTE<br></br></strong>
          * PROTEGE COM EFICIÊNCIA À SUJEIRAS COMO: CAFÉ, REFRIGERANTES, ÓLEOS, MOLHOS, ÁGUA... SEM AFETAR AS CARACTERÍSTICAS ORIGINAIS DO MATERIAL.<br>
        </br>* PODE SER USADO EM TODOS OS TIPOS DE MATERIAIS, COMO: COURO, CAMURÇA, NOBUCK, VELLOUR, TECIDOS, NYLON, MATERIAL SINTÉTICO E OUTROS.<br>
        </br>* FORMULAÇÃO ESPECIAL QUE NÃO OBSTRUI OS POROS DO COURO, GARANTINDO TOTAL TRANSPIRAÇÃO/RESPIRAÇÃO.<br>
        </br>* FACILITA A LIMPEZA E IMPEDE A PENETRAÇÃO DE SUJEIRAS NO MATERIAL.<br>
        </br>* FABRICADO NA VERSÃO INCOLOR, E ADEQUADO PARA ARTIGOS DE QUALQUER COR.<br>
        </br>* VOLUME: 165ML
        </div>    
      </div>

      <div className="cardbottom-body-left">  
              
        
        <div className="cardbottom-subtittle-left">
        <strong>LIMPA COURO<br></br></strong>
          * LIMPEZA DELICADA E EFICIENTE PARA SAPATOS E BOLSAS EM COURO.<br>
        </br>* PROPORCIONA MAIOR PROTEÇÃO, HIDRATAÇÃO PROFUNDA SEM AGREDIR O MATERIAL OU CRAQUELAR.<br>
        </br>* FEITO COM CERAS NATURAIS, O LIMPA COURO MR. CAT DEVOLVE O BRILHO NATURAL DO COURO.<br>
        </br>* DISPONÍVEL EM EMBALAGEM DE 90G        
        </div>    
        <img className='card-img-left' src={Img03} alt='imagemspray' /> 
      </div>

      <div className="cardbottom-body">  
        <img className='card-img' src={Img04} alt='imagemspray' />           
        
        <div className="cardbottom-subtittle">
          <strong>AMACIANTE<br></br></strong>
          * CONSISTÊNCIA LÍQUIDA, EFICAZ EM CALÇADOS DE COURO.<br>
        </br>* AMACIA E MOLDA OS CALÇADOS DE COUROS LISOS E ACAMURÇADOS.<br>
        </br>* AUMENTA O CONFORTO AOS PÉS EM CALÇADOS MUITO APERTADOS.<br>
        </br>* PODE SER UTILIZADO REPETIDAS VEZES<br>
        </br>* VOLUME: 60ML 
        </div>    
      </div>
     

      

      </div>

      

    )
}