import express from "express";
import { registerUser } from "../controllers/userController.js";
import { validateUserRegister } from "../middleware/validateUser.js";

const router = express.Router();

// ✅ middleware runs before controller
router.post("/register", validateUserRegister, registerUser);

export default router;
