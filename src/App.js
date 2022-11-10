import "./App.css";
import { useState, useCallback } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import CartItem from "./components/CartItem";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */


  const [cartCount, setCartCount] = useState(0)
  const [cart, setCart] = useState([])


  const handleClick = useCallback((item) => {
    setCartCount(cartCount + 1)
    console.log("Item: ", item)
    if (!cart.includes(item)) {
      cart.push(item)
    }
    else {
      var index = cart.indexOf(item)
      if (index !== -1){
        item.totalPrice += item.price 
        cart.splice(index, 1, item)
      }
    }
    setCart(cart)

  }, [cart, cartCount])

  console.log('cart:', cart)


 
 

  return (
   
    <div className="App">
      <div className="bakery-menu">
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <div className="menu">
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem 
          name = {item.name}
          description = {item.description}
          image = {item.image}
          price = {item.price}
          onAddToCart = {
            () => {
              handleClick(item)
              } 
          }
        />
      
        ))}
        </div>
      </div>
      <div className="bakery-cart">
        <h2>Cart</h2>
        <div className="cart">
          {cart.map((item) => (
            <CartItem 
              name = {item.name}
              image = {item.image}
              price = {item.price}
              totalPrice = {item.totalPrice}
            />
          ))}
      </div>     
    </div>
  </div>
  );
}

export default App;
