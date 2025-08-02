import Post from "../models/Post.js";
import User from "../models/User.js";

export const getUserProfile = async (req, res) => {
  console.log("Fetching user profile...");
  try {
    const userId = req.params.id;

    // Find user (excluding password)
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Get user's posts
    const posts = await Post.find({ author: userId }).sort({ createdAt: -1 });

    res.status(200).json({ user, posts });
  } catch (error) {
    console.error("Error fetching user profile: ", error);
    res.status(500).json({ message: "Failed to load profile" });
  }
};
