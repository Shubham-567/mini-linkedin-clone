import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";
import routes from "./routes/routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json()); // for parsing json body

// Routes
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server only if database is connected
const startServer = async () => {
  try {
    // Connecting to MongoDb
    connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database. Server not started.");
    process.exit(1);
  }
};

startServer();
