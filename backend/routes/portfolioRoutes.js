const express = require("express");
const { createPortfolioItem,
         getPortfolioItems,
         updatePortfolioItem,
         deletePortfolioItem } 
         = require("../controllers/portfolioController.js");
const protect = require("../middleware/authMiddleware.js");

const router = express.Router();
router.get("/", getPortfolioItems);
router.post("/", protect, createPortfolioItem)
router.put("/:id", protect, updatePortfolioItem);
router.delete("/:id" , protect, deletePortfolioItem);

module.exports = router;