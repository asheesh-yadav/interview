
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Emp = () => {
const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    position: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  await axios.post(`http://localhost:3000/api/emp/add`, employee, {
          headers: { 'Content-Type': 'application/json' },
        });
     
    console.log("Employee Data:", employee);
    alert("Employee Added!");
    navigate("/");
    
    setEmployee({ name: "", email: "", position: "", salary: "" });
  };


   


  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Employee Form</h2>

      <label style={styles.label}>Name</label>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <label style={styles.label}>Email</label>
      <input
        type="email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <label style={styles.label}>Position</label>
      <input
        type="text"
        name="position"
        value={employee.position}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <label style={styles.label}>Salary</label>
      <input
        type="number"
        name="salary"
        value={employee.salary}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <button type="submit" style={styles.button}>Add Employee</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: "400px",
    margin: "20px auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    background: "#f9f9f9",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px",
    background: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Emp;
