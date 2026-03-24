import { Document } from "mongoose";

 export interface foodSchemaI extends Document {
name : string,
description: string
price: number
image?: string
category: string
}

export interface UserSchema extends Document {
    name: string,
    email: string,
    password: string,
    cart:{}
        
    
}


export interface OrderI  {
    name: string,
    item: string,
    amount:number,
    address : {},
    status:string,
    date: Date

}
