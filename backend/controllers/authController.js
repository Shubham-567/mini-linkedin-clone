import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateToken } from "../config/jwt.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, bio } = req.body;

    // Checking if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "Email already in use" });

    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      bio,
    });

    await newUser.save();

    // Generating JWT
    const token = generateToken(newUser._id);

    // Sending back user info + token
    res.status(201).json({
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        bio: newUser.bio,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during user registration" });
  }
};
