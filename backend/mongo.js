import mongoose from "mongoose";

export const connectDB=async (url)=>{

    try {
        mongoose.connect(url)
        console.log("connected to mongodb")
    } catch (error) {
        console.log("error")
        
    }

}
