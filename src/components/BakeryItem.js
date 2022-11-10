// TODO: create a component that displays a single bakery item
import "./BakeryItem.css";
import { useState, useCallback } from "react";

export default function BakeryItem(props) {
  const {name, description, price, image, onAddToCart} = props



  const setPrice = (price) => {
    return "$" + (price)
  }
  return ( 
        <div className="menu-item">
        <h4>{name} </h4>
        <p>{description}</p>
        <p>{setPrice(price)}</p>
        <img src={image} href="Menu Item" width="270" height="216"></img>
        <div className="button">
        <button className="add-to-cart"
          onClick={onAddToCart}
          >
            Add to Cart</button> 
        </div>  
        </div>
  )
} 
