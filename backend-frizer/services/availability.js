import Frizer from "../models/frizeri.js";
import Termin from "../models/termini.js";

const defaults=[
  {ime:"Adnan",prezime:"Kapić",specijalnost:"Fade & klasično šišanje"},
  {ime:"Kenan",prezime:"Hadžić",specijalnost:"Brada & precizne linije"},
  {ime:"Emir",prezime:"Delić",specijalnost:"Moderni stilovi"},
];

export async function ensureAvailability(){
 let barbers=await Frizer.find();
 if(!barbers.length)barbers=await Frizer.insertMany(defaults);
 const operations=[]; const now=new Date(); now.setMinutes(0,0,0);
 for(const frizer of barbers){for(let day=0;day<14;day++){const date=new Date();date.setHours(0,0,0,0);date.setDate(date.getDate()+day);if(date.getDay()===0)continue;for(let hour=9;hour<20;hour++){const datum=new Date(date);datum.setHours(hour,0,0,0);if(datum<=now)continue;operations.push({updateOne:{filter:{frizerId:frizer._id,datum},update:{$setOnInsert:{frizerId:frizer._id,datum,zauzeto:false,klijentId:null}},upsert:true}})}}}
 if(operations.length)await Termin.bulkWrite(operations,{ordered:false});
 await Termin.deleteMany({datum:{$lt:new Date()},klijentId:null});
}
