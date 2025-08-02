import Post from "../models/Post.js";

// Crete a new post
export const createPost = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({ message: "Post text is required" });
    }

    const post = await Post.create({
      text,
      author: req.user._id,
    });

    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post: ", error);
    res.status(500).json({ message: "Failed to create post" });
  }
};

// ToDO: add update and delete post functions

// Get all posts (public feed)
export const getALlPosts = async (req, res) => {
  try {
    // throw new Error("Hello this is just teest");

    const posts = await Post.find()
      .sort({ createdAt: -1 }) // new post first
      .populate("author", "name email");

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts: ", error);
    res.status(500).json({ message: "Failed to fetch posts" });
  }
};
