import React from "react";
import './top.scss';
import { useState } from "react";
const logo = 'https://cdn.dribbble.com/users/722843/screenshots/6462327/dribbble.gif'
const Top = ({openModal}) => {
    
  
    return(
    <div  className='navbar '>
          <div className='logo '><img src={logo} /></div>
          <div   className='cart'><p  onClick={()=>openModal()}>Cart</p></div>
      </div>
  
    )
}
export default Top;