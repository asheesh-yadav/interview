import React, { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [selectedCity, setSelectedCity] = useState('Gurgaon');
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsOverlayOpen(false);
  };

  const handleLocationClick = () => {
    setIsOverlayOpen(true);
  };

  return (
    <LocationContext.Provider value={{
      selectedCity,
      setSelectedCity,
      isOverlayOpen,
      setIsOverlayOpen,
      handleCitySelect,
      handleLocationClick
    }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
} 