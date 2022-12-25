import mongoose from "mongoose";

const connectDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log('error while connecting mongodb');
        process.exit(1)
        
    }
}

export default connectDb