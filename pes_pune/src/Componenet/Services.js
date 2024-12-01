import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, Card, CardContent, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  serviceData1,
  serviceData2,
  serviceData3,
  serviceData4,
  serviceData5,
  serviceData6,
  serviceData7,
  serviceData8,
  serviceData9,
  serviceData10,
  serviceData11,
  serviceData12,
} from "./serviceData";

import Img1 from "../assets/Services/Img1.png";
import Img2 from "../assets/Services/Img2.png";
import Img3 from "../assets/Services/Img3.png";
import Img4 from "../assets/Services/Img4.png";
import Img5 from "../assets/Services/Img5.png";
import Img6 from "../assets/Services/Img6.png";
import Img7 from "../assets/Services/Img7.jpg";
import Img8 from "../assets/Services/Img8.png";
import Img9 from "../assets/Services/Img9.png";
import Img10 from "../assets/Services/Img10.png";
import Img11 from "../assets/Services/Img11.png";
import Img12 from "../assets/Services/Img12.png";

const containerStyle = {
  minHeight: "calc(100vh )", // Adjust the height as needed
  display: "flex",
  flexDirection: "column",
  position: "relative",
};

const contentStyle = {
  flex: 1,
  padding: "20px",
};

const gridItemStyle = {
  border: "4px double #565284",
  height: 400,
  width: 280,
  display: "flex",
  flexDirection: "column", // Set to column to stack image and text vertically
  alignItems: "center",
  justifyContent: "flex-start", // Align items at the top
  marginLeft: "20px",
  borderRadius: "15px 50px 30px",
  textAlign: "center", // Center the text
};

const imageStyle = {
  marginBottom: "10px", // Add margin between image and text
  maxWidth: "60%",
  maxHeight: "60%",
  borderRadius: "10px",
};

const textBorderStyle = {
  borderTop: "2px solid #565284", // Border after the text
  marginTop: "10px", // Adjust the spacing as needed
  width: "100%",
};

const cardContainerStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "50%",
  zIndex: 2,
};

const cardStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%", // Adjust the width as needed
  height: "140%",
  border: "4px solid #121C61", // Dark blue border
  // overflowY: "auto",
};
const blurredBackgroundStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backdropFilter: "blur(8px)",
  zIndex: 1, // Lower z-index to be below the card
};

