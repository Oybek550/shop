import React from "react";
import './cart.scss';



const Cart = ({products,modal,handleclick,sum}) => {
     
      const purchase = () => {
        alert(`Subtotal $${sum}`)
      }
 
    return(<div className={modal ? "model" : "hide"}>
  
    {products.length === 0 ? <span><h1>no product</h1> <img className="w-75" src={'https://i.pinimg.com/originals/b1/03/3b/b1033bc996c69d3a6003c2fa07281aaf.gif'} alt="loader"/></span> :
    products.map((item) => {
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
      <div className="d-flex justify-content-between">
        <h5>Total </h5>
        <h5>$: {sum}</h5>
        </div>
      <div className=" d-flex justify-content-center mb-2">
        <button className="bg-success rounded-3" onClick={()=>purchase()}>Purchase</button></div>
    </div>)
}
export default Cart;