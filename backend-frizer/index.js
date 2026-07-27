import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import frizeriRoutes from "./routes/adminRoutes.js";
import klijentiRoutes from "./routes/clientRoutes.js";
import terminiRoutes from "./routes/terminiRoutes.js";
import { ensureAvailability } from "./services/availability.js";

dotenv.config();
const app=express(); const PORT=Number(process.env.PORT)||3001;
app.disable("x-powered-by");
app.use(cors({origin:process.env.CLIENT_URL?.split(",")||true,credentials:false}));
app.use(express.json({limit:"20kb"}));
app.get("/api/health",(_req,res)=>res.json({status:"ok",timestamp:new Date().toISOString()}));
app.use("/api/v1/frizeri",frizeriRoutes);
app.use("/api/v1/klijenti",klijentiRoutes);
app.use("/api/v1/termini",terminiRoutes);
app.use((_req,res)=>res.status(404).json({message:"Ruta nije pronađena."}));
app.use((err,_req,res,_next)=>{console.error(err);res.status(err.status||500).json({message:err.status?err.message:"Interna greška servera."})});

async function start(){await connectDB();if(!process.env.JWT_SECRET||process.env.JWT_SECRET.length<32)throw new Error("JWT_SECRET mora biti postavljen i imati najmanje 32 znaka.");await ensureAvailability();setInterval(()=>ensureAvailability().catch(console.error),6*60*60*1000).unref();app.listen(PORT,()=>console.log(`API sluša na portu ${PORT}`))}
start().catch(err=>{console.error("Pokretanje servera nije uspjelo:",err.message);process.exit(1)});
