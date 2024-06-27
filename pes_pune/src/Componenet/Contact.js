import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";

const Contact = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("prathameshraibhole@gmail.com");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    const alphabetsOnly = /^[a-zA-Z\s]*$/;

    // Check if the name contains only alphabets
    if (!name.match(alphabetsOnly)) {
      toast.error("Name can only contain alphabets.");
      return;
    }

    const mobileNumberRegex = /^\d{10}$/;

    // Check if the mobile number contains exactly 10 digits
    if (!mobileNumber.match(mobileNumberRegex)) {
      toast.error("Mobile number must contain exactly 10 digits.");
      return;
    }
    const body = {
      name,
      mobileNumber,
      email,
      subject,
      message,
      userEmail
    };
    await axios
      .post("/mail", body, {})
      .then((res) => {
        toast.success("Message sent successfully!");
      })
      .catch((err) => {
        console.error("Error:", err); // Log the entire error object
        toast.error("Error occurred. Please try again later.");
      });

    console.log(body, "mmm");
  };

  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="form-box">
          <h2 style={{ textAlign: "center" }}>Contact Form</h2>
          <form onSubmit={handleSubmit} method="POST">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="text"
                id="mobileNumber"
                value={mobileNumber}
                onChange={(e) => {
                  const inputMobileNumber = e.target.value;
                  // Prevent entering more than 10 digits
                  if (inputMobileNumber.length <= 10) {
                    setMobileNumber(inputMobileNumber);
                  }
                }}
                maxLength="10"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input
                type="text"
                id="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <input
                type="text"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="form-group button-group">
  <Button variant="contained" type="submit" style={{ backgroundColor: "#1EB8DF", color: "white" }}>Send Feedback</Button>
</div>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
};

export default Contact;
