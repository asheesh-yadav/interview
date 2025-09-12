import React, { useEffect, useState } from 'react'
// import api from '../api';
import axios from 'axios';
import "./Homepage.css"

const Homepage = () => {
  const [emp,setEmp] = useState([]);
  const fetchData = async()=>{
    try{
     const res =await axios.get("http://localhost:3000/api/emp");
     console.log(res.data.data);
     setEmp(res.data.data);
    }catch(err){
      console.error("falied to fetch data");
    }
  }

useEffect(()=>{
  fetchData();
},[]);

  return (
   <div className="container">
      <h2>Employee List</h2>
      {emp.length === 0 ? (
        <p>No employees found</p>
      ) : (
        <ul className="employee-list">
          {emp.map((employee) => (
            <li key={employee._id} className="employee-item">
              <p><strong>Name:</strong> {employee.name}</p>
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Position:</strong> {employee.position}</p>
              <p><strong>Salary:</strong> ₹{employee.salary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Homepage
