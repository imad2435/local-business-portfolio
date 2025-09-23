// local-business-portfolio/backend/routes/testimonialRoutes.js

const express = require("express");
const {
  createTestimonial,
  getTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialController.js");
const protect = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get("/", getTestimonial);
router.post("/", protect, createTestimonial);
// FIX: Use PUT for updates and include an ID parameter
router.put("/:id", protect, updateTestimonial);
// FIX: Use DELETE for deletion and include an ID parameter
router.delete("/:id", protect, deleteTestimonial);

module.exports = router;