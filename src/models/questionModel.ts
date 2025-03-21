import mongoose from "mongoose";
import { IQuestions } from "../interfaces/questionInterface";

const questionSchema = new mongoose.Schema<IQuestions>({
    question:{
        type:String,
    },
    options:{
        type:[String]
    },
    answer:{
        type:String
    }
})

const Questions = mongoose.model<IQuestions>('Questions',questionSchema)
export default Questions