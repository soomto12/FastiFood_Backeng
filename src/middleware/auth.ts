import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"



const authMiddleware = async (req : Request,res:Response, next:NextFunction)=>{
    const {token} : any = req.headers;
    if (!token) {
        res.status(400).json({message:"not authorized", sucess:false})
        return
    }
try {
    const token_decode = jwt.verify(token, "myFasiti_foodSercretToke_blockchain") as {id:string }
req.body.user_id = token_decode.id
next()

} catch (error) {
    console.log(error)
     res.status(500).json({message:"server error"})
     return
    
}

}

export default authMiddleware
