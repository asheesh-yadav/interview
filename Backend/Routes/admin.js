import express from 'express';
import { adminLogin, adminRegister, getAllUsers } from '../Controller/admin.js';
import verifyAdminToken from '../Middleware/verifyAdmin.js';


const router = express.Router();

// Auth
router.post('/register', adminRegister); 
router.post('/login', adminLogin);
router.get('/users',verifyAdminToken,getAllUsers)



export default router;
