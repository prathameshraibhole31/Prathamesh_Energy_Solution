import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const headerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  backgroundColor: "#fff",
  zIndex: 1000,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
 
};

const Contact = () => {
  const [showNav, setShowNav] = useState(false);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("prathameshenergysolutionpune@gmail.com");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const alphabetsOnly = /^[a-zA-Z\s]*$/;

    if (!name.match(alphabetsOnly)) {
      toast.error("Name can only contain alphabets.");
      return;
    }

    const mobileNumberRegex = /^\d{10}$/;

    if (!phoneNumber || !mobileNumber.match(mobileNumberRegex)) {
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
    marginTop: "30px",
    height: "80vh",
  };

  const formBox = {
    width: "100%",
    maxWidth: "500px",
    padding: "20px",
    marginTop: "150px", // Add padding from the top
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
  };

  const contactInfoBox = {
    position: "fixed",
    top: "300px",
    left: "20px",
    marginTop: "10px", // Align with the form's padding from the top
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

  const stickyPhoneNumberStyle = {
    position: "sticky",
    top: "100px", // Set this to the distance from the top of the screen to keep it fixed during scrolling
    zIndex: 10, // Ensure it stays above other elements
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
            <div className="form-group" style={stickyPhoneNumberStyle}>
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <ReactPhoneInput
                placeholder="Enter your mobile number"
                value={phoneNumber}
                onChange={(phone) => {
                  setPhoneNumber(phone);
                  setMobileNumber(phone.replace(/[^0-9]/g, '')); // Remove non-numeric characters
                }}
                country={"in"}
                searchCountryFlag={true}
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
