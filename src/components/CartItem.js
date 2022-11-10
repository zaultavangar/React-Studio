import "./CartItem.css";

export default function CartItem (props) {

  const {name, image, price, totalPrice} = props 

  const setPrice = (price) => {
    return "$" + (price).toFixed(2)
  }

  const getQuantity = (price, totalPrice) => {
    return Math.round(totalPrice/price)
  }

  return (
        
        <div className="cart-item">       
          <h5>{name} </h5>
          <div className="cart-flex">
            <div>
              <img src={image} href="Menu Item" width="90" height="72"></img>
            </div>
            <div>
              <p>Quantity: {getQuantity(price, totalPrice)}</p>
              <p>{setPrice(totalPrice)}</p>
            </div>
            
            
          </div>
        </div>


  )
}