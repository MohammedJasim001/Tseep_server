import mongoose from "mongoose"
import Feedback from "../models/feedback"

export const addFeedback = async(userId:mongoose.Types.ObjectId,data:[{message:string,rating:number}]) => {
    const newFeedback = await Feedback.create({
        userId,
        feedback: data,
      });
    return newFeedback
}