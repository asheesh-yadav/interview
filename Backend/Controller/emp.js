import { Emp } from "../Model/emp.js";

  
  
export const addEmp = async(req,res)=>{
    try{
   const {name,email,position,salary} = req.body;
   if(!name || !email || !position || !salary) return res.status(400).json({message:"all fields are required",success:false});
    const data = await Emp.create({
        name,
        email,
        position,
        salary
    });
    res.status(201).json({message:"emp added successfully",success:true,data});

    }catch(err){
        res.status(500).json({message:"failed to add",success:false});
    }
}

//get data 
export const getEmp = async(req,res)=>{
    try{
     const data = await Emp.find({});
     if(!data.length) return res.status(404).json({message:"data not found",success:false});
     res.status(200).json({message:"data found successfully",success:true,data});
    }catch(err){
        res.status(500).json({message:"failed to fetch emp data",success:false});
    }
}