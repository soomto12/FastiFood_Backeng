import userModel from "../models/user"
import { Request, Response } from "express"
import foodmodel from "../models/FoodMondels"

export const addToCart = async (req:Request, res:Response)=>{
try {
     const  {FoodId} = req.body
let user_id = req.body.user_id
   const checkFoodId = await foodmodel.findById(FoodId)

   if (!checkFoodId) {
    res.status(400).json({message:"the food does not exist"})
    return
   }

const user = await userModel.findById( user_id
   )

const CartData = user.cart 

if (!CartData[FoodId] ) {
    CartData[FoodId] = 1
    
}else {
    CartData[FoodId] +=1 
}
const updatedCart = await userModel.findByIdAndUpdate( user_id, {cart: CartData} )

   return res.status(201).json({message:"item added to cart", data:updatedCart})

} catch (error) {
   console.log(error)
   return res.status(500).json({message: "server error"})
 
}
   

}


export const removeCart = async (req:Request, res:Response)=>{

   const user_id = req.body.user_id

   const {foodId} = req.body


   const findById = await foodmodel.findById(foodId)

   if (!findById) {
      res.status(400).json({message:"the food does not exist", sucess:false})
      return

   }
const User= await userModel.findById(user_id)

if (!User) {
   res.status(400).json({message:"this user does not exist", success:false})
   return

}

let cart = User.cart

if(cart[foodId] === 1) {
   delete cart[foodId]

} else{
   cart[foodId] --
}


const updatedCart = await userModel.findByIdAndUpdate(user_id, {cart:cart})



return res.status(200).json({message: "cart updated", updatedCart:updatedCart})
  
}


 export const getCart = async (req:Request, res:Response)=>{

   try {
       const user = req.body.user_id


   const User = await userModel.findById(user)

   const CartItem =   User.cart 



 

const productIds =  Object.keys(CartItem)

 const FoodData = await foodmodel.find({
   _id: {$in: productIds}

 }).lean()

 const updatedCart = FoodData.filter(product=> CartItem.hasOwnProperty(product._id)).map(product=> ({
   ...product,
   qunatity:CartItem[product._id]
 }))

 

 return res.status(200).json({message:"userCart", cart: updatedCart})
   } catch (error) {
      return res.status(500).json({message: "server error"})
   }
  





   
}


