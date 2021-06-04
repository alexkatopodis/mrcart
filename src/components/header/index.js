import React from 'react';
import './style.css';
import SearchIcon from '@material-ui/icons/Search';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';




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
             
             <input type="text" className="form-control"  placeholder= "Busca" aria-label="Busca" />
             
             <div className='bottons'>

             <BottomNavigationAction className='local'
               style={{color: 'white'}}
               label="Local" 
               icon={<RoomOutlinedIcon />} 
               />

              <BottomNavigationAction className='User'
               style={{color: 'white'}}
               label="User" 
               icon={<PersonOutlineOutlinedIcon />} 
               />

               <BottomNavigationAction className='Phone'
               style={{color: 'green'}}
               label="Phone" 
               icon={<PhoneEnabledOutlinedIcon />} 
               />

               <BottomNavigationAction className='Bag'
               style={{color: 'white'}}
               label="Bag" 
               icon={<LocalMallOutlinedIcon />} 
               />
             </div>
         </span>         
        </header>
    )
}

export default Header;