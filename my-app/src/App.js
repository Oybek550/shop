import './App.css';
import './main.scss';
import { Button,Form,Row,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';
import Top from './top.scss/top';
import Headear from './headear';
import Cart from './cart/cart';

const img1 = 'https://contents.mediadecathlon.com/p2155510/2d4c941c14f1be10172d8977107329a6/p2155510.jpg?format=auto&quality=70&f=650x0';
const img2 = 'https://contents.mediadecathlon.com/p2155551/11e0e6f8f6f4906c580007288ce1bdd0/p2155551.jpg?format=auto&quality=70&f=650x0'
const img3 = 'https://contents.mediadecathlon.com/p2155595/a56a06d56afdd03e264c3ac9aa3960d2/p2155595.jpg?format=auto&quality=70&f=650x0'
const img4 = 'https://contents.mediadecathlon.com/p2155624/e5ba0909e53cb75ef083fdfdc13f294e/p2155624.jpg?format=auto&quality=70&f=650x0'
const img5 = 'https://contents.mediadecathlon.com/p2174720/e723d5ac35da9451f2777fb07d5ca882/p2174720.jpg?format=auto&quality=70&f=650x0'
const img6 = 'https://contents.mediadecathlon.com/p2155623/825e75fae685c7425283eac6cf08310f/p2155623.jpg?format=auto&quality=70&f=650x0'
const img7 = 'https://contents.mediadecathlon.com/p2254448/b4403f00b9bad17a01835cabdb44db8c/p2254448.jpg?format=auto&quality=70&f=650x0'
const img8 = 'https://contents.mediadecathlon.com/p2155482/a8ae2632d6e351cd102a57f8a5f14d35/p2155482.jpg?format=auto&quality=70&f=650x0'
const img9 = 'https://contents.mediadecathlon.com/p2155507/7d9c389c4726270045d181ee858a67c5/p2155507.jpg?format=auto&quality=70&f=650x0'

const data = {
  product : [
    {
      id:1,
      img:img1,
      tittle:'Kalenji',
      desc:'Mens Running Shoes Run Active - Black/Orange',
      price:50,
      quantity: 0,
     },
    {
      id:2,
      img:img2,
      tittle:'Kalenji',
      desc:'Mens Running Shoes Run Active - Dark Blue',
      price:50,
      quantity: 0,
     },
    {
      id:3,
      img:img3,
      tittle:'Kalenji',
      desc:'Mens Running Shoes Run Active - navy/Blue ',
      price:50,
      quantity: 0,
     },
    {
      id:4,
      img:img4,
      tittle:'Kalenji',
      desc:'Mens Running Shoes Run Active - Navy/Red',
      price:50,
      quantity: 0,
     },
    {
      id:5,
      img:img5,
      tittle:'Kalenji',
      desc:'Womens Running Shoes Run Cushion - dark/Orange',
      price:60,
      quantity: 0,
     },
    {
      id:6,
      img:img6,
      tittle:'Kalenji',
      desc:'Womens Running Shoes Run Cushion - Melon',
      price:60,
      quantity: 0,
     },
    {
      id:7,
      img:img7,
      tittle:'Kalenji',
      desc:'Womens Running Shoes Run Cushion - Black',
      price:60,
      quantity: 0,
     },
    {
      id:8,
      img:img8,
      tittle:'Kalenji',
      desc:'Womens Running Shoes Run Cushion - Green',
      price:60,
      quantity: 0,
     },
    {
      id:9,
      img:img9,
      tittle:'Kalenji',
      desc:'Womens Running Shoes Run Cushion - navy/Pink',
      price:60,
      quantity: 0,
     },
  ]
}
function App() {
  
  const [card,setCard] = useState([]);
  const [open, setOpen] = useState(false)
  const [cost,setCost] = useState()

   const addtocart = (item) => {
      const product = [...card];
      if(!product.includes(item)){
        product.push(item)
      }
       let index = product.indexOf(item)
        product[index].quantity++
        
       setCard(product)
     
   } 
   const openModal = () => {
       setOpen(!open)
     
   }
   const remov = () => {
     setOpen(false)
   }

    const handleclick = (item,e) => {
      const product = [...card]
      let index = product.indexOf(item)
      if(e === '+'){
        product[index].quantity++
      }else {
        if(product[index].quantity > 1){
          product[index].quantity--
        }else{
          product.splice(0,1)
        }
      }
     
      setCard(product)
    
    }

   useEffect(() => {
    let total = 0;
    for (var i = 0; i < card.length; i++){
       total += card[i].price * card[i].quantity;   
    }
     setCost(total)

   },[card])
   
  return (
     <div className='container'>
      <Top openModal={openModal}/>
      
      <Headear  data={data} addtocart={addtocart}/>
<Cart products={card} modal={open} remov={remov}  handleclick={handleclick} sum={cost}/>   

     </div>
  );
}

export default App;
