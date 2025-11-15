import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/style.css'; // ✅ make sure this path is correct

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">hadi's Restaurant</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        <Link to="/order-tracking">Order Tracking</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
