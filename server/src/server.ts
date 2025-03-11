import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./configs/mongodb";

//App Config
const PORT = process.env.PORT || 4000;
const app = express();


await connectDB();

// Initialize Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// API routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "API Working" });
});

// Start Server
app.listen(PORT, () => console.log("🚀 Server Running on port " + PORT));
