import express from "express";
import Frizer from "../models/frizeri.js";
const router=express.Router();
router.get("/",async(_req,res,next)=>{try{const data=await Frizer.find().select("ime prezime specijalnost").lean();res.json(data)}catch(e){next(e)}});
export default router;
