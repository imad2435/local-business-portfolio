const express = require("express");
const { registerUser } = require("../controllers/userController");
const { validateUserRegister } = require("../middleware/validateUser");
const router = express.Router();

router.post("/register", validateUserRegister, registerUser);

module.exports = router; 
