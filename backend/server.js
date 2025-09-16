import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";

dotenv.config();
connectDB();

const app = express();

// ✅ Needed to parse JSON request bodies
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/portfolio",portfolioRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
