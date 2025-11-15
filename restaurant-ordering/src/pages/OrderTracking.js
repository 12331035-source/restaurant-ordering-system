import React, { useState, useEffect } from 'react';
import './style.css';

const OrderTracking = () => {
  const [currentOrder, setCurrentOrder] = useState(null);
  const [history, setHistory] = useState([]);

  // Load current order and history from localStorage
  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem('currentOrder'));
    const savedHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    if (savedOrder) setCurrentOrder(savedOrder);
    setHistory(savedHistory);
  }, []);

  // Simulate order progress
  useEffect(() => {
    if (!currentOrder) return;
    const stages = ["Preparing", "Cooking", "Out for Delivery", "Delivered"];
    let stageIndex = stages.indexOf(currentOrder.status);
    const interval = setInterval(() => {
      if (stageIndex < stages.length - 1) {
        stageIndex++;
        const updatedOrder = { ...currentOrder, status: stages[stageIndex] };
        setCurrentOrder(updatedOrder);
        localStorage.setItem('currentOrder', JSON.stringify(updatedOrder));

        // When delivered, move to history
        if (stages[stageIndex] === "Delivered") {
          const newHistory = [...history, updatedOrder];
          setHistory(newHistory);
          localStorage.setItem('orderHistory', JSON.stringify(newHistory));
          localStorage.removeItem('currentOrder');
          setCurrentOrder(null);
        }
      }
    }, 5000); // every 5s for demo
    return () => clearInterval(interval);
  }, [currentOrder, history]);

  const removeFromHistory = (id) => {
    const newHistory = history.filter(order => order.id !== id);
    setHistory(newHistory);
    localStorage.setItem('orderHistory', JSON.stringify(newHistory));
  };

  return (
    <div className="page tracking-history">
      <h1>Order Tracking & History</h1>

      {/* Current Order */}
      {currentOrder ? (
        <div className="tracking-card">
          <h2>Order ID: {currentOrder.id}</h2>
          <p><strong>Status:</strong> {currentOrder.status}</p>
          <p><strong>Total:</strong> ${currentOrder.total}</p>
          <p><strong>Items:</strong></p>
          <ul>
            {currentOrder.items.map(item => (
              <li key={item.id}>{item.name} - ${item.price.toFixed(2)}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No orders in progress.</p>
      )}

      {/* History */}
      <h2>Order History</h2>
      {history.length === 0 ? (
        <p>No past orders yet.</p>
      ) : (
        <div className="history-grid">
          {history.map(order => (
            <div key={order.id} className="history-card">
              <h3>Order ID: {order.id}</h3>
              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>Address:</strong> {order.address}, {order.building}</p>
              <p><strong>Mobile:</strong> {order.mobile}</p>
              <p><strong>Total:</strong> ${order.total}</p>
              <p><strong>Items:</strong></p>
              <ul>
                {order.items.map(item => (
                  <li key={item.id}>{item.name} - ${item.price.toFixed(2)}</li>
                ))}
              </ul>
              <button className="btn" onClick={() => removeFromHistory(order.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
