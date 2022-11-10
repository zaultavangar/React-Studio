import "./App.css";
import { useState, useCallback, useEffect} from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import CartItem from "./components/CartItem";
import CartTotal from "./components/CartTotal";


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
  const [cartHeight, setCartHeight] = useState(0)

  const handleHeight= () => {
    var lastElement = document.getElementById("end")
    var rect = lastElement.lastChild.offsetTop + 175
    console.log(rect)
    setCartHeight(rect);
  }

  const handleClick = useCallback((item) => {
    setCartCount(cartCount + 1)
    if (!cart.includes(item)) {
      cart.push(item)
      handleHeight()
    }
    else {
      var index = cart.indexOf(item)
      if (index !== -1){
        item.totalPrice += item.price 
        cart.splice(index, 1, item)
      }
    }
    setCart(cart)

  }, [cart, cartCount, setCart])





  return (
   
    <div className="App">
      <div className="bakery-menu">
        <h1>MY BAKERY</h1> {/* TODO: personalize your bakery (if you want) */}
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
      <div className="bakery-cart" style={{height: cartHeight}}>
        <h2>CART</h2>
        <div className="cart" id="end">
          {cart.map((item) => (
            <CartItem 
              name = {item.name}
              image = {item.image}
              price = {item.price}
              totalPrice = {item.totalPrice}
            />

          ))}
           <CartTotal
              cart = {cart}
            />
      </div>     
    </div>
  </div>
  );
}

export default App;
