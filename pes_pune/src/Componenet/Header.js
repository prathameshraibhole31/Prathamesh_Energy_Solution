import React from "react";
import Logo from '../assets/final Company logo-3.png';
import { NavLink } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import '../assets/static/Header.css'// Import your CSS file

export default function Header() {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "sticky",
    top: 0,
    background: 'linear-gradient(to bottom, #1EB8DF, #FFFFFF)',
    height: '200px'
  };

  const textContainerStyle = {
    textAlign: "left",
    marginTop: "10px",
    fontSize: "40px",
    color: "#333",
    marginLeft: '50px'
  };

  const imageStyle = {
    width: '300px',
    height: '280px',
    alignSelf: "flex-start",
    marginTop: '-40px',
    marginRight: '20px'
  };
  

  const linkContainerStyle = {
    marginTop: '-40px',
    display: 'flex',
    gap: '20px', // Adjust the gap between links
  };

  const linkStyle = {
    fontSize: '20px',
    color: '#121C61',
    textDecoration: 'none',
    padding: '10px',
    width: '150px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    transition: 'color 0.3s ease-out',
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          Prathamesh Energy Solution
          <h3 style={{ marginTop: '0px', fontSize: '28px' }}>
            Smart Energy Saving
          </h3>
          <h6 style={{ marginTop: '-20px', fontSize: '18px', color : 'darkblue' }}>
            ISO 9001, ISO 14001, Indian Green Building Council Accredited Professional (IGBC-AP)
          </h6>
          <div style={linkContainerStyle}>
            {/* Use NavLink components instead of Link components */}
            <NavLink to="/home" className="navLink" style={linkStyle} activeStyle={{ borderBottom: '2px solid #FF4500' }}>
              Home
            </NavLink>
            <NavLink to="/about" className="navLink" style={linkStyle} activeStyle={{ borderBottom: '2px solid #FF4500' }}>
              About Us
            </NavLink>
            <NavLink to="/services" className="navLink" style={linkStyle} activeStyle={{ borderBottom: '2px solid #FF4500' }}>
              Services
            </NavLink>
            <NavLink to="/gallery" className="navLink" style={linkStyle} activeStyle={{ borderBottom: '2px solid #FF4500' }}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className="navLink" style={linkStyle} activeStyle={{ borderBottom: '2px solid #FF4500' }}>
              Contact Us
            </NavLink>
          </div>
        </div>
        <div>
          <img src={Logo} alt="Logo" style={imageStyle} />
        </div>
      </div>
    </>
  );
}
