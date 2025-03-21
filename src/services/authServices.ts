import { ValidationError } from "joi";
import { IUser } from "../interfaces/userInterfaces";
import CustomError from "../utils/customError";
import User from "../models/userModel";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../utils/jwtToken";

export const registerUser = async (value: IUser, error?: ValidationError) => {
  if (error) {
    throw new CustomError(error.details[0].message, 400);
  }
  const { userName, email, password, mobileNo, status } = value;
  const existEmail = await User.findOne({ email });
  const existNumber = await User.findOne({ mobileNo });
  if (existEmail) throw new CustomError("Email already registered", 400);
  if (existNumber) throw new CustomError("Mobile Number already registered", 400);
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    userName,
    email,
    password: hashedPassword,
    mobileNo,
    status,
  });
  return {
    _id: user._id,
    userName: user.userName,
    email: user.email,
    mobileNo,
    status
  };
};

export const loginUser = async(userData:IUser) => {
  const {mobileNo,password} = userData
  const user = await User.findOne({mobileNo})
  if(!user) throw new CustomError('Invalid Mobile Number',400)
  const validPassword = await bcrypt.compare(password,user.password)
  if(!validPassword) throw new CustomError('Incorrect password', 400)
  const accessToken = generateAccessToken(user._id)
  return {
    _id:user._id,
    userName:user.userName,
    email:user.email,
    mobileNo:user.mobileNo,
    status:user.status,
    accessToken
  }
}
