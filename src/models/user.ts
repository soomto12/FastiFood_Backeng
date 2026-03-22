import {Schema } from "mongoose";
import mongoose from "mongoose";
import { UserSchema } from "../types/types";

const userSchema =  new Schema <UserSchema>({
name: {type:String, required:true},
email: {type:String, required:true},
password:{type:String, required:true},
cart: {type:Object, default:{}}
},{minimize:false})


const userModel = mongoose.models.users || mongoose.model("users", userSchema)

export default userModel