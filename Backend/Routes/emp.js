import express from "express";
import { addEmp, deleteEmp, getEmp } from "../Controller/emp.js";



const router = express.Router();

//Addd employee
router.post('/add',addEmp);

//get employee
router.get('/',getEmp);

//delete
router.delete("/:id",deleteEmp);

export default router;
