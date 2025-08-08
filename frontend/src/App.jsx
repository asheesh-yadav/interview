import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/footer';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Overlay from './components/overlay';
import { LocationProvider } from './context/LocationContext';
import HealthPackage  from './pages/HealthPackage';
import ScanPage from './pages/ScanPage';
import RiskAreas from './pages/Riskarea';
import Offers from './Offers/offer';
import Genetic from './Genetic Testing/Geneticmain.jsx';
import DoctorConsultation from './pages/doctorconsultaion';
import Herbved from './pages/herbved';


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
          <Route path="/healthpackage" element={<HealthPackage />} />
          <Route path="/scanpage" element={<ScanPage />} />
          <Route path="/riskareas" element={<RiskAreas />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/genetic" element={<Genetic />} />
          <Route path="/doctorconsultation" element={<DoctorConsultation />} />
          <Route path="/herbved" element={<Herbved />} />
        </Routes>
        <Footer />
      </Router>
    </LocationProvider>
  );
}