export default function Services() {
  const [showCard, setShowCard] = useState(false);
  const [cardContent, setCardContent] = useState("");

  const handleReadMoreClick = (content) => {
    setShowCard(true);
    setCardContent(content);
  };

  const handleCloseCard = () => {
    setShowCard(false);
    setCardContent("");
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        <Grid container spacing={2}>
          {Object.keys(serviceData1).map((key) => {
            const data = serviceData1[key];
            return (
              <Grid item xs={12} sm={6} md={3}>
                <div style={gridItemStyle}>
                  <img src={Img1} alt="Service Image" style={imageStyle} />
                  <b>Detailed Energy audit</b>

                  <div style={{ marginTop: "10px" }}>
                    "Energy audit: A systematic examination assessing energy
                    usage, efficiency, and conservation opportunities in a
                    facility or process."
                  </div>
                  <button
                    style={{
                      marginTop: "40px",
                      padding: "8px 16px",
                      backgroundColor: "#565284",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleReadMoreClick(data.readMoreContent)}
                  >
                    Read More
                  </button>
                </div>
              </Grid>
            );
          })}
          {Object.keys(serviceData2).map((key) => {
            const data = serviceData2[key];
            return (
              <Grid item xs={12} sm={6} md={3}>
                <div style={gridItemStyle}>
                  <img src={Img2} alt="Service Image" style={imageStyle} />
                  <b style={{ marginTop: "10px" }}>
                    Detailed Green Audit/Environmental Audit
                  </b>

                  <div style={{ marginTop: "30px" }}>
                    "Green Audit: An in-depth analysis focusing on environmental
                    impact, sustainability practices. "
                  </div>
                  <button
                    style={{
                      marginTop: "40px",
                      padding: "8px 16px",
                      backgroundColor: "#565284",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleReadMoreClick(data.readMoreContent)}
                  >
                    Read More
                  </button>
                </div>
              </Grid>
            );
          })}
          {Object.keys(serviceData3).map((key) => {
            const data = serviceData3[key];
            return (
              <Grid item xs={12} sm={6} md={3}>
                <div style={gridItemStyle}>
                  <img
                    src={Img10}
                    alt="Service Image"
                    style={{ ...imageStyle }}
                  />
                  <b style={{ marginTop: "-14px" }}>
                  Installation and Commissioning of HVAC System, Heat Pump and domestic air conditioner{" "}
                  </b>

                  <div style={{ marginTop: "32px" }}>
                    "Expert HVAC installations, ensuring peak performance
                    through meticulous commissioning."
                  </div>
                  <button
                    style={{
                      marginTop: "22px",
                      padding: "8px 16px",
                      backgroundColor: "#565284",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleReadMoreClick(data.readMoreContent)}
                  >
                    Read More
                  </button>
                </div>
              </Grid>
            );
          })}
          {Object.keys(serviceData4).map((key) => {
            const data = serviceData4[key];
            return (
              <Grid item xs={12} sm={6} md={3}>
                <div style={gridItemStyle}>
                  <img
                    src={Img4}
                    alt="Service Image"
                    style={{
                      ...imageStyle,
                      marginTop: "20px",
                      maxWidth: "70%",
                    }}
                  />
                  <b style={{ marginTop: "10px" }}>
                    Energy efficiency Assessment, Repair and Maintenance{" "}
                  </b>

                  <div style={{ marginTop: "25px" }}>
                    "Enhance efficiency through assessment, repair, and
                    maintenance of solar, HVAC, and electrical systems. "
                  </div>
                  <button
                    style={{
                      marginTop: "35px",
                      padding: "8px 16px",
                      backgroundColor: "#565284",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleReadMoreClick(data.readMoreContent)}
                  >
                    Read More
                  </button>
                </div>
              </Grid>
            );
          })}
          {Object.keys(serviceData5).map((key) => {
            const data = serviceData5[key];
            return (
              <Grid item xs={12} sm={6} md={3}>
                <div style={gridItemStyle}>
                  <img
                    src={Img5}
                    alt="Service Image"
                    style={{ ...imageStyle, marginTop: "-10px" }}
                  />
                  <b style={{ marginTop: "1px" }}>
                  Installation and Commissioning of solar roof top and Solar Thermal systems{" "}
                  </b>

                  <div style={{ marginTop: "25px" }}>
                    "Efficient solar rooftop installation, ensuring optimal
                    performance and seamless commissioning."
                  </div>
                  <button
                    style={{
                      marginTop: "25px",
                      padding: "8px 16px",
                      backgroundColor: "#565284",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleReadMoreClick(data.readMoreContent)}
                  >
                    Read More
                  </button>
                </div>
              </Grid>
            );
          })}
          {Object.keys(serviceData6).map((key) => {
            const data = serviceData6[key];
            return (
              <Grid item xs={12} sm={6} md={3}>
                <div style={gridItemStyle}>
                  <img
                    src={Img8}
                    alt="Service Image"
                    style={{ ...imageStyle, marginTop: "10px" }}
                  />
                  <b style={{ marginTop: "10px" }}>
                    ECBC/IGBC-Energy efficient building compliance{" "}
                  </b>

                  <div style={{ marginTop: "25px" }}>
                    "Ensure building energy efficiency with compliance to
                    ECBC/IGBC standards for sustainability."
                  </div>
                  <button
                    style={{
                      marginTop: "25px",
                      padding: "8px 16px",
                      backgroundColor: "#565284",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleReadMoreClick(data.readMoreContent)}
                  >
                    Read More
                  </button>
                </div>
              </Grid>
            );
          })}
          {Object.keys(serviceData7).map((key) => {
  const data = serviceData7[key];
  return (
    <Grid item xs={12} sm={6} md={3}>
      <div style={gridItemStyle}>
        <img
          src={Img7}
          alt="Service Image"
          style={{
            ...imageStyle,
            marginTop: "10px",
            maxWidth: "80%", // Increased size from 50% to 80%
          }}
        />
        <b style={{ marginTop: "10px" }}>
          Supply of Electric panels and APFC
        </b>

        <div style={{ marginTop: "25px" }}>
          "Efficient solar water heater installation and commissioning for sustainable and reliable performance."
        </div>
        <button
          style={{
            marginTop: "35px",
            padding: "8px 16px",
            backgroundColor: "#565284",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => handleReadMoreClick(data.readMoreContent)}
        >
          Read More
        </button>
      </div>
    </Grid>
  );
})}

          {Object.keys(serviceData8).map((key) => {
            const data = serviceData8[key];
            return (
              <Grid item xs={12} sm={6} md={3}>
                <div style={gridItemStyle}>
                  <img
                    src={Img6}
                    alt="Service Image"
                    style={{
                      ...imageStyle,
                      marginTop: "5px",
                      maxWidth: "70%",
                    }}
                  />
                  <b style={{ marginTop: "0px" }}>
                  Electrical Safety Audit{" "}
                  </b>

                  <div style={{ marginTop: "5px" }}>
                    "Expert installation, commissioning for optimal performance
                    in heat pump systems."
                  </div>
                  <button
                    style={{
                      marginTop: "20px",
                      padding: "8px 16px",
                      backgroundColor: "#565284",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleReadMoreClick(data.readMoreContent)}
                  >
                    Read More
                  </button>
                </div>
              </Grid>
            );
          })}
          
        </Grid>
      </div>
      {showCard && (
        <>
          <div style={blurredBackgroundStyle}></div>
          <div style={cardContainerStyle}>
            <Card style={cardStyle}>
              <CardContent>
                <div style={{maxHeight:450,  overflowY:'auto'}}>{cardContent}</div>
                {/* <div style={{position : "sticky"}}> */}
                <CloseIcon
                  onClick={handleCloseCard}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "40px",
                    cursor: "pointer",
                    color: "red",
                  }}
                />
                {/* </div> */}
              </CardContent>
            </Card>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}