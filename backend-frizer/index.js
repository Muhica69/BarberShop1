const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Klijent = require('./models/klijenti');
const Frizeri = require('./models/frizeri');
const jwt=require('jsonwebtoken');
const JWT_SECRET = "tajni_kljuc_koji_ti_samo_ti_znas"; 
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/BarberShop')
  .then(() => console.log('✅ Povezan na MongoDB'))
  .catch(err => console.error('❌ Greška pri konekciji na bazu:', err));
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await Klijent.findOne({ username: username });
  if (!user) {
    return res.status(400).json("User not found");
  }
  if (user.password !== password) {
    return res.status(400).json("Wrong password");
  }
   const token = jwt.sign(
    { id: user._id, username: user.username },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  return res.json({ message: "Success", token });
});

app.post('/Klijenti', async (req, res) => {
  try {
    let { username, email, phone, password } = req.body;

    // Trim + normalizacija
    username = username && username.trim();
    email = email && email.trim().toLowerCase(); // standard
    phone = phone && phone.trim();
    password = password && password.trim();

    if (!username || !email || !phone || !password) {
      return res.status(400).json({ message: "Sva polja su obavezna!" });
    }

    // Provjera postoji li već korisnik
    const postoji = await Klijent.findOne({
      $or: [{ username: username }, { email: email }]
    });

    if (postoji) {
      if (postoji.username === username && postoji.email === email) {
        return res.status(400).json({ message: "Korisničko ime i email su zauzeti!" });
      } else if (postoji.username === username) {
        return res.status(400).json({ message: "Korisničko ime je zauzeto!" });
      } else {
        return res.status(400).json({ message: "Email je već registrovan!" });
      }
    }

    // Kreiranje korisnika
    const klijent = await Klijent.create({ username, email, phone, password });
    res.json(klijent);
  } catch (err) {
    console.error("Greška prilikom registracije:", err);
    res.status(500).json({ message: "Greška na serveru." });
  }
});
app.get('/api/frizeri', async (req, res) => {
  try{
    const frizeri=await Frizeri.find();
    res.json(frizeri);

  }
  catch(err){
    console.error("Greska pri povezivanju",err);
  res.status(500).json({message:"Greska pri serveru"});

  } });

app.listen(3001, () => {
  console.log('🚀 Server running on port 3001');
});
