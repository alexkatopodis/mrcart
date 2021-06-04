import React from 'react';
import './style.css';
import Icon01 from '../../assets/image/icon01.jpg';
import Icon02 from '../../assets/image/icon02.jpg';
import Icon03 from '../../assets/image/icon03.jpg';
import Icon04 from '../../assets/image/icon04.jpg';
import Icon05 from '../../assets/image/icon05.jpg';
import Icon06 from '../../assets/image/icon06.jpg';

export default function SimpleCard() { 
  

  return (    
  
    <div className="card">      
      <div className="card-body">
        <div className="card-icon">
          <img src={Icon01} alt='sapato' />
        </div>
        <p className="card-text">NÃO MOLHE SEU ORIGINAL MR.CAT. SE MOLHAR, DEIXO-O SECAR NATURALMENTE NA SOMBRA.</p>
      </div> 

      <div className="card-body">
        <div className="card-icon">
        <img src={Icon02} alt='sapato' />
        </div>
        <p className="card-text">NUNCA COLOQUE-O NO SOL OU EM LUGARES QUE AQUEÇAM.</p>
      </div> 

      <div className="card-body">
        <div className="card-icon">
        <img src={Icon03} alt='sapato' />
        </div>
        <p className="card-text">DEIXE O SAPATO EM LUGARES AREJADOS PARA ELIMINAR ODORES E SUORES ABSORVIDOS.</p>
      </div>
      
      <div className="card-body">
        <div className="card-icon">
        <img src={Icon04} alt='sapato' />
        </div>
        <p className="card-text">NÃO DEIXE-O SEM USO DURANTE LONGOS PERÍODOS. DEPOIS DE UM TEMPO, PODERÁ APRESENTAR PROBLEMAS DE DESCOLAGEM OU RESSECAMENTO.</p>
      </div> 

      <div className="card-body">
        <div className="card-icon">
        <img src={Icon05} alt='sapato' />
        </div>
        <p className="card-text">OBJETOS PONTIAGUDOS E SUPERFÍCIES ÁSPERAS PODEM DANIFICAR O SEU MR.CAT.</p>
      </div> 

      <div className="card-body">
        <div className="card-icon">
        <img src={Icon06} alt='sapato' />
        </div>
        <p className="card-text">SAPATOS COM A SOLA EM PU POLIURETANO DEVEM TER UM USO CONTÍNUO. AS MOLÉCULAS DO MATERIAL PRECISAM ESTAR EM CONSTANTE MOVIMENTO PARA MANTER A SUA RESISTÊNCIA</p>
      </div>       
      
     </div>

    
  );
}