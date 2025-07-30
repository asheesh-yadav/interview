import express from 'express'
import userRouter from './Routes/user.js'
import adminRouter from './Routes/admin.js'
import cors from 'cors'
import mongoose from 'mongoose';

const app = express();

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
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
}));

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI) 
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));


// API ROUTES
app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);

    



app.get("/", (req, res) => {
res.json({ message: "root path" });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});