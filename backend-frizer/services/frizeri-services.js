import bcrypt from "bcrypt";
import frizeriRep from "../repositories/frizeriRep.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

async function loginFrizer(username, password) {
    const frizer = await frizeriRep.getByUsername(username);
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!frizer) {
        throw new Error("Invalid username");
    }
    const passwordMatch = await bcrypt.compare(password, frizer.Password);
    if (!passwordMatch) {
        throw new Error("Invalid password");
    }
    const token = jwt.sign(
        { id: frizer._id, username: frizer.UserName, role: frizer.role || "admin" },
        JWT_SECRET,
        { expiresIn: '1h' }
    );
    return { message: "Success", token };
}

async function getAll() {
    return await frizeriRep.getAll();
}

export default {
    loginFrizer,
    getAll
};