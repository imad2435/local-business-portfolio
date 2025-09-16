import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import { validateUserLogin, validateUserRegister } from "../middleware/validateUser.js";

const router = express.Router();

// ✅ middleware runs before controller
router.post("/register", validateUserRegister, registerUser);
router.post("/login", validateUserLogin, loginUser);


export default router;
