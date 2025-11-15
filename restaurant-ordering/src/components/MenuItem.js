import React from 'react';

const MenuItem = ({ item, addToCart }) => (
  <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '10px', margin: '10px', width: '200px', textAlign: 'center' }}>
    <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '6px' }} />
    <h3>{item.name}</h3>
    <p>{item.description}</p>
    <p>${item.price.toFixed(2)}</p>
    <button style={{ padding: '5px 10px', background: '#ff6347', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }} onClick={() => addToCart(item)}>Add to Cart</button>
  </div>
);

export default MenuItem;
