import mongoose from "mongoose"

export interface IUser {
    _id:mongoose.Types.ObjectId,
    userName:string,
    email:string,
    password:string,
    mobileNo:number,
    status?:"student"|"employee"
}