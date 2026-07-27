import mongoose from "mongoose";
export default async function connectDB(){const uri=process.env.MONGODB_URI||"mongodb://127.0.0.1:27017/BarberShop";await mongoose.connect(uri,{serverSelectionTimeoutMS:10000});console.log("MongoDB povezan");}
