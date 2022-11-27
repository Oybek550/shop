import React from "react";

const Cart = ({product}) => {
    return(<>
      {product.map((item) => {
        return(<div>
         <h1>{item.desc}</h1>
        </div>)
      })}
    </>)
}
export default Cart;