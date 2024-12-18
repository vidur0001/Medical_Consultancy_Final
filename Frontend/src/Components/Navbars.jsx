// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./Navbars.css";
// import Logo from '../assets/doctors/Logo.png'; // Adjust the path to your logo

// export const Navbars = () => {
//   const token = localStorage.getItem("token");
  
//   return (
//     <nav className="navbar">
//       <div className="logo-container">
//         <img src={Logo} alt="Hospital Logo" className="logo" />
//         <h1 className="title">PulsePoint</h1>
//       </div>
//       <div className="nav-links">
//   <Link className="btn" to="/">Home</Link>
//   <Link className="btn" to="/Consultancy">Consultancy</Link>
//   <Link className="btn" to="#">Medicines</Link>
//   <Link className="btn" to="/Facilities">Our Team</Link>
//   <Link className="btn" to="/AboutUs">About Us</Link>
//   {token ? (
//     <Link className="btn btn-login-register" to="/Logout">Log Out</Link>
//   ) : (
//     <>
//       <Link className="btn btn-login-register" to="/Login">Login</Link>
//       <Link className="btn btn-login-register" to="/Register">Register</Link>
//     </>
//   )}
// </div>

//     </nav>
//   );
// };


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbars.css";
import Logo from '../assets/doctors/Logo.png'; // Adjust the path to your logo

export const Navbars = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = localStorage.getItem("token");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={Logo} alt="Hospital Logo" className="logo" />
        <h1 className="title">PulsePoint</h1>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link className="btn" to="/">Home</Link>
        <Link className="btn" to="/Consultancy">Consultancy</Link>

        <Link className="btn" to="/HomeMedical">Medicines</Link>

        <Link className="btn" to="/Facilities">Our Team</Link>
        <Link className="btn" to="/AboutUs">About Us</Link>
        {token ? (
          <Link className="btn btn-login-register" to="/Logout">Log Out</Link>
        ) : (
          <>
            <Link className="btn btn-login-register" to="/Login">Login</Link>
            <Link className="btn btn-login-register" to="/Register">Register</Link>
          </>
        )}
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

