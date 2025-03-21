import mongoose from "mongoose";

export interface IFeedback {
    userId: mongoose.Types.ObjectId;
    feedback: {
        comment: string;
        rating: number;
    }[];
}
