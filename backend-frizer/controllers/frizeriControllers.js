import frizeriService from "../services/frizeri-services.js";

const getAllFrizeri = async (req, res) => {
    try {
        const frizeri = await frizeriService.getAll();
        res.json(frizeri);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }   
};

export default getAllFrizeri;
