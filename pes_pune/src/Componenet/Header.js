import React, { useEffect, useState } from "react";
import Logo from '../assets/final Company logo-3.png';
import { NavLink } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import '../assets/static/Header.css'// Import your CSS file

export default function Header() {

  const [showNav, setShowNav] = useState(false)

    function closeMobileNav() {
      setShowNav(false);
      }
      function closeMobileNavOnResize() {
        console.log(window.innerWidth)
        if (window.innerWidth > 700) {
          // closeMobileNav();
          setShowNav(true)
        }else
        {
          setShowNav(false)
        }
      }

      useEffect(()=>{
        // console.log(window)
        closeMobileNavOnResize() ;
      },[])

      window.onresize = closeMobileNavOnResize;

      const containerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        position: "sticky",
        top: 0,
        background: "linear-gradient(to bottom, #1EB8DF, #FFFFFF)",
        height: "280px",
        overflow: "hidden",
        zIndex:1
      };
    
      const containerStylemob = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        position: "sticky",
        top: 0,
        background: "linear-gradient(to bottom, #1EB8DF, #FFFFFF)",
        height: "200px",
        overflow: "hidden",
        zIndex:1
      };

  const textContainerStyle = {
    textAlign: "left",
    marginTop: "10px",
    fontSize: "40px",
    color: "#333",
    marginLeft: '50px'
  };

  const textContainerStylemob = {
    textAlign: "left",
    marginTop: "0px",
    fontSize: "20px",
    color: "#333",
    marginLeft: '2px'
  };

  const imageStyle = showNav==true ? {
    // width: '300px',
    height: '280px',
    // height: '200px',

    alignSelf: "flex-start",
    marginTop: '-40px',
    marginRight: '20px'
  } : {
     height: '100px', 
     alignSelf: "flex-start",
  };
  

  // const linkContainerStyle = {
  //   marginTop: '-40px',
  //   display: 'flex',
  //   gap: '20px', // Adjust the gap between links
  // };

  const linkContainerStyle =showNav==true ? {
    marginTop: '-10px',
    display: 'flex',
    gap: '5px', // Adjust the gap between links
  }:{
    marginTop: '10px',
    display: 'flex',
    flexWrap :'wrap',
    gap: '5px', 
    width : '100%'
  };

  // const linkStyle =  {
  //   fontSize: '20px',
  //   color: '#121C61',
  //   textDecoration: 'none',
  //   padding: '10px',
  //   width: '150px',
  //   height: '40px',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   position: 'relative',
  //   transition: 'color 0.3s ease-out',
  // };


  const linkStyle =showNav==true ? {
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
  }: {
    fontSize: '10px',
    color: '#121C61',
    textDecoration: 'none',
    width: '30px',
    // height: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    transition: 'color 0.3s ease-out',
  };

  return (
    <>
      <div style={showNav==true ? containerStyle : containerStylemob}>
        <div style={showNav==true ? textContainerStyle : textContainerStylemob}>
          Prathamesh Energy Solution 
          <h3 style={showNav==true ? { marginTop: '0px', fontSize: '28px' } : {fontSize: '16px'}}>
            Smart Energy Saving
          </h3>
          <h6 style={showNav === true 
  ? { marginTop: '-20px', fontSize: '18px', color: 'darkblue' } 
  : { marginTop: '-20px', fontSize: '10px', color: 'darkblue' }}>
  Contact : <a 
    href="mailto:prathameshenergysolutionpune@gmail.com" 
    style={{ color: '#0c9999', textDecoration: 'none' }}
  >
    prathameshenergysolutionpune@gmail.com
  </a>
</h6>
          <h6 style={showNav==true ? { marginTop: '-20px', fontSize: '18px', color : 'darkblue' }  : {marginTop: '-20px', fontSize: '10px', color : 'darkblue'}}>
            ISO 9001, ISO 14001, Indian Green Building Council Accredited Professional (IGBC-AP)
          </h6>
          <div style={linkContainerStyle }>
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