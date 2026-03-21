import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const MongoDbURI = process.env.MongoDbURI || ''

export const ConnectDb = async () => {
  try {
    await mongoose.connect(MongoDbURI)
    console.log("db connected")
  } catch (err) {
    console.error("db connection error", err)
    throw err
  }
}