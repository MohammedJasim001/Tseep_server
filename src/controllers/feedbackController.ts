import catchAsync from "../utils/catchAsync";
import * as feedbackServices from '../services/feedbackServices'
import { IUser } from "../interfaces/userInterfaces";

export const addFeedback = catchAsync(async(req,res) => {
    const  user  = req.user as IUser
    const newFeedback = await feedbackServices.addFeedback(user._id,req.body)
    res.status(201).json({message:"Feedback added",data:newFeedback})
})