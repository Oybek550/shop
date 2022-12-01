import React from "react";
import './cart.scss';



const Cart = ({products,modal,handleclick,sum}) => {
     
      
 
    return(<div className={modal ? "model" : "hide"}>
      
    {products.map((item) => {
        return(
          <div className="product" key={item.id} >
         <img src={item.img}/>
          <div>
          <p>{item.tittle}</p>
          <p>{item.quantity}</p>
          </div>
          
          <span>
          <p> $ {item.price}</p>
            <button onClick={()=> handleclick(item)}>-</button>
            <button onClick={()=> handleclick(item,'+')}>+</button>
          </span>
          
        </div>
        
        )
      })}
      <h5>Total ${sum}</h5>
    </div>)
}
export default Cart;