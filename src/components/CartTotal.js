import "./CartTotal.css";
import { useCallback} from "react";

export default function CartTotal (props) {
  const {cart} = props
 
  var sum = 0


  const getTotal = useCallback ((sum) => {
    sum = 0
    cart.forEach((element)=> {
      sum += element.totalPrice
    })
    return "$" + sum.toFixed(2)
  }, [cart])

  if (cart.length > 0) {
    return ( 
   
      <div >
        <h3 className="span-1">Total: </h3>
        <h3 className="span-2">{getTotal(sum)}</h3>    
      </div>
    )
  }
  else {
    return (
      <div>
        <span><i>Your cart is empty.</i></span>
      </div>
      
    )
  }
  
}