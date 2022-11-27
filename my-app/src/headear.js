import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,Row,Col } from 'react-bootstrap'
import { FiShoppingCart } from 'react-icons/fi';

const Headear = ({data,addtocart}) => {
  return(<>
   <div className="head">
   {data.product.map((item) => {
      return(<div key={item.id} className="carts">
             <img src={item.img}/>
             <h5>{item.tittle}</h5>
             <p>${item.price}</p>
             <h5>{item.desc}</h5>
            <button onClick={()=>addtocart(item)}><FiShoppingCart className="fs-5 "/> Add</button>
      </div>)
    })}
   </div>
  </>)
}
export default Headear;