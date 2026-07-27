import  klijentiService from '../services/klijenti-services.js';

 const register = async (req, res) => {
  const { username, email, phone, password } = req.body;
  try {
    const result = await klijentiService.registerKlijent(username, email, phone, password);
    res.status(201).json(result);
  } catch (error) {
    res.status(error?.code === 11000 ? 409 : 400).json({ message: error?.code === 11000 ? "Korisnik već postoji." : error.message });
  }
};

 const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await klijentiService.loginKlijent(username, password);
    res.json(result);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
export default { register, login };
