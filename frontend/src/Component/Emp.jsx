
// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";


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

  const handleSubmit = async (e) => {
  e.preventDefault();
const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
if (!gmailRegex.test(employee.email)) {
  alert("Please enter a valid Gmail address.");
  return;
}
  const salary = Number(employee.salary);
  if (isNaN(salary) || salary <= 0) {
    alert("Please enter a valid salary greater than 0.");
    return;
  }

  try {
    const response = await api.post(`/api/emp/add`, employee, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.data.success) {
      alert("Employee Added!");
      navigate("/");
      setEmployee({ name: "", email: "", position: "", salary: "" });
    } else {
      alert(response.data.message || "Failed to add employee.");
    }
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      alert(err.response.data.message); 
    } else {
      alert("Something went wrong. Please try again.");
    }
  }
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