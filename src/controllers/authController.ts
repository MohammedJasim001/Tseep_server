import catchAsync from "../utils/catchAsync";
import *as authServices from '../services/authServices'
import userAuthJoi from "../validations/userValidation";

export const registerUser = catchAsync(async(req,res)=> {
    const {value, error} = userAuthJoi.validate(req.body)
    const register = await authServices.registerUser(value,error)
    res.status(201).json({message:"Registration Successfull",user:register})
})

export const loginUser = catchAsync (async(req,res)=> {
    const user = await authServices.loginUser(req.body)
    res.status(200).json({message:"Login Successfull",user})
})