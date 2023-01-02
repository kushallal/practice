require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "laaleey3@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

module.exports = { transporter };
