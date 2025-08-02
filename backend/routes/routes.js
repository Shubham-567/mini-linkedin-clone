import express from "express";
import authRoutes from "./authRoutes.js";
import postRoutes from "./postRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/posts", postRoutes);

export default router;
