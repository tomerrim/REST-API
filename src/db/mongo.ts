import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/RESTAPI";
console.log(MONGODB_URI)

export const mongoConnect = () => {
    mongoose.Promise = Promise;
    mongoose.connect(MONGODB_URI);
    mongoose.connection.on("error",(error: Error) => console.log("Connection error: ", error))
} 