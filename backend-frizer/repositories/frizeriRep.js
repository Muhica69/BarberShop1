import Frizeri from '../models/frizeri.js';


const getAll = () => Frizeri.find();
const getById = (id) => Frizeri.findById(id);
const getByUsername = (username) => Frizeri.findOne({ UserName: username });
const create = (data) => Frizeri.create(data);
const updateById = (id, updateData) => Frizeri.findByIdAndUpdate(id, updateData, { new: true });
const deleteById = (id) => Frizeri.findByIdAndDelete(id);


export default {
  getAll,
  getById,
  getByUsername,
  create,
  updateById,
  deleteById
};

