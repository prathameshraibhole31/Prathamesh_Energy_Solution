import React from "react";

export default function Footer() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center", // Center the content horizontally
    alignItems: "flex-start",
    position: "sticky",
    marginTop : '20px',
    background: 'linear-gradient(to top, #000000, #000000)',
    height: '100px',
    textAlign: "center", // Center the text inside the container
    color : 'white'
  };

  const textContainerStyle = {
    marginTop: "10px",
    fontSize: "20px",
    color: "white",
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={textContainerStyle}>
        © 2017 Prathamesh Energy Solution. All rights reserved.{" "}
          <h3 style={{ marginTop: '0px', fontSize: '28px' }}>
            Smart Energy Saving
          </h3>
          
        </div>
      </div>
    </>
  );
}