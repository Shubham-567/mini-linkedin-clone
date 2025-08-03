import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI + "LinkedIn";

  try {
    const conn = await mongoose.connect(MONGO_URI);

    console.log(`MongoDb connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed: ", error.message);
    process.exit(1);
  }
};

export default connectDB;
