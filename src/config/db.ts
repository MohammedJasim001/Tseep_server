import mongoose from "mongoose";
import { config } from "./config";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(config.MONGO_URI as string);
    console.log(`MongoDB connected`);
  } catch (error) {
    console.log(error);
  }
};
