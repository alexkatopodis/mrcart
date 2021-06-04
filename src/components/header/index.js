import React from 'react';
import './style.css';




const Header = () => {

    return (
        <header>                 
         <span  className='header'>
             <div className='logo'>
                 <span className='M'>M</span>
                 <span className='R'>R.</span>
                 <span className='C'>C</span>
                 <span className='A'>A</span>
                 <span className='T'>T</span>
             </div>
             
             <div className='bottons-products'> 
             <button className='b1'>Feminino</button>
             <button className='b2'>Masculino</button>
             <button className='b3'>Liquidação</button>
             <button className='b4'>Roupas</button>

             </div>
             
             <div className='search'>Busca</div>
             <div className='bottons'>Bottons</div>
         </span>         
        </header>
    )
}

export default Header;