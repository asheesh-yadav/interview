import express from "express";
import { addEmp, getEmp } from "../Controller/emp.js";



const router = express.Router();

//Addd employee
router.post('/add',addEmp);

//get employee
router.get('/',getEmp);


export default router;
