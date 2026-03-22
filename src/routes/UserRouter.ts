import { Router } from "express";
import { LoginUser, register } from "../controllers/users";
import { body } from "express-validator";



export const UserRouter = Router()


UserRouter.post("/login", 
body("password").isString()
.isLength({min:3}

).withMessage("password should be at least  4 character long").trim().notEmpty()
 ,  body("email").isEmail().withMessage("invalid email please enter a valid email").
 isLength({min:3}).withMessage("email should be more than 3 character long").notEmpty().isString().trim()
 
 
 , LoginUser )


UserRouter.post("/register", body("name").isString().isLength({min:3,max:30}).notEmpty().trim(), body("email").isEmail().withMessage("invalid email please enter a valid email").
 isLength({min:3}).withMessage("email should be more than 3 character long").notEmpty().isString().trim(), body("password")
.isLength({min:3}

).withMessage("password should be at least  4 character long").trim().notEmpty(), register )

 