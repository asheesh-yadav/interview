import express from "express";
import { login, register } from "../Controller/user.js";


const router = express.Router();

//register user
router.post('/register',register);

//Login User
router.post('/login',login);


export default router;
