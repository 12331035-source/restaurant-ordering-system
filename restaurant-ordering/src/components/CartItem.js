import React from 'react';

const CartItem = ({ item, removeFromCart }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ddd', padding: '10px', borderRadius: '8px', margin: '10px 0' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={item.image} alt={item.name} style={{ width: '60px', borderRadius: '6px', marginRight: '10px' }} />
      <div>
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)}</p>
      </div>
    </div>
    <button style={{ padding: '5px 10px', background: '#ff6347', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }} onClick={() => removeFromCart(item)}>Remove</button>
  </div>
);

export default CartItem;
