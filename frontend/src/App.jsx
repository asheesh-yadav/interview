import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/footer';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Overlay from './components/overlay';
import { LocationProvider } from './context/LocationContext';

export default function App() {
  return (
    <LocationProvider>  
      <Router>
        <Navbar />
        <Topbar />
        <Overlay />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* You can add more routes here in the future */}
        </Routes>
        <Footer />
      </Router>
    </LocationProvider>
  );
}
