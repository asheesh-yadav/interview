import express from 'express'
import empRouter from './Routes/emp.js'
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const MONGO_URI = process.env.MONGO_URI;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const allowedOrigins = ['http://localhost:5173', ''];
                                                 

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)){
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
       credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
}));

mongoose.connect(MONGO_URI) 
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));


// API ROUTES
app.use('/api/emp', empRouter);


    



app.get("/", (req, res) => {
res.json({ message: "root path" });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});