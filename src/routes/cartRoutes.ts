import {Router} from 'express'
import { addToCart, getCart, removeCart } from '../controllers/CartController'
import authMiddleware from '../middleware/auth'

const CartRouter = Router()

CartRouter.post("/add", addToCart )
CartRouter.post("/remove",  removeCart)
CartRouter.get("/get", getCart)


export default CartRouter







