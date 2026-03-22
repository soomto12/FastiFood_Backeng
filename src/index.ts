
// task: i still have to fix the image upload fuctionality
import express from "express"
import {ConnectDb} from "./config/db"
import { FoodRouter } from "./routes/foodRoutes";
import {UserRouter} from "./routes/UserRouter"

const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ConnectDb()
app.use("/user", UserRouter)
app.use( "/fasti_food",FoodRouter)
app.use("/images", express.static("uploads"))


app.listen(3000, ()=>{
    console.log("port is running at localHost 3000")
})