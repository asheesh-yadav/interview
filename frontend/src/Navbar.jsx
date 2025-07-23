import React, { useState, useRef, useEffect } from 'react';
import LocationOverlay from './overlay'; // Importing the new overlay component
import Topbar from './Topbar';
// --- SVG Icon Components ---
// Your icons are kept as they were.
const LogoIcon = () => (
  <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="45" y="28" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#00AEC7">
      Healthians
    </text>
    <path d="M35.72,15.28a5.1,5.1,0,0,0-7.21,0,5.1,5.1,0,0,0,0,7.21L32.1,26.08l3.6-3.6ZM25.71,25.29a8.11,8.11,0,0,1,11.42-11.42l1.42,1.42a10.1,10.1,0,0,0-14.25,0,10.2,10.2,0,0,0,0,14.25l-1.42,1.42A10.1,10.1,0,0,0,25.71,25.29Z" fill="#00AEC7"/>
    <path d="M28.5,12.5a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41l2.83,2.83a1,1,0,0,0,1.41-1.41Z" fill="#00AEC7"/>
    <path d="M25.68,18.1a4,4,0,0,0-2.83,1.17,4,4,0,0,0,0,5.66l2.83,2.83a4,4,0,0,0,5.66,0,4,4,0,0,0,1.17-2.83Z" fill="#00AEC7"/>
  </svg>
);
const MapPinIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);
const UserIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);
const PhoneIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
const ChevronDownIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6" />
    </svg>
);

// --- New Location Display Component ---
// This replaces the old dropdown. It just displays the city and opens the overlay on click.
const LocationDisplay = ({ selectedCity, onLocationClick }) => (
    <button 
        onClick={onLocationClick} 
        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
    >
        <MapPinIcon className="w-6 h-6 text-gray-400" />
        <div className="ml-2 text-left">
            <p className="text-xs text-gray-500">Your Location</p>
            <div className="flex items-center">
                <span className="font-semibold text-sm text-gray-800">{selectedCity}</span>
                <ChevronDownIcon className="w-4 h-4 ml-1" />
            </div>
        </div>
    </button>
);


// --- Main Navbar Component (Updated) ---
// It now receives props from the App component to handle location state.
const Navbar = ({ selectedCity, onLocationClick }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <nav className="bg-white shadow-sm w-full sticky top-0 z-50" style={{padding: '0 4%'}}>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex items-center justify-between h-20 px-8 gap-x-8 w-full">
                    {/* Logo on the left */}
                    <div className="flex-shrink-0">
                        <a href="/" aria-label="Home">
                            <img src="https://cdn1.healthians.com/img/healthians-logo.svg" alt="Healthians Logo" className="h-10 w-auto" />
                        </a>
                    </div>
                    {/* Spacer to push right content */}
                    <div className="flex-grow"></div>
                    {/* Right-aligned container for LocationDisplay and menu/hamburger */}
                    <div className="flex items-center gap-x-4">
                        <LocationDisplay selectedCity={selectedCity} onLocationClick={onLocationClick} />
                        {/* Desktop menu, hidden on mobile/tablet */}
                        <div className="hidden lg:flex items-center gap-x-8">
                            <div className="h-8 border-l border-gray-300"></div>
                            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                <UserIcon className="w-6 h-6 text-gray-400" />
                                <span className="ml-2 font-semibold text-sm">Login/Sign up</span>
                            </a>
                            <div className="h-8 border-l border-gray-300"></div>
                            <div className="flex items-center text-gray-600">
                                <PhoneIcon className="w-6 h-6 text-gray-400" />
                                <div className="ml-2 text-left">
                                    <p className="text-xs text-gray-500">Customer Support</p>
                                    <p className="font-semibold text-sm text-gray-800">1800-572-0005 / 999-888-000-5</p>
                                </div>
                            </div>
                            <div className="h-8 border-l border-gray-300"></div>
                            <div className="text-left">
                                <p className="text-xs text-gray-500">For Corporate Bookings/Enquiry</p>
                                <p className="font-semibold text-sm text-gray-800">931-125-387-5</p>
                            </div>
                        </div>
                        {/* Hamburger menu, visible below lg */}
                        <div className="lg:hidden flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Open main menu"
                            >
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};


// --- App Component (Updated to manage state) ---
// This is now the main controlling component for the page.
export default function App() {
  const [selectedCity, setSelectedCity] = useState('Gurgaon');
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleCitySelect = (city) => {
      setSelectedCity(city);
      setIsOverlayOpen(false);
  };

  return (
    <div className="bg-gray-50 font-sans">
      <Navbar 
        selectedCity={selectedCity}
        onLocationClick={() => setIsOverlayOpen(true)}
      />
      
      <LocationOverlay 
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        onCitySelect={handleCitySelect}
      />

      <Topbar />  
    </div>
  );
}
