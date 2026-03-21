
import { Request, Response } from "express";
import { validationResult} from "express-validator"
import foodmodel from "../models/FoodMondels";



 export const CreateFood = async (req : Request, res:Response)=>{

    try {
 const errors = validationResult(req)

    const {name, description, price,  category} = req.body

   let Image_name = `${req.file?.filename}`


     if (!errors.isEmpty()) {
         res.status(404).json({error : "please enter the correct credentials" , errorMessage: errors.array() })
     }


const foodData =  new foodmodel({
    name ,
    description,
    price,
   image: Image_name,
    category

})

await foodData.save()


 res.json({message: "food added", data: foodData} )

console.log("done")
        
    } catch (err) {
        console.log(err)
        
    }

}

 export const GetFood = async (req:Request, res: Response)=>{

try {
 const data = await foodmodel.find()
res.json({message: "food data", data:data })

    
} catch (error) {
    res.json({message:"server error" , errorMessage: error})
}

}



