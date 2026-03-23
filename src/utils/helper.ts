import jwt from "jsonwebtoken";
import dotenv from "dotenv"


dotenv.config()
const jwt_secret =  "myFasiti_foodSercretToke_blockchain"



export const  createToken = (id : any) : string =>  {
    return jwt.sign({id}, jwt_secret )
}


// create token