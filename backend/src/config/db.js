import mongoose from "mongoose";
import {ENV} from './env.js';

export const connectDB = async () => {
    try{
        await mongoose.connect(ENV.MONGO_URI);
        console.log("Success: MongoDB connected");
    }catch(error){
        console.log("Failed to connect MongoDB: ", error);
        process.exit(1);
    }
}