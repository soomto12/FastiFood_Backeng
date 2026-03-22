// todo: i need to complete the validation for the food

import { Router } from "express";
import { CreateFood, GetFood, GetOneFood } from "../controllers/foodControllers";
import multer from "multer"
import {body} from "express-validator"
import { DeleteFood } from "../controllers/foodControllers";
export  const FoodRouter = Router()

const storage = multer.diskStorage({
    destination : "uploads",
  filename:  (req, file, callback) => {
        callback(null, `${ Date.now()}${file.originalname}` )
    },
})

const upload = multer({storage})

FoodRouter.post("/delete", DeleteFood)
FoodRouter.post("/add", 
    body("name").isString().notEmpty().withMessage("the food name should not be empty").isLength({max:20 , min:2}).withMessage("the food name should be a least 3 character long")
    
    ,  upload.single("image"), CreateFood)
FoodRouter.get("/get", GetFood  )
FoodRouter.get("/get/:id", GetOneFood)

