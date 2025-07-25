import React, { useState } from 'react';
import { Home, ChevronDown, Search } from 'lucide-react';


// Topbar Component
function Topbar() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 700);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header className="bg-white shadow-sm">
      {isMobile ? (
        <div className="flex justify-center items-center py-3 px-2 w-full">
          <div className="flex flex-row w-full max-w-xl border border-cyan-300 rounded-xl overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Find your Package/Test/Scans"
              className="flex-grow px-4 py-2 text-gray-700 focus:outline-none bg-white"
              style={{ border: 'none', boxShadow: 'none' }}
            />
            <button className="px-4 flex items-center justify-center text-cyan-600 bg-white" style={{ border: 'none', boxShadow: 'none' }}>
              <Search size={20} />
            </button>
          </div>
        </div>
      ) : (
        <SecondaryNavbar />
      )}
    </header>
  );
}

// Data for the navigation items. This makes the navbar easy to update.
const navItems = [
  { name: 'Home', icon: <Home size={20} />, href: '#home', isIcon: true },
  {
    name: 'Blood Test',
    href: '#blood-test',
    dropdown: [
      { name: 'Complete Blood Count (CBC)', href: '#cbc' },
      { name: 'Blood Sugar Test', href: '#blood-sugar' },
      { name: 'Lipid Profile', href: '#lipid' },
      { name: 'Kidney Function Test', href: '#kft' },
    ],
  },
  {
    name: 'X-rays & Scans',
    href: '#scans',
    dropdown: [
      { name: 'Chest X-ray', href: '#chest-xray' },
      { name: 'MRI Scan', href: '#mri' },
      { name: 'CT Scan', href: '#ct-scan' },
      { name: 'Ultrasound', href: '#ultrasound' },
    ],
  },
  { name: 'Genetic Testing', href: '#genetic' },
  {
    name: 'Doctor Consultation',
    href: '#consultation',
    dropdown: [
      { name: 'General Physician', href: '#gp' },
      { name: 'Cardiologist', href: '#cardio' },
      { name: 'Dermatologist', href: '#derma' },
    ],
  },
  {
    name: 'Supplements',
    href: '#supplements',
    dropdown: [
      { name: 'Vitamins', href: '#vitamins' },
      { name: 'Minerals', href: '#minerals' },
      { name: 'Protein', href: '#protein' },
    ],
  },
  {
    name: 'Health Tips',
    href: '#health-tips',
    dropdown: [
        { name: 'Diet & Nutrition', href: '#diet' },
        { name: 'Exercise & Fitness', href: '#fitness' },
        { name: 'Mental Wellness', href: '#wellness' },
    ]
  },
  { name: 'Offers', href: '#offers' },
];

// The Secondary Navbar Component
function SecondaryNavbar() {
  const hoverBg = 'group-hover:bg-purple-600';
  const hoverText = 'group-hover:text-white';

  return (
    <nav className="bg-white w-full border-b border-gray-200 flex justify-center min-h-[64px] gap-x-10 ">
      <ul className="flex items-center justify-between gap-7 md:gap-8 lg:gap-14 flex-wrap whitespace-nowrap">
        {navItems.map((item) => (
          <li key={item.name} className="relative group">
            <a
              href={item.href}
              className={`flex items-center px-5 py-3 rounded-lg font-medium text-gray-700 transition-all duration-200 ease-in-out ${hoverBg} ${hoverText}`}
            >
              {item.icon && <span className={`transition-colors duration-200 ${hoverText}`} style={{height: '100%', display: 'flex', alignItems: 'center'}}>{item.icon}</span>}
              {!item.isIcon && <span className={`text-base transition-colors duration-200 ${hoverText}`} style={{height: '100%', display: 'flex', alignItems: 'center'}}>{item.name}</span>}
              {item.dropdown && <ChevronDown size={16} className={`ml-1 transition-colors duration-200 ${hoverText}`} />}
            </a>
            {/* Dropdown Menu */}
            {item.dropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out z-20">
                <div className="py-2">
                  {item.dropdown.map((dropdownItem) => (
                    <a
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-600 hover:text-white rounded transition-colors duration-200"
                    >
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Topbar;
