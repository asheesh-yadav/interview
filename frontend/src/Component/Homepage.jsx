import React, { useEffect, useState } from 'react'
import api from '../api';
// import axios from 'axios';
import "./Homepage.css"

const Homepage = () => {
  const [emp,setEmp] = useState([]);
  const fetchData = async()=>{
    try{
     const res =await api.get("/api/emp");
     console.log(res.data.data);
      setEmp(res.data?.data || []);
    }catch(err){
      console.error("falied to fetch data");
    }
  }

   const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;

    try {
      const res = await api.delete(`/api/emp/${id}`);
      if (res.data.success) {
        alert("Employee deleted successfully!");
        setEmp((prev) => prev.filter((employee) => employee._id !== id));
      } else {
        alert(res.data.message || "Failed to delete employee.");
      }
    } catch (err) {
      console.error("Failed to delete employee", err);
      alert("Something went wrong while deleting.");
    }
  };

useEffect(()=>{
  fetchData();
  console.log("Env Test:", import.meta.env);
  console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);
},[]);

  return (
   <div className="container">
      <h2>Employee List</h2>
      {!emp.length ? (
        <p>No employees found</p>
      ) : (
        <ul className="employee-list">
          {emp.map((employee) => (
            <li key={employee._id} className="employee-item">
              <p><strong>Emp Id:</strong> {employee._id}</p>
              <p><strong>Name:</strong> {employee.name}</p>
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Position:</strong> {employee.position}</p>
              <p><strong>Salary:</strong> ₹{employee.salary}</p>
               <button
                onClick={() => handleDelete(employee._id)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Homepage
