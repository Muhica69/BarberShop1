import jwt from "jsonwebtoken";
export default function authMiddleware(req,res,next){const header=req.headers.authorization;if(!header?.startsWith("Bearer "))return res.status(401).json({message:"Prijava je obavezna."});try{req.user=jwt.verify(header.slice(7),process.env.JWT_SECRET);next()}catch{return res.status(401).json({message:"Sesija je istekla. Prijavite se ponovo."})}}
