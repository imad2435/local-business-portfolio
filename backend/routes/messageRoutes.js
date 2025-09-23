// local-business-portfolio/backend/routes/messageRoutes.js

const express = require("express");
const { createMessage, getMessage } = require("../controllers/messageControllers.js");
const protect = require("../middleware/authMiddleware.js");
const router = express.Router();

router.post("/", createMessage);
router.get("/", protect, getMessage);

module.exports = router;