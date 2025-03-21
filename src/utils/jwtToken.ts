import { Types } from "mongoose";
import { config } from "../config/config";
import jwt from "jsonwebtoken";

export const generateAccessToken = (userId: Types.ObjectId) => {
  const JWT_SECRET_KEY = config.JWT_SECRET_KEY as string;
  const payload = { userId };
  return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1h" });
};
