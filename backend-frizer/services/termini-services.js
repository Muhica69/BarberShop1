import Termini from '../models/termini.js';
import Frizeri from '../models/frizeri.js';
import terminiRep from '../repositories/terminiRep.js';

const generisiTermine = async () => {
  try {
    const frizeri = await Frizeri.find();
    if (!frizeri.length) {
      console.log("⚠️ Nema frizera u bazi");
      return;
    }

    const terminiZaSve = [];

    const pocetniSati = 9;
    const krajnjiSati = 17;
    const intervalMinuta = 60;

    const danas = new Date();
    danas.setHours(0, 0, 0, 0);

    for (const frizer of frizeri) {
      for (let dan = 0; dan < 10; dan++) {
        const datum = new Date(danas);
        datum.setDate(datum.getDate() + dan);

        for (let sat = pocetniSati; sat < krajnjiSati; sat++) {
          for (let minuta = 0; minuta < 60; minuta += intervalMinuta) {
            const vrijeme = new Date(datum);
            vrijeme.setHours(sat, minuta, 0, 0);

            const postoji = await Termini.findOne({
              frizerId: frizer._id,
              datum: vrijeme,
            });

            if (!postoji) {
              terminiZaSve.push({
                frizerId: frizer._id,
                datum: vrijeme,
              });
            }
          }
        }
      }
    }

    if (terminiZaSve.length > 0) {
      await Termini.insertMany(terminiZaSve);
      console.log(`✅ Dodano ${terminiZaSve.length} termina`);
    } else {
      console.log("ℹ️ Nema novih termina za dodavanje");
    }
  } catch (err) {
    console.error("❌ Greška pri generisanju termina:", err);
  }
};

const getAllTermini = async () => {
    try {
        const termini = await Termini.find().populate('frizerId', 'ime prezime').populate('klijentId', 'username email phone');   
        return termini;
    } 
    catch (error) {
        throw error;
    }   
};

const getTerminiByFrizer = async (frizerId) => {
    try {
        const termini = await Termini.find({ frizerId }).populate('frizerId', 'ime prezime').populate('klijentId', 'username email phone');
        return termini;
    } catch (error) {
        throw error;
    } 
};  

const getMojiTermini = async (klijentId) => {
    try {
        const termini = await Termini.find({ klijentId }).populate('frizerId', 'ime prezime').populate('klijentId', 'username email phone');
        return termini;

    } catch (error) {
        throw error;
    } 
};  

const createTermin = async (terminData) => {
    try {
        const noviTermin = await terminiRep.rezervisiTermin(terminData);
        return noviTermin;
    } catch (error) {
        throw error;
    } 
};

const cancelTermin = async (terminId) => {
    try {
        const otkazaniTermin = await terminiRep.otkaziTermin(terminId);
        return otkazaniTermin;
    } catch (error) {
        throw error;
    } 
};

export {
    generisiTermine,
    getAllTermini,  
    getTerminiByFrizer,
    getMojiTermini,
    createTermin,
    cancelTermin
};