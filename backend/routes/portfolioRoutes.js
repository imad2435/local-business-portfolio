import express from "express";
import { createPortfolioItem,
         getPortfolioItems,
         updatePortfolioItem,
         deletePortfolioItem } 
         from "../controllers/portfolioController.js";
import  protect  from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", getPortfolioItems);
router.post("/", protect, createPortfolioItem)
router.put("/:id", protect, updatePortfolioItem);
router.delete("/:id" , protect, deletePortfolioItem);



export default router;
