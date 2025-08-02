import express from "express";

import { getUserProfile } from "../controllers/userController.js";

const router = express.Router();

// public route to get user profile with posts

router.get("/:id", getUserProfile);

export default router;
