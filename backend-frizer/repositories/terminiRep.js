import Termini from '../models/termini.js';

const getAll = () => Termini.find();

const getSlobodniTermini = () => Termini.find({ klijentId: null });

const rezervisiTermin = (terminId, klijentId) =>
    Termini.findByIdAndUpdate(terminId, { klijentId }, { new: true });

const otkaziTermin = (terminId) =>
    Termini.findByIdAndUpdate(terminId, { klijentId: null }, { new: true });

const getZauzetiTerminiByFrizerId = (frizerId) =>
    Termini.find({ frizerId, klijentId: { $ne: null } });

const getZauzetiTerminiByKlijentId = (klijentId) =>
    Termini.find({ klijentId });

export default {
    getAll,
    getSlobodniTermini,
    rezervisiTermin,
    otkaziTermin,
    getZauzetiTerminiByFrizerId,
    getZauzetiTerminiByKlijentId
};