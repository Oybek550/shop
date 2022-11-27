import React from "react";
import './cart.scss';



const Cart = ({products,modal}) => {

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
            <button>-</button>
            <button>+</button>
          </span>
        </div>
        )
      })}
    </div>)
}
export default Cart;