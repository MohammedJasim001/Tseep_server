import mongoose from "mongoose";
import { IFeedback } from "../interfaces/feedbackInterface";

const feedbackSchema = new mongoose.Schema<IFeedback>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    feedback: [{
        comment: { type: String, required: true }, 
        rating: { type: Number, required: true, min: 1, max: 5 } 
    }]
});


const Feedback = mongoose.model<IFeedback>('Feedback',feedbackSchema)
export default Feedback