const mongoose  = require ("mongoose");
const frizerSchema = new mongoose.Schema({
  ime: { type: String, required: true },
  prezime: { type: String, required: true },
  BrojTermina: { type: Number, required: true },
  UserName: { type: String, required: true },
  Password: { type: String, required: true }}, {collection:'Barberi'});


module.exports = mongoose.model('Frizeri', frizerSchema);
