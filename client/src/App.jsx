import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login"; // Import your Login component
import Register from "./pages/Register"; // Import your Register component

const App = () => {
  return (
    <Router>
      <header className="bg-yellow-400 p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold ml-5">
            <i className="fa-solid fa-heart-pulse text-white"></i> ONLINE
            <br />
            INSURANCE
          </h1>
          <ul className="flex space-x-4 text-white text-lg mr-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="#">Features</Link></li>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="#">Manager</Link></li>
            <li><Link to="#">Admin</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
      </Routes>
    </Router>
  );
};

export default App;
