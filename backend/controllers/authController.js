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

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Checking if user exits
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Comparing passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generating token
    const token = generateToken(user._id);

    // Return user data + token
    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        bio: user.bio,
      },
      token,
    });
  } catch (error) {
    console.error("Login error: ", error);
    res.status(500).json({ message: "Server error during login" });
  }
};
