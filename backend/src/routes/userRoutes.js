import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser
} from "../controllers/userController.js";

const router = express.Router();

// Auth
router.post("/register", registerUser);
router.post("/login", loginUser);

// Fetch Users
router.get("/", getAllUsers); // /api/users?role=alumni&company=Google&sector=IT
router.get("/:id", getUserById);

// Update Profile
router.put("/:id", updateUser);

export default router;
