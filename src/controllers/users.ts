import { Request, Response } from "express";
import {validationResult} from "express-validator"
import userModel from "../models/user";
import bcrypt from "bcrypt"
import { createToken } from "../utils/helper";


 export const register =  async (req : Request, res:Response)=>{

try {
    const errors = validationResult(req)

if (!errors.isEmpty()) {
      res.status(400).json({message: "invalid credencial", errorMessage:errors.array()})
      return

}

const {email, password, name} = req.body

// check if email exist 
const Salt_rounds = 12
const  email_exist= await userModel.findOne({email:email})

if (email_exist) {
   res.status(400).json({message:"this email already exist", success: false})
return
}


const hashedPassword = await bcrypt.hash(password, Salt_rounds)

const new_user = new userModel({
    name: name,
    email:email,
    password: hashedPassword,

})
const user =  await new_user.save()

const token = createToken(user._id)


res.status(200).json({success:true, message: "user registered", token:token})
} catch (err) {
 res.status(500).json({message:"server error", errorMessage: err})
 console.log(err)
}




}





export  const LoginUser  = ()=>{

}