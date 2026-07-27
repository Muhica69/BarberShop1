import mongoose from "mongoose";

const frizerSchema = new mongoose.Schema({
  ime: { type: String, required: true },
  prezime: { type: String, required: true },
  BrojTermina: { type: Number, default: 0 },
  UserName: { type: String },
  specijalnost: { type: String, default: "Barber & stilista" },
  role: { type: String, default: "admin" },
  Password: { type: String },
  Pasword: { type: String }}, {collection:'Barberi'});

export default mongoose.model('Frizeri', frizerSchema);
