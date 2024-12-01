import React, { useState, useEffect } from "react";
import Header from "./Header";
import Img_1 from "../assets/Gallery/Img_1.jpg";
import Img_2 from "../assets/Gallery/Img_2.jpg";
import Img_3 from "../assets/Gallery/Img_3.jpg";
import Img_4 from "../assets/Gallery/Img_4.jpg";
import Img_5 from "../assets/Gallery/Img_5.jpg";
import Img_6 from "../assets/Gallery/Img_6.jpg";
import Img_7 from "../assets/Gallery/Img_7.jpg";
import Img_8 from "../assets/Gallery/Img_8.jpg";
import Img_9 from "../assets/Gallery/Img_9.jpg";
import Footer from "./Footer";

const imageArray = [Img_1, Img_2, Img_3, Img_4, Img_5, Img_6, Img_7, Img_8, Img_9];

export default function Gallery() {
  const [showNav, setShowNav] = useState(false);

  function closeMobileNav() {
    setShowNav(false);
  }

  function closeMobileNavOnResize() {
    console.log(window.innerWidth);
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  // Inline styles
  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#fff",
    zIndex: 1000,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
   
  };

  const galleryContainerStyle = {
    padding: "100px 20px 20px", // Top padding to account for the fixed header height
    backgroundColor: "#f8f9fa", // Light background
    position: "relative",
    zIndex: 1,
  };

  const galleryGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
    gap: "15px",
    padding: "10px",
  };

  const galleryItemStyle = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  };

  const galleryImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease, opacity 0.3s ease",
  };

  const hoverStyle = {
    transform: "scale(1.1)",
    opacity: 0.8,
  };

  return (
    <>
      <header style={headerStyle}>
        <Header />
      </header>

      {/* Image Gallery Section */}
      <section style={galleryContainerStyle}>
        <div style={galleryGridStyle}>
          {imageArray.map((image, index) => (
            <div style={galleryItemStyle} key={index}>
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                style={galleryImageStyle}
                onMouseEnter={(e) => (e.target.style.transform = hoverStyle.transform)}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
