const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const { validateUserRegister, validateUserLogin } = require("../middleware/validateUser");

const router = express.Router();

router.post("/register", validateUserRegister, registerUser);
router.post("/login", validateUserLogin, loginUser);

module.exports = router;
