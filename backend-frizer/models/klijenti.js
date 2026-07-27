import mongoose from "mongoose";

const klijentSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
  phone:    { type: String, required: true },
  role:     { type: String, enum: ["user", "admin"], default: "user" }, 
  password: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Klijent", klijentSchema, "klijenti");
