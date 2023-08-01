import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI)

export const mongoConnect = () => {
    mongoose.Promise = Promise;
    mongoose.connect(MONGODB_URI);
    mongoose.connection.on("error",(error: Error) => console.log("Connection error: ", error))
} 