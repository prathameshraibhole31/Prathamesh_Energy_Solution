import React, { useState, useEffect } from "react";
import Header from "./Header";
import Image1 from "../assets/Home/image2.jpg";
import Image3 from "../assets/Home/img3.jpg";
import Image4 from "../assets/Home/img4.jpg";
import Image5 from "../assets/Home/img5.jpg";
import Image6 from "../assets/Home/img7.jpg";

import Vjti from "../assets/client/vjti.jpeg";
import Canpex from "../assets/client/Canpex.png";
import Dgruparel from "../assets/client/dgruparel.png";
import KSPG from "../assets/client/KSPG.png";
import Patange from "../assets/client/patange.jpeg";
import Pdea from "../assets/client/pdea.png";
import PuneGas from "../assets/client/Pune_gas.jpeg";
import Symboisis from "../assets/client/symbosis.png";
import Pict from "../assets/client/pict.jpeg";
import Hind from "../assets/client/jaihind.png";
import Rayat from "../assets/client/rayat.jpg";
import Venue from "../assets/client/venue.png";

// Add new logos here
import Mtech from "../assets/client/mtech.jpg";  // New logo 1
import Vidya from "../assets/client/vidya.png";  // New logo 2

import Footer from "./Footer";

const imageArray = [Image1,Image3, Image4, Image5, Image6];

const clientLogos = [
  Vjti,
  Canpex,
  Dgruparel,
  KSPG,
  Patange,
  Pdea,
  PuneGas,
  Symboisis,
  Pict,
  Venue,
  Rayat,
  Hind,
  Mtech,  // Add new logo 1 here
  Vidya,  // Add new logo 2 here
];

export default function Home() {

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
    // Change the image every 3 seconds (3000 milliseconds)
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 2500);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const containerStyle = showNav == true ? {
    display: "flex",
    justifyContent: "flex-start", // Align content to the right
    marginTop: "50px",
    marginLeft: "30px",
  } : {
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: "flex-start", // Align content to the right
    marginTop: "50px",
    marginLeft: "30px",
  };

  const imageStyle = showNav == true ? {
    width: "50%",
    maxHeight: "400px",
    borderRadius: "20px",
  } : {
    width: "90%",
    maxHeight: "400px",
    borderRadius: "20px",
  };

  const homeTextStyle = showNav == true ? {
    marginLeft: "20px",
    textAlign: "left",
    maxWidth: "50%", // Adjust the width based on your needs
    fontSize: "24px",
  } : {
    marginLeft: "10px",
    textAlign: "left",
    fontSize: "14px",
  };

  const clientSectionStyle = showNav == true ? {
    textAlign: "left",
    marginLeft: "20px", // Adjust this value based on your needs
  } : { textAlign: "center", marginLeft: "10px", };

  const clientNameStyle = {
    fontSize: "36px",
    marginTop: "20px",
    color: "red",
  };

  const clientLogoStyle = {
    maxWidth: "130px",
    margin: "30px",
    marginLeft: "50px", // Add margin to create space between each image
    transition: "transform 0.3s ease", // Add transition for smooth effect
  };

  // Additional styles for Mtech, Vidya, Venue, Patange, and Pdea
  const mtechLogoStyle = {
    ...clientLogoStyle,
    marginTop: "-50px", // Shift Mtech logo up
    transform: "translateY(-30px)", // Fine-tune up position
  };

  const vidyaLogoStyle = {
    ...clientLogoStyle,
    marginTop: "20px", // Shift Vidya logo down
    transform: "translateY(30px)", // Fine-tune down position
  };

  const venueLogoStyle = {
    ...clientLogoStyle,
    marginTop: "20px", // Shift Venue logo down same as Vidya
    transform: "translateY(30px)", // Fine-tune down position
  };

  const patangeLogoStyle = {
    ...clientLogoStyle,
    marginTop: "20px", // Shift Patange logo down same as Vidya
    transform: "translateY(30px)", // Fine-tune down position
  };

  const pdeaLogoStyle = {
    ...clientLogoStyle,
    marginTop: "20px", // Shift Pdea logo down same as Vidya
    transform: "translateY(30px)", // Fine-tune down position
  };

  const vjtiLogoStyle = {
    ...clientLogoStyle,
    maxHeight: "50px", // Decrease the height for Vjti logo
  };

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <img
          src={imageArray[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          style={imageStyle}
        />
        <div className="homeText" style={homeTextStyle}>
          <p>
            <span style={showNav == true ? { fontSize: "48px" } : { fontSize: "28px" }}>W</span>elcome to Prathamesh
            Energy Solution, where excellence meets sustainability. Our ISO
            9001, ISO 14001, and IGBCAP certifications underscore our commitment
            to quality, environmental responsibility, and expertise in green
            building practices. As industry leaders, we offer a comprehensive
            suite of services, including detailed energy audits, green and
            environmental assessments, electrical safety audits, and
            installation of solar and energy-efficient systems. Join us in
            creating a sustainable future with reliable energy solutions.
          </p>
        </div>
      </div>
      <div className="clientLogo" style={clientSectionStyle}>
        <p className="client" style={clientNameStyle}>
          Our Clients
        </p>
        {/* Map over the client logos array and render the images */}
        {clientLogos.map((logo, index) => {
          let logoStyle = clientLogoStyle;

          // Apply special styles for Mtech, Vidya, Venue, Patange, and Pdea
          if (logo === Mtech) {
            logoStyle = mtechLogoStyle;
          } else if (logo === Vidya) {
            logoStyle = vidyaLogoStyle;
          } else if (logo === Venue) {
            logoStyle = venueLogoStyle;
          } else if (logo === Patange) {
            logoStyle = patangeLogoStyle;
          } else if (logo === Pdea) {
            logoStyle = pdeaLogoStyle;
          }

          return (
            <img
              key={index}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              style={logoStyle}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
