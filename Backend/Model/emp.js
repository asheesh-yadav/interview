import mongoose from 'mongoose';

const mySchema = new mongoose.Schema({
    name: { type: String, required: true },
     email: { type: String, required: true },
    position: { type: String, required: true },
    salary: { type: String, required: true },
});

export const Emp = mongoose.model("Emp", mySchema);