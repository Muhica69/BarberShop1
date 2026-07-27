import Klijent from '../models/klijenti.js';

const klijentiRep = {
  findByUsername: (username) => Klijent.findOne({ username }),
  findByEmail: (email) => Klijent.findOne({ email }),
  create: (data) => Klijent.create(data)
};

export default klijentiRep;
