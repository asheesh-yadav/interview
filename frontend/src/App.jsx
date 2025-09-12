import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Component/Homepage';
import Navbar from './Component/Navbar';
import Emp from './Component/Emp';




export default function App() {
  return (
  
      <Router>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/emp-form" element={<Emp/>}></Route>
        </Routes>
  
      </Router>

  );
}
