const mongoose = require('mongoose');

const klijentSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  phone:    { type: String, required: true },
  password: { type: String, required: true }
}, { collection: 'klijents' });

module.exports = mongoose.model('Klijent', klijentSchema);
