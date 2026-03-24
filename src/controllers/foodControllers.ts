//todo : still have to fix the image upload functionality
import { Request, Response } from "express";
import { validationResult} from "express-validator"
import foodmodel from "../models/FoodMondels";
import fs from "fs"


 export const CreateFood = async (req : Request, res:Response)=>{

    try {
 const errors = validationResult(req)

      if (!errors.isEmpty()) {
  res.status(400).json({error : "please enter the correct credentials" , errorMessage: errors.array() })
  return
    
     }

 let Image_name = req.file?.filename
    const {name, description, price,  category} = req.body

  




const foodData =  new foodmodel({
    name ,
    description,
    price,
   image: Image_name,
    category

})

await foodData.save()


 return res.json({message: "food added", data: foodData} )


        
    } catch (err) {
    return   res.status(500).json({error:"server error"})
       
        
    }

}

 export const GetFood = async (req:Request, res: Response)=>{

try {
 const data = await foodmodel.find()
 return res.status(200).json({message: "food data", data:data })

    
} catch (error) {
  return  res.status(500).json({message:"server error" , errorMessage: error})
}

}


 export const DeleteFood = async (req:Request, res:Response)=>{
try {
     const foodId = req.body.id

     const food = await foodmodel.findById(foodId)



     if (!food) {
        res.status(400).json({errorMessage:"food Id does not exist"})
        return
    }

  

   

   fs.unlink(`src/uploads/${food.image}`, ()=>{})


    await  foodmodel.findByIdAndDelete(foodId)


 return res.status(200).json({message:"item deleted succesfully", succes: true })
    
} catch (error) {
  return  res.status(500).json({message: "server error", errorMessage: error})
   
}
   
 
}


 export const GetOneFood  = async(req:Request, res:Response)=>{
    try {
        const foodId = req.params.id

    const food = await foodmodel.findById(foodId)

    if (!food) {
        res.status(400).json({message:"the food does not exist"})
        return
        
    }

   return res.status(200).json({sucess: true, data : food})
    } catch (error) {
    return    res.json({message:"sever error", errorMessage: error})
        
    }

    

 }






