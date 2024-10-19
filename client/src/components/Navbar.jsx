import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          <i className="fas fa-heart-pulse mr-2"></i>
          ONLINE<br />INSURANCE
        </Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:underline">Home</Link></li>
          <li><Link to="/features" className="text-white hover:underline">Features</Link></li>
          <li><Link to="/about" className="text-white hover:underline">About Us</Link></li>
          <li><Link to="/register" className="text-white hover:underline">Register</Link></li>
          <li><Link to="/manager" className="text-white hover:underline">Manager</Link></li>
          <li><Link to="/admin" className="text-white hover:underline">Admin</Link></li>
          <li><Link to="/contact" className="text-white hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;