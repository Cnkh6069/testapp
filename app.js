require("dotenv").config();
const express = require("express");
const cors = require("cors");
// Import User model at the top with other imports
const { User } = require("./models");

//importing packages for Auth0, registration and sending email
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

//Middleware
app.use(express.json()); // Middleware to parse JSON requests
app.use(cors());
app.use(bodyParser.json());

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT == 465, // true for 465, false for other ports like 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
// Auth0 Signup Route
app.post("/api/signup", async (req, res) => {
  const { email, name, auth0Id } = req.body;

  if (!email || !name || !auth0Id) {
    return res.status(400).json({ error: "Email and Name are required" });
  }
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ 
      where: { auth0Id } 
    });

    if (existingUser) {
      return res.status(200).json({ message: "User already registered" });
    }

    // If user doesn't exist, send welcome email
  const mailOptions = {
    from: `"DishCovery" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Welcome to The App!",
    html: `
      <h2>Welcome to Dishcovery, ${name}!</h2>
      <p>Thank you for signing up. We're excited to have you on board.</p>
  
      
      <p>If you have any questions, feel free to reach out to our support team.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Welcome email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send welcome email" });
  }} catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
});
  

//importing routes for backend queries to database

// const userRoutes = require("./routes/userRoutes.js");
// const pokemonsRoutes = require("./routes/pokemonsRoutes.js");
// const reviewRoutes = require("./routes/reviewRoutes.js");
// const restaurantRoutes = require("./routes/restaurantRoutes.js");

// app.use("/users", userRoutes);
// app.use("/pokemons", pokemonsRoutes);
// app.use("/reviews", reviewRoutes);
// app.use("/restaurant", restaurantRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
