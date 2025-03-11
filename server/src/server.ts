import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./configs/mongodb.js";
import { appConfig } from "./configs/index.js";

//App Config
const PORT = process.env.PORT || 4000;
const app = express();

// Initialize Middlewares
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (appConfig.isDevelopment) {
  app.use(morgan("dev"));
}

// API routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "API Working" });
});

const startServer = async () => {
  try {
    // Start Server
    app.listen(PORT, () => console.log("🚀 Server Running on port " + PORT));
    await connectDB();
  } catch (error) {
    console.error(`Error while start the server. ${error}`);
  }
};

startServer();
