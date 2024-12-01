import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutUsImage from '../assets/About_Us.png'; // Importing the image

export default function About() {
  const [showNav, setShowNav] = useState(false);

  function closeMobileNav() {
    setShowNav(false);
  }

  function closeMobileNavOnResize() {
    if (window.innerWidth > 700) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }

  useEffect(() => {
    closeMobileNavOnResize();
  }, []);

  window.onresize = closeMobileNavOnResize;

  // Apply styles dynamically based on screen size
  const centerTextStyle = showNav === true ? {
    textAlign: "justify",
    padding: "40px",
    marginBottom: "80px",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "1000px",
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#333",
    backgroundColor: "#e0f7fa", // Light cyan for freshness
    borderRadius: "15px", // Rounded corners for a modern look
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
    transition: "all 0.3s ease", // Smooth transition for hover effects
  } : {
    textAlign: "justify",
    padding: "20px",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "90%",
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#333",
    backgroundColor: "#e0f7fa", // Light cyan for mobile
    borderRadius: "15px", 
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    backgroundImage: "linear-gradient(to right, #28a745, #7ad14f)", // Green gradient background
    color: "#fff", 
    padding: "30px 0", 
    textAlign: "center", 
    fontSize: "2.5em", 
    fontFamily: "'Montserrat', sans-serif", 
    letterSpacing: "2px", 
  };

  const footerStyle = {
    backgroundColor: "#333", 
    color: "#fff", 
    padding: "30px 0", 
    textAlign: "center", 
    fontSize: "1em", 
    letterSpacing: "1px",
  };

  const ctaButtonStyle = {
    backgroundColor: "#28a745", 
    color: "#fff", 
    padding: "12px 30px", 
    fontSize: "16px", 
    fontWeight: "bold", 
    borderRadius: "30px", 
    textAlign: "center", 
    border: "none", 
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const ctaButtonHoverStyle = {
    backgroundColor: "#218838", // Darker green on hover
  };

  return (
    <>
      <Header style={headerStyle} />
      <div style={centerTextStyle}>
  <b style={{ fontSize: "26px", fontWeight: "bold", color: "#004d40" }}>Prathamesh Energy Solution</b>
  <p>Prathamesh Energy Solution is a leading provider of energy audit services with a focus on sustainability and innovation. We aim to be at the forefront of the energy conservation industry, offering cutting-edge energy-saving solutions to secure a sustainable future.</p>
  <p>As a certified energy audit firm, we are committed to providing actionable insights and strategies that help businesses reduce energy consumption and save costs. Our team of experts utilizes the latest diagnostic tools and technologies to perform thorough audits and recommend the best solutions.</p>
  <p>We are proud to serve clients across India, including Maharashtra, Gujarat, Goa, and Madhya Pradesh, offering quick, efficient, and affordable energy audit services tailored to each client's unique needs.</p>
  
  {/* Image styled as a larger, slightly tilted stamp */}
  <div style={{
    position: "relative",
  }}>
    <img 
      src={AboutUsImage} 
      alt="About Us" 
      style={{
        position: "absolute",
        bottom: "-80px",
        right: "-100px",
        width: "130px", // Larger size for the stamp
        height: "auto",
        borderRadius: "50%", // Circular appearance
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", // More prominent shadow
        border: "4px solid #004d40", // Thicker border for visibility
        transform: "rotate(-45deg)", // Slight tilt to make it crossed
        transition: "transform 0.3s ease", // Smooth effect for hover or adjustments
      }} 
    />
  </div>
</div>



      {/* Adding the image below the text box */}
      {/* <div style={{ textAlign: "center", marginTop: "40px" }}>
        <img src={AboutUsImage} alt="About Us" style={{ maxWidth: "100%", height: "auto", borderRadius: "15px", boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)" }} />
      </div> */}

      <Footer style={footerStyle} />
    </>
  );
}
