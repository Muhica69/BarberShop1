
import klijentiController from "../controllers/klijentiControllers.js";
import express from "express";


const router = express.Router();

router.post('/login',klijentiController.login);
router.post('/register',klijentiController.register);

export default router;