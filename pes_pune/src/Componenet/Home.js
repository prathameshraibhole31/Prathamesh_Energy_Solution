import React, { useState, useEffect } from "react";
import Header from "./Header";
import Image1 from "../assets/Home/image2.jpg";
import Image2 from "../assets/Home/img6.png";
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

import Footer from "./Footer";

const imageArray = [Image1, Image2, Image3, Image4, Image5, Image6];

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
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change the image every 3 seconds (3000 milliseconds)
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 2500);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "flex-start", // Align content to the right
    marginTop: "50px",
    marginLeft: "30px",
    //background: 'linear-gradient(to left, #3EF4DB, #FFFFFF)'
  };

  const imageStyle = {
    width: "50%",
    maxHeight: "400px",
    borderRadius: "20px",
  };

  const homeTextStyle = {
    marginLeft: "20px",
    textAlign: "left",
    maxWidth: "50%", // Adjust the width based on your needs
    fontSize: "24px",
  };

  const clientSectionStyle = {
    textAlign: "left",
    marginLeft: "20px", // Adjust this value based on your needs
  };

  const clientNameStyle = {
    fontSize: "36px",
    marginTop: "20px",
    color: "red",
  };

  const clientLogoStyle = {
    maxWidth: "130px",
    margin: "30px", 
    marginLeft : "50px",// Add margin to create space between each image
  };

  // New style for hover effect

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
            <span style={{ fontSize: "48px" }}>W</span>elcome to Prathamesh
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
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client Logo ${index + 1}`}
            style={clientLogoStyle}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}