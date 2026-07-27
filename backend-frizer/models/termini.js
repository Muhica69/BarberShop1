import mongoose from 'mongoose';

const terminSchema = new mongoose.Schema({
    frizerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Frizeri', required: true },
    datum: { type: Date, required: true },
    zauzeto: { type: Boolean, default: false },
    klijentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Klijent', default: null }
}, { collection: 'Termini', timestamps: true });

terminSchema.index({ frizerId: 1, datum: 1 }, { unique: true });

export default mongoose.model('Termin', terminSchema);
