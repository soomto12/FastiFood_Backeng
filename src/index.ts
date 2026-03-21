import express from "express"
import {ConnectDb} from "./config/db"

const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ConnectDb()

app.get("/test", (req, res)=>{
 return res.json({message: "api is working"})
})


app.listen(3000, ()=>{
    console.log("port is running at localHost 3000")
})