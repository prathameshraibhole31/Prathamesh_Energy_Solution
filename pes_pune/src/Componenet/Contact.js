import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
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

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("prathameshenergysolutionpune@gmail.com");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const alphabetsOnly = /^[a-zA-Z\s]*$/;

    if (!name.match(alphabetsOnly)) {
      toast.error("Name can only contain alphabets.");
      return;
    }

    const mobileNumberRegex = /^\d{10}$/;

    if (!mobileNumber.match(mobileNumberRegex)) {
      toast.error("Mobile number must contain exactly 10 digits.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!userEmail) {
      toast.error("Email cannot be empty.");
      return;
    }
    if (!userEmail.match(emailRegex)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const body = {
      name,
      mobileNumber,
      email,
      subject,
      message,
      userEmail,
    };
    await axios
      .post("/mail", body, {})
      .then(() => {
        toast.success("Message sent successfully!");
        setName("");
        setMobileNumber("");
        setEmail("prathameshenergysolutionpune@gmail.com");
        setSubject("");
        setMessage("");
        setUserEmail("");
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error("Error occurred. Please try again later.");
      });
  };

  const contactContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "90px",
    height: "80vh",
  };

  const formBox = {
    width: "100%",
    maxWidth: "500px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
  };

  const contactInfoBox = {
    position: "fixed",
    top: "300px",
    left: "20px",
    padding: "20px",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: "1.6",
    gap: "10px",
    zIndex: 1000,
  };

  const contactInfoItem = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "16px",
  };

  const iconStyle = {
    fontSize: "20px",
    color: "#1EB8DF",
  };

  return (
    <>
      <Header />
      {/* Contact Info Box */}
      <div style={contactInfoBox}>
        <div style={contactInfoItem}>
          <PhoneIcon style={iconStyle} />
          <span>
            <strong>Mobile No:</strong> +91 9011194521
          </span>
        </div>
        <div style={contactInfoItem}>
          <EmailIcon style={iconStyle} />
          <span>
            <strong>Email Id:</strong> prathameshenergysolutionpune@gmail.com
          </span>
        </div>
      </div>

      {/* Contact Form */}
      <div style={contactContainer}>
        <div style={formBox}>
          <h2 style={{ textAlign: "center" }}>Energy Audit Enquiry Form</h2>
          <form onSubmit={handleSubmit} method="POST">
            <div className="form-group">
              <label htmlFor="name">Organization Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your organization's name"
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
                  if (/^[0-9]*$/.test(inputMobileNumber) && inputMobileNumber.length <= 15) {
                    setMobileNumber(inputMobileNumber); 
                  }
                }}
                maxLength="10"
                placeholder="Enter your 10-digit mobile number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject of Enquiry:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Provide a brief subject for the enquiry"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message/Details of Enquiry:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  resize: "none",
                  minHeight: "100px",
                }}
                placeholder="Provide detailed information regarding your energy audit enquiry"
              />
            </div>
            <div className="form-group button-group">
              <Button
                variant="contained"
                type="submit"
                style={{ backgroundColor: "#1EB8DF", color: "white" }}
              >
                Submit Enquiry
              </Button>
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