import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Cart = ({ cart = [], setCart }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [building, setBuilding] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
    if (!name || !address || !building || !mobile) {
      alert("Please fill all fields!");
      return;
    }

    const orderId = Math.floor(100000 + Math.random() * 900000);
    const order = {
      id: orderId,
      name,
      address,
      building,
      mobile,
      items: cart,
      status: "Preparing",
      total: totalPrice.toFixed(2),
    };

    localStorage.setItem("currentOrder", JSON.stringify(order));

    // Clear cart
    setCart([]);

    alert(`Order placed! Your Order ID is ${orderId}`);
    navigate("/order-tracking");
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item, idx) => (
              <div className="cart-card" key={idx}>
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="price">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          <div className="checkout-form">
            <h2>Enter Your Details</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Building / Apt"
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <button className="btn" onClick={handleOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
