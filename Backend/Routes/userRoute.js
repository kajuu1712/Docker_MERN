import express from "express";
import { getUsers, signup } from "../Controllers/userController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/signup", signup);

export default router;