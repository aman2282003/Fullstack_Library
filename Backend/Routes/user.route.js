import express from "express";
import { Signup } from "../Controllers/user.controller.js";
import { login } from "../Controllers/user.controller.js";
const router = express.Router();

router.post("/signup", Signup);
router.post("/login", login);

export default router;
