import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = async()=>{
try {
    const constr = `${process.env.MONGO_URI}${process.env.MONGO_DB_NAME}`;
    const connection = await mongoose.connect(constr);
   console.log("Database connected successfully");
} catch (err) {
    console.error("Database connection error:", err);
    process.exit(1); // Exit the process with failure
  }
    
}


export default db;
