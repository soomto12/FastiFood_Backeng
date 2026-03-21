import { Document } from "mongoose";

 export interface foodSchemaI extends Document {
name : string,
description: string
price: number
image?: string
category: string
}
