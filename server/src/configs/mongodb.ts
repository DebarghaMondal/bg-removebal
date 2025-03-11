import mongoose from "mongoose";
import { appConfig } from "./index.js";

const connectDB = async () => {
  try {
    await mongoose.connect(appConfig.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
  }
};

export default connectDB;
