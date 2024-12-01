const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const creds = require("./cred.json");

let app = express();

const path = require("path");
const router = express.Router();

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: creds.auth.user,
    pass: 'akbw snmj htnm ruuh',
  },
  tls: {
    rejectUnauthorized: false,
  },
  authMethod: "PLAIN",
});

app.post("/mail", (req, res, next) => {
  console.log("Received POST request to /mail");
  var email = req.body.email;
  var message = req.body.message;
  var subject = req.body.subject;
  var name = req.body.name;
  var mobileNumber = req.body.mobileNumber;
  var userEmail = req.body.userEmail;

  const mailOptions = {
    from: name,
    to: "prathameshenergysolutionpune@gmail.com",
    subject: `Requirement: (${subject})`,
    html: `<p>Name: ${name}</p><p>Mobile Number: ${mobileNumber}</p><p>Email : ${userEmail}</p><p>${message}</p>`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: "err",
      });
      console.log(err);
    } else {
      res.json({
        status: "success",
      });
      console.log("Email sent" );
    }
  });
});

transporter.verify(function (err, success) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email is running");
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.info("Backend is running "));