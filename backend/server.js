// local-business-portfolio/backend/server.js

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const cors = require("cors"); // <-- IMPORT CORS

// Route imports
const userRoutes = require("./routes/userRoutes.js");
const portfolioRoutes = require("./routes/portfolioRoutes.js");
const serviceRoutes = require("./routes/servicesRoutes");
const messageRoutes = require("./routes/messageRoutes.js"); // <-- IMPORT
const testimonialRoutes = require("./routes/testimonialRoutes.js"); // <-- IMPORT

dotenv.config();
connectDB();

const app = express();

// MIDDLEWARE
app.use(cors()); // <-- USE CORS
app.use(express.json());

// ROUTES
app.use("/api/users", userRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/messages", messageRoutes); // <-- USE
app.use("/api/testimonials", testimonialRoutes); // <-- USE

// Static folder for uploads
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));