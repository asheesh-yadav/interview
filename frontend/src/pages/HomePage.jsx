import React from 'react';
import HealthPackagePromo from '../components/HealthPackagePromo';
import Servicesshowcase from '../components/Servicesshowcase';
import FloatingWhatsappButton from '../components/FloatingWhatsappButton';
import FixedBottomBar from '../components/bottombar';

export default function HomePage() {
  return (
    <div className="font-sans bg-white">
      <HealthPackagePromo />
      <Servicesshowcase />
      <FloatingWhatsappButton />
      <FixedBottomBar />
    </div>
  );
}
