import express from "express";

import { loginUser, registerUser } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/me", protect, (req, res) => {
  res.status(200).json({
    message: "Authenticated user info",
    user: req.user,
  });
});

export default router;
