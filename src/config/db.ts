import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const MongoDbURI = "mongodb+srv://edokasomtochukwu_db_user:blockchain@cluster0.mpjhlae.mongodb.net/?appName=fastiFood"

export const ConnectDb = async () => {
  try {
    await mongoose.connect(MongoDbURI)
    console.log("db connected")
  } catch (err) {
    console.error("db connection error", err)
    throw err
  }
}