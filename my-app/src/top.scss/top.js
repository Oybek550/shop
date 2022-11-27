import React from "react";
import './top.scss';
const logo = 'https://cdn.dribbble.com/users/722843/screenshots/6462327/dribbble.gif'
const Top = () => {
    return(
    <div className='navbar '>
          <div className='logo '><img src={logo} /></div>
          <div className='cart  '><p>Cart</p></div>
      </div>
  
    )
}
export default Top;