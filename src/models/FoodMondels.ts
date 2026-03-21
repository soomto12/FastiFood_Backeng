import mongoose, {Schema, model} from "mongoose";
import { foodSchemaI } from "../types/types";

const foodSchema = new Schema <foodSchemaI>({
    name : {type:String, required:true},
    description: {type:String, required:true},
    price:{type:Number, required: true},
    image:{type:String, required:false}, // i will change the image when am done with the app
    category:{type:String, required: true}


})
 const foodmodel = mongoose.models.food ||model("food", foodSchema)


 export default foodmodel









