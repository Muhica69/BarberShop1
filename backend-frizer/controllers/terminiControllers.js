import cron from 'node-cron';
import * as terminiService from '../services/termini-services.js'; // koristi import *

// ⏰ Svaki dan u 00:05 izvrši generisanje termina
cron.schedule('5 0 * * *', async () => {
  console.log("🔄 Automatsko generisanje termina počelo...");
  try {
    const rezultat = await terminiService.generateTerminiForAll();
    console.log(`✅ Automatski kreirano ${rezultat.kreirano} termina`);
  } catch (err) {
    console.error("❌ Greška pri automatskom generisanju termina:", err);
  }
});

 const getAllTermini = async (req, res) => {
    try {
        const termini = await terminiService.getAllTermini();
        res.json(termini);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    } 

};  

 const getTerminiByFrizer = async (req, res) => {
    const frizerId=req.user.id;
    if (!frizerId) {
        return res.status(400).json({ message: "Frizer ID is required" });
    }
    try {
        const termini = await terminiService.getTerminiByFrizer(frizerId);
        res.json(termini);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    } 
};

 const  getMojiTermini = async (req, res) => {
    const  klijentId  = req.user.id;
    if (!klijentId) {
        return res.status(400).json({ message: "Klijent ID is required" });
    }             
    try {
        const termini = await terminiService.getMojiTermini(klijentId);
        res.json(termini);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }     
};

 const createTermin = async (req, res) => {
    try {
        const noviTermin = await terminiService.createTermin(req.body);
        res.status(201).json(noviTermin);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

 const cancelTermin = async (req, res) => {
    const { id } = req.params;
    try {
        const otkazaniTermin = await terminiService.cancelTermin(id);
        res.json(otkazaniTermin);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export default {
    getAllTermini,
    getTerminiByFrizer, 
    getMojiTermini,
    createTermin,
    cancelTermin
};