const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const portfolioRoutes = require("./routes/portfolioRoutes.js");
const serviceRoutes = require("./routes/servicesRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/services", serviceRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
