import React from "react";
import menuData from "../data/menuData";
import "./style.css";

const Menu = ({ addToCart }) => {
  const handleAddToCart = (dish) => {
    addToCart(dish); // add the dish to cart
    alert(`${dish.name} added to cart!`); // show alert
  };

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-grid">
        {menuData.map((dish) => (
          <div key={dish.id} className="menu-card">
            <img src={dish.image} alt={dish.name} className="menu-img" />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p className="price">${dish.price.toFixed(2)}</p>
            <button
              className="btn"
              onClick={() => handleAddToCart(dish)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
