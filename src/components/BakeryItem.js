import "./BakeryItem.css";
import { useState, useCallback } from "react";

export default function BakeryItem(props) {
  const {name, description, price, image, onAddToCart} = props



  const setPrice = (price) => {
    return "$" + (price)
  }
  return ( 
        <div className="menu-item">
          <div className="main-info">
            <h4>{name} — </h4><span>{setPrice(price)}</span>
          </div>
          <p>{description}</p>
          <div className="image-wrapper">
            <img src={image} href="Menu Item" width="135" height="108"></img>
          </div>
          <div className="button">
            <button className="add-to-cart"
              onClick={onAddToCart}
              >
              Add to Cart</button> 
          </div>  
        </div>
  )
} 
