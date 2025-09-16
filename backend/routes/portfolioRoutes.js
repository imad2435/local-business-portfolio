import express from "express";
import { getPortfolioItems } from "../controllers/portfolioController.js";

const router = express.Router();

// @desc    Get all portfolio items
// @route   GET /api/portfolio
// @access  Public
router.get("/", getPortfolioItems);

export default router;
