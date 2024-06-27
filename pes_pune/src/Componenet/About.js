import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function About() {
  const centerTextStyle = {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center", // Set the background image with a slightly darker overlay
    
    border: "none",
    padding: "20px",
    marginTop: "50px",
    marginLeft: "280px",
    marginRight: "280px",
    fontSize: "20px",
    // Text color
  };

  return (
    <>
      <Header />
      <div style={centerTextStyle}>
        <b>Prathamesh Energy Solution</b> is a focused company working in the area of Energy Conservation with the vision of becoming a leader in providing services & solutions in energy-saving technologies to secure energy for future generations in India & globally. It is empaneled with Maharashtra Energy Development Agency (MEDA), Government of Maharashtra, as a class ‘A’ energy audit firm. We are passionate about saving our customer money by providing comprehensive but reasonably-priced detailed energy audits and providing various solutions for energy savings also. We not only give suggestions for energy saving but also support customers for energy management & post-audit implementation of energy-saving proposals with state-of-the-art solutions available in the market at the optimal cost. In a nutshell, we provide smart energy audits, energy savings opportunities & total solutions.
        <p>We are equipped with advanced & wide range of sophisticated, portable diagnostic & measuring instruments like power analyzers, ultrasonic flow meters, lux meters, hygrometers flue gas analyzers & various analytical software’s for conducting the detailed and walk through energy audits. These are used to generate refined data to facilitate in complex analysis which eventually would give a more reliable basis for the evolution of energy-saving potentials & economic viable solutions.</p>
        <p>Our Focus market areas are Maharashtra, Gujarat, Goa, Madhya Pradesh, and all the states in India with our dedicated team of Energy Auditors and professionals. We can carry high-quality energy audits of any type of industry in the least possible time and at a competitive price.</p>
      </div>
      <Footer />
    </>
  );
}
