import dotenv from 'dotenv'
import { DB_NAME } from '../constant.js';
import mongoose from 'mongoose';
dotenv.config()

const connectDB = async()=>{

    try {
    const connectionInstance =    await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    console.log(`MongoDB connected !! DB Host: ${connectionInstance.connection.host}`)
        
    } catch (error) {
            console.log("MongoDb connection error : " , error)
            process.exit(1)
    }
}

export default connectDB

