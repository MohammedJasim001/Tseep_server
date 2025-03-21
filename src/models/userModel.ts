import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/userInterfaces";

const userSchema = new mongoose.Schema<IUser>(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: Number,
      requrired: true,
    },
    status: {
      type: String,
      enum: ["student", "employee"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>('User',userSchema)
export default User