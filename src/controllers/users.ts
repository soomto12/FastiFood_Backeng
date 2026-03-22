import { Request, Response } from "express";
import {validationResult} from "express-validator"
import userModel from "../models/user";
import bcrypt from "bcrypt"


 export const register =  async (req : Request, res:Response)=>{

try {
    const errors = validationResult(req)

if (!errors.isEmpty()) {

    res.status(400).json({message: "invalid credencial", errorMessage:errors.array()})
    
}

const {email, password, name} = req.body

// check if email exist 
const Salt_rounds = 12
const  email_exist= await userModel.findOne({email:email})

if (email_exist) {
    res.status(400).json({message:"this email already exist", success: false})
}


const hashedPassword = await bcrypt.hash(password, Salt_rounds)

const new_user = new userModel({
    name: name,
    email:email,
    password: hashedPassword,

})
 await new_user.save()


res.status(200).json({success:true, message: "user registered", data:new_user})
} catch (err) {
    res.status(500).json({message:"server error", errorMessage: err})
    console.log(err)
    
}




}





export  const LoginUser  = ()=>{

}