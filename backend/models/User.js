import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: "",
      trim: true,
      maxLength: 300,
    },
  },
  {
    timestamps: true, // createAt and updatedAt timeStamp
  }
);

// User model
const User = mongoose.model("User", userSchema);

export default User;
