import catchAsync from "../utils/catchAsync";
import *as questionSevices from '../services/qustionServices'

export const getQuestions = catchAsync(async(req,res)=>{
    const questions = await questionSevices.getQuestions()
    res.status(200).json({questions})
})